import React, { useState, useEffect } from 'react';
import axios from 'axios'

import PersonForm from './components/PersonForm';
import Filter from './components/Filter'
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  const promise = axios.get('http://localhost:3001/persons')
  console.log(promise)

  const [filter, setFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName.trim(),
      number: newNumber.trim()
    };

    const normalizedNewName = newName.trim().toLowerCase();

    const personAdded = persons.some((person) => person.name.toLowerCase() === normalizedNewName);
    const numberAdded = persons.some((person) => person.number === newNumber.trim());

    if (personAdded && numberAdded) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');

    console.log(persons);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value.trim().toLowerCase());
  };

  const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()));

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>

      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addPerson={addPerson}/>
      
      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />

    </div>
  );

};

export default App;

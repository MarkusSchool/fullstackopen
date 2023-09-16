import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';

import personsDataBase from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    personsDataBase.getPersons().then((response) => {
      console.log(response);
      setPersons(response);
    });
  }, []);

  const [filter, setFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName.trim(),
      number: newNumber.trim(),
    };

    const normalizedNewName = newName.trim().toLowerCase();

    const personAdded = persons.find(
      (person) => person.name.toLowerCase() === normalizedNewName
    );

    const numberAdded = persons.some(
      (person) => person.number === newNumber.trim()
    );

    if (personAdded && numberAdded) {
      alert(`${newName} is already added to the phonebook`);
    }

    else if (numberAdded) {
      alert(`${newNumber} is already added to the phonebook`);
    }

    else if (personAdded) {

      if (personAdded && window.confirm(`${newName || personAdded.name} is already in the phonebook. Replace the old number with a new one?`)) {
        personsDataBase.updatePerson(personAdded.id, personObject)
          .then((response) => {
            setPersons(persons.map((person) => person.id === personAdded.id ? response : person));
            setNewName('');
            setNewNumber('');
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      personsDataBase.createPerson(personObject).then((response) => {
        setPersons(persons.concat(response));
        setNewName('');
        setNewNumber('');
      });
    }

  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value.trim().toLowerCase());
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleDeleting = (id) => {
    const personToDelete = persons.find((person) => person.id === id);

    if (personToDelete && window.confirm(`Delete ${personToDelete.name} ?`)) {

      personsDataBase.deletePerson(id).then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })

        .catch(error => {
          console.log(error)
        })

    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addPerson={addPerson} />

      <h3>Numbers</h3>
      <Persons persons={filteredPersons} handleDeleting={handleDeleting} />
    </div>
  );
};

export default App;
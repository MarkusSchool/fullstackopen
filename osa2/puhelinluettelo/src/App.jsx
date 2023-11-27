import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import Notification from './components/Notification'

import personsDataBase from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => { personsDataBase.getPersons().then((response) => { setPersons(response); }); }, []);

  const [filter, setFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [message, setMessage] = useState(null);

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName.trim(),
      number: newNumber.trim(), 
    };

    const normalizedNewName = newName.trim().toLowerCase();

    const personAdded = persons.find((person) => person.name.toLowerCase() === normalizedNewName);

    const numberAdded = persons.some((person) => person.number === newNumber.trim());

    if (personAdded && numberAdded) { alert(`${newName} is already added to the phonebook`); }

    else if (numberAdded) { alert(`${newNumber} is already added to the phonebook`); }

    else if (personAdded) {

      if (window.confirm(`${newName || personAdded.name} is already in the phonebook. Replace the old number with a new one?`)) {
        personsDataBase.updatePerson(personAdded.id, personObject)
          .then((response) => {
            setPersons(persons.map((person) => person.id === personAdded.id ? response : person));
            setNewName('');
            setNewNumber('');
            setMessage(`Updated ${newName}`)
          })
          .catch((error) => {
            console.log(error);
            setMessage(`Information of ${newName || personAdded.name} has alread been removed from server`)
          });
      }

    } else {
      personsDataBase.createPerson(personObject).then((response) => {
        setPersons(persons.concat(response));
        setNewName('');
        setNewNumber('');
        setMessage(`Added ${newName}`)

      });
    }
    setTimeout(() => {
      setMessage(null)
    }, 3000)
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

  const handleDeleting = (id) => {
    const personToDelete = persons.find((person) => person.id === id);

    if (personToDelete && window.confirm(`Delete ${personToDelete.name} ?`)) {

      personsDataBase.deletePerson(id).then(() => {
        setPersons(persons.filter(person => person.id !== id))
        setMessage(`Deleted ${personToDelete.name}`)
      })

        .catch(error => {
          console.log(error)
        })
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addPerson={addPerson} />

      <h3>Numbers</h3>
      <Persons persons={filteredPersons} handleDeleting={handleDeleting} />
    </div>
  );
};

export default App;
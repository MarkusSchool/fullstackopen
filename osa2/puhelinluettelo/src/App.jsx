import React, { useState } from 'react';

const App = () => {
  const App = () => {
    
    const [persons, setPersons] = useState([
      { name: 'Arto Hellas', number: '040-123456' },
      { name: 'Ada Lovelace', number: '39-44-5323523' },
      { name: 'Dan Abramov', number: '12-43-234345' },
      { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
  }

  const [newName, setNewName] = useState('');
  const [newNumber, setnewNumber] = useState('');


  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName.trim(),
      number: newNumber.trim()
    };

    const normalizedNewName = newName.trim().toLowerCase();

    const personAdded = persons.some((person) => person.name.toLowerCase() === normalizedNewName)
    const numberAdded = persons.some((person) => person.number === newNumber.trim());

    if (personAdded && numberAdded) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat(personObject));
    setNewName('');
    setnewNumber('');

    console.log(persons);
  };


  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setnewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input />
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => (
          <li key={i}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

import React from 'react';

const Person = ({ person, handleDeleting }) => {
  return (
    <div>
      {person.name} {person.number}
      <button onClick={() => handleDeleting(person.id)}>Delete</button>
    </div>
  );
};

const Persons = ({ persons, handleDeleting }) => {
  return (
    <ul>
      {persons.map((person, i) => (
        <li key={i}>
          <Person person={person} handleDeleting={handleDeleting} />
        </li>
      ))}
    </ul>
  );
};

export default Persons;

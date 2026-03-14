import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleSearchInputChange = (event) => setSearchInput(event.target.value);

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <label htmlFor='search'>
        filter shown with{' '}
        <input
          id='search'
          value={searchInput}
          onChange={handleSearchInputChange}
        />
      </label>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor='name'>
            name:{' '}
            <input id='name' value={newName} onChange={handleNameChange} />
          </label>
          <label htmlFor='number'>
            number:{' '}
            <input
              id='number'
              value={newNumber}
              onChange={handleNumberChange}
            />
          </label>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons
          .filter((person) =>
            person.name.toLowerCase().includes(searchInput.toLowerCase()),
          )
          .map((person) => (
            <li key={person.id}>
              {person.name} {person.number}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;

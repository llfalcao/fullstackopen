const PersonForm = ({
  name,
  onNameChange,
  number,
  onNumberChange,
  addPerson,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor='name'>
          name: <input id='name' value={name} onChange={onNameChange} />
        </label>
        <label htmlFor='number'>
          number: <input id='number' value={number} onChange={onNumberChange} />
        </label>
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default PersonForm;

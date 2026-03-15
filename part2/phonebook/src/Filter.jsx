const Filter = ({ query, onChange }) => {
  return (
    <div>
      <label htmlFor='search'>
        filter shown with{' '}
        <input id='search' value={query} onChange={onChange} />
      </label>
    </div>
  );
};

export default Filter;

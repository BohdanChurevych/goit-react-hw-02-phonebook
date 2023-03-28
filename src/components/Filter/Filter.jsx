const Filter = ({ changeFilter, filter }) => {
  return (
    <div>
      <h2>Find contacts by name</h2>
      <label>
        <input onChange={changeFilter} type="text" value={filter} />
      </label>
    </div>
  );
};

export default Filter;

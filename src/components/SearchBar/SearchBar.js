const SearchBar = ({ submit , change ,currentValue}) => {
  return (
    <form onSubmit={submit}>
      <input
      onChange={change}
        type="text"
        autoComplete="off"
        placeholder="Search image..."
        value={currentValue}
        required
      />
      <button type="submit">Click to fetch data from server</button>
    </form>
  );
};
export default SearchBar;

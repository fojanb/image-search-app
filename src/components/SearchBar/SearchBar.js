import { useState } from "react";
const SearchBar = ({getImages}) => {
  const [term, setTerm] = useState("cat");
  const changeHandler = (e) => {
    setTerm(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    getImages(term);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={changeHandler}
        type="text"
        autoComplete="off"
        placeholder="Search image..."
        value={term}
        required
      />
      <button type="submit">Click to fetch data from server</button>
    </form>
  );
};
export default SearchBar;

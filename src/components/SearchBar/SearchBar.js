import { useState } from "react";
import "./SearchBar.css";
const SearchBar = ({getImages}) => {
  const [term, setTerm] = useState("");
  const changeHandler = (e) => {
    setTerm(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    getImages(term);
    setTerm("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={changeHandler}
        type="text"
        autoComplete="off"
        placeholder="Search something..."
        value={term}
        required
      />
      {/* <button type="submit">Click to fetch data from server</button> */}
    </form>
  );
};
export default SearchBar;

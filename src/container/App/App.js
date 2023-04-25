import searchImage from "../../api";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
const App = () => {
  const [term, setTerm] = useState("cat");
  const changeHandler = (e) => {
    setTerm(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    searchImage(term);
  };
  return (
    <>
      <h1>Image Search App with React.js and Axios</h1>
      <SearchBar
        submit={(e) => submitHandler(e)}
        change={(e) => changeHandler(e)}
        currentValue = {term}
      />
    </>
  );
};
export default App;

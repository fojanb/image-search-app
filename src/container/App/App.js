import SearchBar from "../../components/SearchBar/SearchBar";
const App = () => {
    const {REACT_APP_ACCESS_KEY} = process.env;
    console.log(REACT_APP_ACCESS_KEY)
  return (
    <>
      <h1>Image Search App with React.js</h1>
      <SearchBar />
    </>
  );
};
export default App;

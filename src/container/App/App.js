import SearchBar from "../../components/SearchBar/SearchBar";
import ImageList from "../../components/ImageList/ImageList";
import searchImage from "../../utils/api";
import { useState } from "react";
const App = () => {
  const [images, setImages] = useState([]);
  const getImages = async (term) => {
    let result = await searchImage(term);
    setImages(result);
  };
  return (
    <>
      <h1>Image Search App with React.js and Axios</h1>
      <SearchBar getImages={getImages} />
      <ImageList images={images} />
    </>
  );
};
export default App;

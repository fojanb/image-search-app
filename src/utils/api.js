import axios from "axios";
const searchImage = async (searchQuery) => {
  const options = {
    headers: {Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`},
    params: {query:searchQuery},
  };
  const response = await axios.get("https://api.unsplash.com/search/photos", options);
  return response.data.results;
};
export default searchImage;

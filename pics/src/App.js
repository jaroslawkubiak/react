import {useState} from 'react';
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

function App() {
  const [images, setImages] = useState([]);

  //funckja przekazana jako onSubmitForm do SearchBar.js
  const handleSubmitFunction = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmitForm={handleSubmitFunction}/>
      <ImageList images={images}/>
    </div>
  );
}

export default App;

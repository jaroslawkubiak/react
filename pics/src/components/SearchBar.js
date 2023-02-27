//importing css file
import './SearchBar.css';
import { useState } from "react";


function SearchBar({ onSubmitForm }) {
  const [term, setTerm] = useState("");

  //event na zatwierdzenie formularza - enter
  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmitForm(term);
  };

  //event na zmianę w input - wpisywanie nowych znaków
  const handleChange = event => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter search term</label>
        <input onChange={handleChange} value={term} />
      </form>
    </div>
  );
}

export default SearchBar;

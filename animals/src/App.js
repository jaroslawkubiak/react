import './App.css';
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ['bird', 'horse', 'cat', 'dog', 'cow', 'gator'];

  return animals[Math.floor(Math.random() * animals.length)];
}


function App() {
const [animals, setAnimals] = useState([]);
  
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
return <AnimalShow type={animal} key={index} />;
  });

  console.log(renderedAnimals);
  return (
    <div className="app">
      <button onClick={handleClick}>Add animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;

import './AnimalShow.css';
import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import dog from "./svg/dog.svg";
import heart from "./svg/heart.svg";

const svgMap = {
  bird,
  cat,
  cow,
  horse,
  dog,
  gator,
};

function AnimalShow({ type }) {
  //variables - destructuring useState array
  const [clicks, setClicks] = useState(0);

  //event for onClick event
  const handleClick = () => setClicks(clicks + 1);

  return (
    //add class style, inline style for img musi być w { { } } - przekazana jako obiekt
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="Animal" src={svgMap[type]}></img>
      <img className="heart" alt="heart" src = {heart} style={{width: 10 + 10* clicks + 'px'}}></img>
    </div>
  );
}

export default AnimalShow;

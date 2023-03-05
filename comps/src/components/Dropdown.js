import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel.js";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  // przypisujemy refenecje do zmiennej divEl = zmienna to obiekt!
  const divEl = useRef();

  useEffect(() => {
    const handler = event => {
      // sprawdzamy czy divEl w ogóle istnieje, czy nie jest ukryty
      if (!divEl.current) return;

      //sprawdzamy czy el który został kliknięty zawiera zapisany ref divEl
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    const cleanUp = () => {
      document.removeEventListener("click", handler);
    };
    return cleanUp;
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = option => {
    //close dropdown
    setIsOpen(false);

    //what option uesr click
    onChange(option);
  };

  const renderedOptions = options.map(option => {
    return (
      // onClick zwraca nową funkcję wywołującą handleOptionClick z parametrem
      <div
        className="p-2 mb-2 rounded cursor-pointer bg-white"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative m-2">
      <Panel
        className="justify-between flex items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-xl" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;

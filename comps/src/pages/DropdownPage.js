import { useState } from "react";
import Dropdown from "../components/Dropdown.js";

function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = option => {
    setSelection(option);
  };

  const options = [
    { label: "RED", value: "red" },
    { label: "GREEN", value: "green" },
    { label: "BLUE", value: "blue" },
  ];

  return (
  <div className="flex">
    <Dropdown options={options} value={selection} onChange={handleSelect}/>
  </div>);
}

export default DropdownPage;

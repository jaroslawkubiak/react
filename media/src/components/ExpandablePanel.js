import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function ExpandablePanel({ header, children }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = e => {
    setExpanded(!expanded);
  };

  return (
    <div className="mt-2 mb-2 border rounded">
      <div
        onClick={handleClick}
        className="cursor-pointer rounded flex p-2 justify-between text-slate-200 items-center bg-slate-900"
      >
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div>
          {expanded ? (
            <GoChevronDown className="text-4xl" />
          ) : (
            <GoChevronLeft className="text-4xl" />
          )}
        </div>
      </div>
      {expanded && (
        <div className="p-2 border-t  bg-slate-900 text-slate-200 rounded">
          {children}
        </div>
      )}
    </div>
  );
}

export default ExpandablePanel;

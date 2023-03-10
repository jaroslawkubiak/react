import { useState } from "react";
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

function SortableTable(props) {
  const { config, data } = props;

  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleClick = label => {
    // upewniamy się że sortowanie się zeruje gdy zmieniamy kolumnę po której sortujemy
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    switch (sortOrder) {
      case null:
        setSortOrder("asc");
        setSortBy(label);
        break;
      case "asc":
        setSortOrder("desc");
        setSortBy(label);
        break;
      case "desc":
        setSortOrder(null);
        setSortBy(null);
        break;
      default:
        break;
    }
  };

  const updatedConfig = config.map(column => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:text-blue-500"
          onClick={() => handleClick(column.label)}
        >
          <div className=" flex items-center p-2">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  // only sort data if sortOrder && sortBy are not null
  // make a copy of the data prop
  // find the correct sort value function and use it
  let sortedData = data;
  // jak oba nie są null to musimy przeprowadzić jakieś sortowanie
  if (sortOrder && sortBy) {
    //sortValue to funkcja pochodząca z obiektu config
    const { sortValue } = config.find(column => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      //sprawdzamy jaka ma być kolejność sortowania, jak DESC to mnożymy wynik sort asc * -1 co daje odwrotne sortowanie!
      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return (
    <div>
      {/* nadpisujemy obiekt data przez sortedData oraz obiek config przez updateConfig */}
      <Table {...props} config={updatedConfig} data={sortedData} />
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }
  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
}
export default SortableTable;

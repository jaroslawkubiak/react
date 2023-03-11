import { useState } from "react";

function useSort(config, data) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = label => {
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

  return { sortOrder, sortBy, setSortColumn, sortedData };
}

export default useSort;

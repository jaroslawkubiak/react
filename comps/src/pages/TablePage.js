import SortableTable from "../components/SortableTable";

function TablePage() {
    // dana do tabeli - wiersze
  const data = [
    { name: "Orange", color: "bg-orange-400", score: 5 },
    { name: "Apple", color: "bg-red-400", score: 3 },
    { name: "Banana", color: "bg-yellow-300", score: 1 },
    { name: "Lime", color: "bg-green-300", score: 4 },
  ];

  // plik konfiguracyjny do kolumn tabeli
  const config = [
    {
      label: "Name",
      render: fruit => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: fruit => <div className={`p-3 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: fruit => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  //funkcja generująca klucz - developer ma ją podać
  const keyFn = fruit => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}
export default TablePage;

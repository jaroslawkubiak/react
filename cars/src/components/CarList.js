import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store/slice/carsSlice";

function CarList() {
  const dispatch = useDispatch();

  const cars = useSelector(({ cars: { data, searchTerm } }) => {
    //filtering logic - search term
    return data.filter(car => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  const handleCarDelete = car => {
    dispatch(removeCar(car.id));
  };

  const renderedData = cars.map(car => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - {car.cost} zł
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedData}
      <hr />
    </div>
  );
}

export default CarList;

import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store/slice/carsSlice";

function CarList() {
  const dispatch = useDispatch();

  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    //filtering logic - search term
    const filteredCars = data.filter(car => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  const handleCarDelete = car => {
    dispatch(removeCar(car.id));
  };

  const renderedData = cars.map(car => {
    // decide if the car should be bold font
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
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

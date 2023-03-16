import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducers,
  changeSearchTerm,
  addCar,
  removeCar,
} from "./slice/carsSlice";
import { formReducer, changeName, changeCost } from "./slice/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducers,
    form: formReducer,
  },
});

export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm };

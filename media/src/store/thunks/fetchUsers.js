import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// pierwszy argument - string, dowolna nazwa, która odzwierciedla co chcemy zrobić
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  //tworzymy zapytanie
  const response = await axios.get("http://localhost:3001/users");
  // odsyłam dane z serwera do reducera
  // cokolwiek zwracamy z thunk zostanie przypisane do payload property
  // w tym wypadku będzei to tabela z obiektami userów
  // jeżęli wystąpi błąd to object błedu trafia do property error

  // dev only
  // await pause(2000);
  return response.data;
});

// DEV ONLY!!!
const pause = duration => {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };

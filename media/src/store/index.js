import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice.js";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

// znajdz wszystko z tych plików co jest exportowane i wyeksportuj
export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";

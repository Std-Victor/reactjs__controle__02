import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import continentSlice from "./continent.slice";


const store = configureStore({
  reducer: continentSlice,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;

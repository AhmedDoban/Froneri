import { configureStore } from "@reduxjs/toolkit";
import VacanciesSlice from "./Slices/VacanciesSlice";

export const Store = configureStore({
  reducer: {
    Vacancies: VacanciesSlice,
  },
});

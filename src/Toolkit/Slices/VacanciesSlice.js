import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const GetVacancies = createAsyncThunk("GetVacancies", async () => {
  try {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API}/vacancies`)
      .then((res) => console.log(res.data));
  } catch (err) {
    throw err;
  }
});

const VacanciesSlice = createSlice({
  name: "VacanciesSlice",
  initialState: {
    Loading: false,
    AllVacancies: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetVacancies.pending, (State, Action) => {});
    builder.addCase(GetVacancies.rejected, (State, Action) => {});
    builder.addCase(GetVacancies.fulfilled, (State, Action) => {
      State.AllVacancies = Action.payload;
    });
  },
});

export const {} = VacanciesSlice.actions;
export default VacanciesSlice.reducer;

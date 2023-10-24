import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  filter: string;
}

const filtersInitialState: FiltersState = {
  filter: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

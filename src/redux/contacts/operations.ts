import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Contact, ContactResponse } from "../../types";



export const fetchContacts = createAsyncThunk<ContactResponse>(
  "/table/table_list",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get<ContactResponse>("/table/");
      console.log(data);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

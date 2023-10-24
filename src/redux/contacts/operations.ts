import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  AddContactArgs,
  Contact,
  ContactResponse,
  ContactsState,
} from "../../types";
import Notiflix from "notiflix";

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

export const addContact = createAsyncThunk<Contact, AddContactArgs>(
  "table/table_create",
  async ({ TableData }, thunkAPI) => {
    try {
      const { data: responseData } = await axios.post("/table/", TableData);
      return responseData;
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        Notiflix.Notify.failure(
          "Помилка: Некоректні дані. Будь ласка, перевірте дані та спробуйте ще раз."
        );
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Contact {
  id: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address: string;
}

export const fetchContacts = createAsyncThunk<Contact[]>(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get<Contact[]>("table/");
      console.log(data);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

interface AddContactArgs {
  name: string;
  number: string;
}

export const addContact = createAsyncThunk<Contact, AddContactArgs>(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    try {
      const { data } = await axios.post<Contact>("/contacts", { name, number });
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk<Contact, number>(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete<Contact>(`/contacts/${contactId}`);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

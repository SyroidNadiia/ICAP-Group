import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

interface Contact {
  id: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address: string;
}

interface ContactsState {
  items: Contact[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ContactsState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchContacts.fulfilled,
        (state, action: PayloadAction<Contact[]>) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        }
      )
      .addCase(
        fetchContacts.rejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.error.message || "An error occurred";
        }
      )
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        addContact.fulfilled,
        (state, action: PayloadAction<Contact>) => {
          state.isLoading = false;
          state.error = null;
          state.items.push(action.payload);
        }
      )
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
         state.error = action.error.message || "An error occurred";
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        deleteContact.fulfilled,
        (state, action: PayloadAction<{ id: number }>) => {
          state.isLoading = false;
          state.error = null;
          const index = state.items.findIndex(
            (contact) => contact.id === action.payload.id
          );
          if (index !== -1) {
            state.items.splice(index, 1);
          }
        }
      )
      .addCase(
        deleteContact.rejected,
        (state, action) => {
          state.isLoading = false;
           state.error = action.error.message || "An error occurred";
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;

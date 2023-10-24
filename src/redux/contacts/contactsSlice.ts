import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addContact, fetchContacts } from "./operations";
import { Contact, ContactResponse, ContactsState, initialState } from "../../types";


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
        (state, action: PayloadAction<ContactResponse>) => {
          state.isLoading = false;
          state.error = null;
          if (action.payload.results) {
            state.items = action.payload.results;
          } else {
            state.items = [];
          }
        }
      )
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "An error occurred";
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

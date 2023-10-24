import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store"; 

export const getContacts = (state: RootState) => state.contacts.items;

export const getIsLoading = (state: RootState) => state.contacts.isLoading;

export const getError = (state: RootState) => state.contacts.error;

export const getFilter = (state: RootState) =>
  String(state.filter.filter).toLowerCase();

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    if (!Array.isArray(contacts)) {
      return [];
    }

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

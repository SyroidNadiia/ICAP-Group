import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store"; 

export const getContacts = (state: RootState) => state.contacts.items;

export const getIsLoading = (state: RootState) => state.contacts.isLoading;

export const getError = (state: RootState) => state.contacts.error;


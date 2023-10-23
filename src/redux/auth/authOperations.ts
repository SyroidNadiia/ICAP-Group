import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = "http://146.190.118.121/api";
// axios.defaults.headers.common['Content-Type'] = 'application/json';

interface LoginData {
  username: string;
  password: string;
}

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials: LoginData, thunkApi) => {
    try {
      const response = await axios.post("/login/", credentials);
      console.log(response);
      return response;
    } catch (error: any) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
);

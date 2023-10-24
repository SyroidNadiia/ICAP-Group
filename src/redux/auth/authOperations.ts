import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://technical-task-api.icapgroupgmbh.com/api";
// axios.defaults.headers.common["Content-Type"] = "application/json";

interface LoginData {
  username: string;
  password: string;
}


export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials: LoginData, thunkApi) => {
    try {
      const data = await axios.post("login/", credentials);
      console.log(data);
      return data;
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        Notiflix.Notify.failure(
          "Помилка: Некоректний логін або пароль. Будь ласка, перевірте дані та спробуйте ще раз."
        );
      } else {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  }
);

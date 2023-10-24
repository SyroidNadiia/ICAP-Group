import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { logIn } from "./authOperations";

interface ServerResponse {
  data: {
    user: any;
    token?: string | null;
    isLoggedIn: boolean;
  };
}

interface AuthState {
  user: any;
  token: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "api/auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        logIn.fulfilled,
        (state, action: PayloadAction<ServerResponse | undefined>) => {
          if (
            action.payload &&
            action.payload.data &&
            action.payload.data.user
          ) {
            state.user = action.payload.data.user;
            state.token =
              action.payload.data.token !== undefined
                ? action.payload.data.token
                : null;
            state.isLoggedIn = true;
          } else {
            state.user = { name: null, email: null };
          }
        }
      )
      .addCase(
        logIn.rejected,
        (state, action: PayloadAction<unknown, string, any, any>) => {
          state.user = { name: null, email: null };
        }
      );
  },
});

export default authSlice.reducer;

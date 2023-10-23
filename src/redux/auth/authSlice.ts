import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { logIn } from "./authOperations";

interface ServerResponse {
  data: {
    user: any;
  };
}

interface AuthState {
  user: any;
}

const initialState: AuthState = {
  user: null,
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

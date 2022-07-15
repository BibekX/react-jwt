import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false || localStorage.getItem("TOKEN") != null,
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

export const signupThunk = (email, password, username) => async () => {
  axios.post(`http://localhost:8000/auth/signup`, {
    email,
    password,
    username,
  });
};
export const loginThunk = (email, password) => async (dispatch) => {
  axios
    .post(`http://localhost:8000/auth/login`, {
      email,
      password,
    })
    .then((response) => {
      console.log("response", response);
      if (response.data === null) {
        console.log("Login failed");
      } else {
        localStorage.setItem("TOKEN", response.data.token);
        dispatch(login());
      }
    });
};

export const logoutNowThunk = () => (dispatch) => {
  localStorage.removeItem("TOKEN");
  dispatch(logout());
};

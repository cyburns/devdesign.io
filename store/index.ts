"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: null,
    email: null,
    fullName: null,
    username: null,
    profilePicture: null,
    verifiedEmail: false,
    isFullyRegistered: false,
    following: [],
    followers: [],
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user.id = action.payload.user.id;
      state.user.email = action.payload.user.email;
    },
    setNameAndUsername: (state, action) => {
      state.user.fullName = action.payload.user.fullName;
      state.user.username = action.payload.user.username;
    },
    setUserProfilePicture: (state, action) => {
      state.user.profilePicture = action.payload.user.profilePicture;
    },
    setIsFullyRegistered: (state, action) => {
      state.user.isFullyRegistered = action.payload.user.isFullyRegistered;
    },
    setVerifiedEmail: (state, action) => {
      state.user.verifiedEmail = action.payload.user.verifiedEmail;
    },
    setLogout: (state) => {
      state.user = {
        id: null,
        email: null,
        fullName: null,
        username: null,
        profilePicture: null,
        verifiedEmail: false,
        isFullyRegistered: false,
        following: [],
        followers: [],
      };
    },
  },
});

export const {
  setLogin,
  setNameAndUsername,
  setUserProfilePicture,
  setLogout,
  setVerifiedEmail,
  setIsFullyRegistered,
} = authSlice.actions;

export const authReducer = authSlice.reducer;

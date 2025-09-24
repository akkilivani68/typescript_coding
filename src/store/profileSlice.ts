import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "../types/Profile";

interface ProfileState {
  data: Profile | null;
  status: "idle" | "loading" | "success" | "error";
}

const initialState: ProfileState = {
  data: null,
  status: "idle",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<Profile>) {
      state.data = action.payload;
      state.status = "success";
      localStorage.setItem("profile", JSON.stringify(action.payload));
    },
    clearProfile(state) {
      state.data = null;
      state.status = "idle";
      localStorage.removeItem("profile");
    },
  },
});

export const { setProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;

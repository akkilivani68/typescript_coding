import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types/Profile";
import { clearProfile } from "../store/profileSlice";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  // Using any RootState import here is placeholder; actual RootState type is from store in compiled app.
  const profile = (useSelector((state: any) => state.profile.data));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!profile) {
    return <p>No profile found. Please create one.</p>;
  }

  return (
    <div style={{maxWidth:600, margin:'40px auto'}}>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Age:</strong> {profile.age ?? "Not provided"}</p>
      <Button onClick={() => navigate("/profile-form")} style={{marginRight:8}}>Edit</Button>
      <Button color="error" onClick={() => dispatch(clearProfile())}>Delete</Button>
    </div>
  );
}

import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setProfile } from "../store/profileSlice";
import { useNavigate } from "react-router-dom";

export default function ProfileForm() {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [age, setAge] = useState<number | "">(""); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name.length < 3) return alert("Name must be at least 3 characters");
    if (!/\S+@\S+\.\S+/.test(email)) return alert("Invalid email");

    const newProfile = { name, email, age: age || undefined };
    dispatch(setProfile(newProfile));
    navigate("/profile");
  };

  return (
    <div style={{maxWidth:600, margin:'40px auto'}}>
      <h2>Create / Update Profile</h2>
      <TextField label="Name" value={name} onChange={e => setName(e.target.value)} fullWidth margin="normal" />
      <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} fullWidth margin="normal" />
      <TextField label="Age" type="number" value={age} onChange={e => setAge(Number(e.target.value))} fullWidth margin="normal" />
      <Button variant="contained" onClick={handleSubmit} style={{marginTop:16}}>Save</Button>
    </div>
  );
}

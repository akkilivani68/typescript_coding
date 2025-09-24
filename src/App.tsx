import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProfileForm from "./pages/ProfileForm";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile-form" element={<ProfileForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

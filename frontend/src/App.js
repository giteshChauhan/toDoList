import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

import Signup from "./components/main/signup";
import Login from "./components/main/login";
import Home from "./components/main/home";

import "react-toastify/dist/ReactToastify.css";

import auth from "./services/authService";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    const user = auth.getCurrentUser();
    setUser(user);
  }, []);
  return (
    <>
      <ToastContainer autoClose={3000} limit={1} theme="colored" />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        {!user && <Route path="/signup" element={<Signup />} />}
        {!user && <Route path="/login" element={<Login />} />}
      </Routes>
    </>
  );
}

export default App;

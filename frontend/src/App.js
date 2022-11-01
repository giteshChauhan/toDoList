import { Routes, Route } from "react-router-dom";
import Signup from "./components/main/signup";
import Login from "./components/main/login";
import Home from "./components/main/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;

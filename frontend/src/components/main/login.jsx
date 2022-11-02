import { BsListCheck } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/login.css";

import { login } from "../../services/authService";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [isDisable, setIsDisable] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisable(true);
    try {
      await login(form);
      window.location = "/";
    } catch (ex) {
      setTimeout(() => {
        setIsDisable(false);
      }, 3000);
    }
  };

  return (
    <div className="myLogin">
      <BsListCheck size="10rem" color="rgba(4, 4, 236, 0.9)" className="hide" />
      <div className="myBox">
        <Link
          to={"/"}
          className="navbar-brand myBrand"
          style={{ fontSize: "3rem" }}
        >
          ToDoList
        </Link>
        <form onSubmit={handleSubmit}>
          <fieldset disabled={isDisable}>
            <input
              placeholder="Username"
              type="email"
              onChange={(e) =>
                setForm({ username: e.target.value, password: form.password })
              }
            />
            <input
              placeholder="Password"
              type="password"
              onChange={(e) =>
                setForm({ username: form.username, password: e.target.value })
              }
            />
            <button className="myBtn">Login</button>
          </fieldset>
        </form>
        <Link to={"/signup"} className="navbar-brand">
          first time user?
          <span className="myText"> register</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;

import { BsListCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../../css/login.css";
import { register } from "../../services/userService";

const Signup = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [isDisable, setIsDisable] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisable(true);
    try {
      await register(form);
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
            <button className="myBtn">Register</button>
          </fieldset>
        </form>
        <Link to={"/login"} className="navbar-brand">
          already registered?
          <span className="myText"> login</span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;

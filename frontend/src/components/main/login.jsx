import { BsListCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../css/login.css";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
          <input placeholder="Username" type="email" />
          <input placeholder="Password" type="password" />
          <button className="myBtn">Login</button>
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

import { changeUser } from "../../services/userService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useState } from "react";

const Profile = ({ user }) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [isDisable, setIsDisable] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisable(true);
    try {
      await changeUser(form);
      toast("Changed Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (ex) {
      setTimeout(() => {
        setIsDisable(false);
      }, 3000);
    }
  };

  return (
    <div className="myLogin">
      <div className="myBox">
        <Link
          to={"/"}
          className="navbar-brand myBrand"
          style={{ fontSize: "3rem" }}
        >
          ToDoList
        </Link>
        <div>
          Email: <small>{user.username}</small>
        </div>
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
            <button className="myBtn">Change</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Profile;

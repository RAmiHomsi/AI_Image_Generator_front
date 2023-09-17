import { useContext, useState } from "react";
import "./NavBar.css";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import axios from "axios";

const NavBar = () => {
  const [redirect, setRedirect] = useState(true);
  const { user, setUser } = useContext(UserContext);

  async function logout() {
    await axios.post("http://localhost:3999/user/logout");
    setRedirect(false);
    setUser(null);
  }

  if (!user && redirect) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className="header">
      <ul className="nav-menu">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/chatsystem">Ai-Bot</Link>
        </li>
        <li>
          {" "}
          <Link to="/imagegenerator">Image-generator</Link>
        </li>
        <li>
          {" "}
          <Link to="/videogenerator">Video-generator</Link>
        </li>
        <li>
          {" "}
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div>
        {user ? (
          <p className="text-xl font-medium px-2">
            Welcome, {user.name}
            <div>
              <button className="text-xl font-medium px-2" onClick={logout}>
                Logout
              </button>
            </div>
          </p>
        ) : (
          <Link className="text-xl font-medium px-2" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;

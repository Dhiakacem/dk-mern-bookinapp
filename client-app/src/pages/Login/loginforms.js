import React from "react";
import "./loginform.css";
import axios from "axios";
import photo from "./image.png";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  const handleClick2 = () => {
   
      navigate("/");
    }

  return (
    <div className="login">
      <div className="lContainer">
        <h1>Sign into your account here </h1>
        <input
          type="text"
          id="username"
          onChange={handleChange}
          className="lInput"
          placeholder="username"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button id="valider" disabled={loading} onClick={handleClick} className="lButton">LOGIN</button>
        {error && <span>{error.message}</span>}
        <text> Don't have an account ?</text>
        <button className="lButton" disabled={loading}  onClick={handleClick2} id="lien">Register </button>
        <img className="image" src={photo} alt="" />
      </div>
    </div>
  );
};
export default LoginForm;

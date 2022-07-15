import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginThunk } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth === true) {
      navigate("/groups");
    }
  }, [auth, navigate]);

  return (
    <div>
      <form>
        <label>
          Email:
          <input
            onChange={(e) => setEmail(e.currentTarget.value)}
            type="text"
            value={email}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            onChange={(e) => setPassword(e.currentTarget.value)}
            type="text"
            value={password}
          />
        </label>
        <br />
        <button
          type="submit"
          onClick={() => dispatch(loginThunk(email, password))}
        >
          Login
        </button>
      </form>
      {auth && <p>Login Successful!</p>}
    </div>
  );
}

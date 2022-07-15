import "./App.css";

import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Components/Login";
import Group from "./Components/Groups";

function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = useSelector((state) => state.authStore.isAuthenticated);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/groups">Groups</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/groups"
          element={
            <RequireAuth redirectTo="/">
              <Group />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

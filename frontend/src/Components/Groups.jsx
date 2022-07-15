import React from "react";
import { useDispatch } from "react-redux";
import { logoutNowThunk } from "../redux/authSlice";

const GroupsPage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Welcome to the GroupsPage page</h1>
      <p>We are all in special groups now...</p>
      <button onClick={() => dispatch(logoutNowThunk())}>Logout</button>
    </div>
  );
};

export default GroupsPage;

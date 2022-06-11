import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1>404 Not Found</h1>
      <button>
        <NavLink className="text-decoration-none" to="/">
          GO BACK TO HOME
        </NavLink>
      </button>
    </div>
  );
};

export default NotFound;

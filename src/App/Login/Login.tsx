import * as React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Link to="/login">
      <span className="glyphicon glyphicon-log-in" />
      <span> Login</span>
    </Link>
  );
}

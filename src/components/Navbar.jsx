import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <header>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/allUsers"}>allusers</Link>
        </nav>
      </header>
      <hr />
    </>
  );
}

export default Navbar;

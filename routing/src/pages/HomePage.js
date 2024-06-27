import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>Hello</h1>
      <Link to="/products">The Product List</Link>
    </>
  );
}

export default HomePage;

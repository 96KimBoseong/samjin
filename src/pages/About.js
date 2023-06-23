import React from "react";
import { Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>ABOUT Page</h1>
      <Outlet></Outlet>
    </div>
  );
}

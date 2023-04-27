import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {
  Header,
  Aside,
  Main,
}
from "./Layout"

import "./App.css"

export default function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Aside/>
        <Main/>
      </div>
    </div>
  );
};
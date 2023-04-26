import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from "./rayout/Header"
import Aside from "./rayout/Aside"
import Main from "./rayout/Main"

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
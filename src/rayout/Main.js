import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Kazzara from "../wow/aberrus/Kazzara"
import Aberrus from "../wow/aberrus/Aberrus"
import Molgoth from "../wow/aberrus/Molgoth"
import Experiments from "../wow/aberrus/Experiments"

export default function Main() {
  return (
    <div className="post">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Aberrus/>}/>
          <Route path="/aberrus" element={<Aberrus/>}/>
          <Route path="/kazzara" element={<Kazzara/>}/>
          <Route path="/molgoth" element={<Molgoth/>}/>
          <Route path="/experiments" element={<Experiments/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
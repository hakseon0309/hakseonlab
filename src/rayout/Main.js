import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Aberrus from "../wow/aberrus/Aberrus";
import Kazzara from "../wow/aberrus/Kazzara"
import Molgoth from "../wow/aberrus/Molgoth"

export default function Main() {
  return (
    <div className="post">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Aberrus/>}/>
          <Route path="/aberrus" element={<Aberrus/>}/>
          <Route path="/kazzara" element={<Kazzara/>}/>
          <Route path="/molgoth" element={<Molgoth/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
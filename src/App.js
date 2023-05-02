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
      <Header text="WLB 10.1"/>
      <div className="container">
        <Aside/>
        <Main/>
      </div>
    </div>
  );
};
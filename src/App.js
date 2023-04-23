import { useState } from "react";
import "./App.css"
import Aberrus from "./component/wow/aberrus/Aberrus";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Aside/>
        <Post/>
      </div>
    </div>
  );
};
function Header() {
  const [header, setHeader] = useState("HAKSEON LAB - WLB 10.1");
  return (
      <header>
          { header }
      </header>
  );
};
function Aside() {
  const [banner, setBanner] = useState("https://media.tenor.com/iixn8CyQDywAAAAd/blue-archive.gif");
  const [icon, setIcon] = useState("https://wow.zamimg.com/images/wow/icons/large/inv_pet_cats_siamesecat.jpg");
  const [character, setCharacter] = useState("학선양");
  const [server, setServer] = useState("KR-Azshara");
  return (
      <aside>
          <img className="banner" src= { banner } alt=""/>
          <div className="profile">
              <div className="background">
                  <img className="icon" src= { icon } alt=""/>
                  <div>
                      <div className="character monk">
                          { character }
                      </div>
                      <div className="server">
                          { server }
                      </div>
                  </div>    
              </div>
          </div>
      </aside>
  );
};
function Post() {
  const [title, setTitle] = useState("[10.1] 어둠의 도가니, 아베루스")
  const [content, setContent] = useState([<Aberrus named="0"/>])
  return (
  <div className="post">
      <div className="title">
          { title }
      </div>
      <div className="content">
          { content }
      </div>
  </div>
  )
};
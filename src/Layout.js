import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Aberrus      from "./wow/aberrus/Aberrus";
import Kazzara      from "./wow/aberrus/Kazzara";
import Molgoth      from "./wow/aberrus/Molgoth";
import Experiments  from "./wow/aberrus/Experiments";
import Zaqali       from "./wow/aberrus/Zaqali";
import Rashok       from "./wow/aberrus/Rashok";
import Zskarn       from "./wow/aberrus/Zskarn";
import Magmorax     from "./wow/aberrus/Magmorax";
import Neltharion   from "./wow/aberrus/Neltharion";
import Sarkareth    from "./wow/aberrus/Sarkareth";

export function Header(props) {
    return (
        <header>HAKSEON LAB - {props.text}</header>
    )
}

export function Aside() {
    return (
        <aside>
            <img className="banner" src="https://media.tenor.com/iixn8CyQDywAAAAd/blue-archive.gif" alt=""/>
            <div className="profile">
                <div className="background">
                    <img className="icon" src="https://wow.zamimg.com/images/wow/icons/large/inv_pet_cats_siamesecat.jpg" alt=""/>
                    <div>
                        <div className="character monk">학선양</div>
                        <div className="server">KR-Azshara</div>
                    </div>
                </div>
            </div>
            <div className="category">
                <div className="categoryBackground">
                    <a href="http://localhost:3000"><div className="categoryText">About</div></a>
                    <a href="http://localhost:3000/aberrus"><div className="categoryText">World of Warcraft</div></a>
                </div>
            </div>
        </aside>
    )
}

export function Main() {
    return (
        <div className="post">
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/"            element={<About      />}/> */}
                    <Route path="/aberrus"     element={<Aberrus    />}/>
                    <Route path="/kazzara"     element={<Kazzara    />}/>
                    <Route path="/molgoth"     element={<Molgoth    />}/>
                    <Route path="/experiments" element={<Experiments/>}/>
                    <Route path="/zaqali"      element={<Zaqali     />}/>
                    <Route path="/rashok"      element={<Rashok     />}/>
                    <Route path="/zskarn"      element={<Zskarn     />}/>
                    <Route path="/magmorax"    element={<Magmorax   />}/>
                    <Route path="/neltharion"  element={<Neltharion />}/>
                    <Route path="/sarkareth"   element={<Sarkareth  />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export function TitleBar(props) {
    return (
        <div className="title">{props.title}</div>
    )
}
import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Kazzara      from "./wow/aberrus/Kazzara"
import Aberrus      from "./wow/aberrus/Aberrus"
import Molgoth      from "./wow/aberrus/Molgoth"
import Experiments  from "./wow/aberrus/Experiments"
import Zaqali  from "./wow/aberrus/Zaqali"

export function Header() {
    return (
        <header>HAKSEON LAB - WLB 10.1</header>
    )
}

export function Aside() {
    return (
        <aside>
            <img className="banner" src= "https://media.tenor.com/iixn8CyQDywAAAAd/blue-archive.gif" alt=""/>
            <div className="profile">
                <div className="background">
                    <img className="icon" src="https://wow.zamimg.com/images/wow/icons/large/inv_pet_cats_siamesecat.jpg" alt=""/>
                    <div>
                        <div className="character monk">학선양</div>
                        <div className="server">KR-Azshara</div>
                    </div>    
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
                <Route path="/"             element={<Aberrus/>}/>
                <Route path="/aberrus"      element={<Aberrus/>}/>
                <Route path="/kazzara"      element={<Kazzara/>}/>
                <Route path="/molgoth"      element={<Molgoth/>}/>
                <Route path="/experiments"  element={<Experiments/>}/>
                <Route path="/zaqali"  element={<Zaqali/>}/>
            </Routes>
        </BrowserRouter>
    </div>
)
}
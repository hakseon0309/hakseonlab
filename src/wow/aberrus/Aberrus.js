import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import "./Aberrus.css"

import {
    publicData,
    TitleBar,
    AberrusNav,
    AberrusBossTitle,
    AberrusDifficulty,
    AberrusBar,
    NextBoss,
    Mechanic,
    MechanicSub,
} from "./AberrusLayout"

import Roster from "./Roster"

export default function Aberrus() {
    return (
        <div className="content">
            <TitleBar/>
            <div className="aberrus">
                <AberrusNav number={0}/>
                <AberrusBossTitle
                name={"WOW LIFE BALANCE"}
                />                
                <AberrusBar name="인원 구성"/>
                <AberrusBarInsertIntro/>
                <NextBoss
                next="다음 던전"
                name="v 10.2"
                />
            </div>
        </div>
    )
}

function AberrusBarInsertIntro() {
    return (
        <div className="aberrusBarInsert">
            <div className="aberrusBarInsertInsert">
                <Roster/>
            </div>
        </div>
    )
}
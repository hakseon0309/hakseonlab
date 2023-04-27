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
                {/*<AberrusDifficulty/>*/}
                <AberrusBar name="인원 구성"/>
                <AberrusBarInsertIntro/>
                {/* <AberrusBar name="사전 준비"/>
                <AberrusBarInsertSetup/>
                <AberrusBar name="던전 도감"/>
                <AberrusBarInsertMechanic/>
                <AberrusBar name="공략 진행"/>
                <AberrusBarInsertStrategy/> */}
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
                {/* <Roster/> */}
            </div>
        </div>
    )
}
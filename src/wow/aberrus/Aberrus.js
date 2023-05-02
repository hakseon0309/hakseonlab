import React from "react"
import { TitleBar } from "../../Layout"
import {
    publicData,
    AberrusNav,
    AberrusTitle,
    AberrusDifficulty,
    AberrusBar,
    AberrusNext,
    Mechanic,
    MechanicSub,
} from "./AberrusLayout"
import Roster from "./Roster"
import "./Aberrus.css"

export default function Aberrus() {
    return (
        <div>
            <TitleBar title="월드 오브 워크래프트 10.1 - 어둠의 도가니 아베루스"/>
            <div className="content">
                <AberrusNav number={0}/>
                <AberrusTitle
                name={"WOW LIFE BALANCE"}
                />                
                <AberrusBar name="인원 구성"/>
                <AberrusBarInsertIntro/>
                <AberrusNext
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
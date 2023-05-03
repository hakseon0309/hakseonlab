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
    AberrusInsertBox0,
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
                name={"WLB 10.1"}
                />
                <AberrusBarInsertWLB/>
                {/* <AberrusBar name="인원 구성"/>
                <AberrusBarInsertIntro/> */}
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
function AberrusBarInsertWLB() {
    return (
        <div className="aberrusBarInsert">
            <AberrusInsertBox0
            title="레이드 오픈 : "
            desc="2023년 5월 11일"
            />
            <AberrusInsertBox0
            title="보스 개체수 : "
            desc="9"
            />
            <AberrusInsertBox0
            title="아이템 레벨"
            />
            <img className="aberrusMainImg1" src="https://cdn.imweb.me/upload/S201903225c9441f9db892/10bf1cd36ad2c.png" alt=""/>
            <img className="aberrusMainImg1" src="https://cdn.imweb.me/upload/S201903225c9441f9db892/7910f4b3d7b2f.png" alt=""/>
        </div>
    )
}
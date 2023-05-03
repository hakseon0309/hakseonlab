import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export const bossImgList = [
    "",
    "https://www.method.gg/images/raidrace/bosses/aberrus-the-shadowed-crucible/kazzarathehellforged.png",
    "https://www.method.gg/images/raidrace/bosses/aberrus-the-shadowed-crucible/theamalgamationchamber.png",
    "https://www.method.gg/images/raidrace/bosses/aberrus-the-shadowed-crucible/theforgottenexperiments.png",
    "https://www.method.gg/images/raidrace/bosses/aberrus-the-shadowed-crucible/assaultofthezaqali.png",
    "https://www.method.gg/images/raidrace/bosses/aberrus-the-shadowed-crucible/rashoktheelder.png",
    "https://www.method.gg/images/raidrace/bosses/aberrus-the-shadowed-crucible/thevigilantstewardzskarn.png",
    "https://www.method.gg/images/raidrace/bosses/aberrus-the-shadowed-crucible/magmorax.png",
    "https://www.method.gg/images/raidrace/bosses/aberrus-the-shadowed-crucible/echoofneltharion.png",
    "https://www.method.gg/images/raidrace/bosses/aberrus-the-shadowed-crucible/scalecommandersarkareth.png",
]
export function Tanker() {
    return (
        <span>
            <img src="https://www.method.gg/images/icons/role/tank-icon.png" alt=""/>
        </span>
    )
}
export function Healer() {
    return (
        <span>
            <img src="https://www.method.gg/images/icons/role/healer-icon.png" alt=""/>
        </span>
    )
}
export function Dealer() {
    return (
        <span>
            <img src="https://www.method.gg/images/icons/role/dps-icon.png" alt=""/>
        </span>
    )
}


export function AberrusNav(props) {
    const bossIconList = [
        "img/pepe.png",
        "https://www.method.gg/images/guides/bosses/18-03-23-10-kazzara-the-hellforged.jpg",
        "https://www.method.gg/images/guides/bosses/20-03-23-0-the-amalgamation-chamber.jpg",
        "https://www.method.gg/images/guides/bosses/18-03-23-9-the-forgotten-experiments.jpg",
        "https://www.method.gg/images/guides/bosses/18-03-23-7-assault-of-the-zaqali.jpg",
        "https://www.method.gg/images/guides/bosses/18-03-23-8-rashok-the-elder.jpg",
        "https://www.method.gg/images/guides/bosses/18-03-23-2-the-vigilant-steward-zskarn.jpg",
        "https://www.method.gg/images/guides/bosses/18-03-23-1-magmorax.jpg",
        "https://www.method.gg/images/guides/bosses/18-03-23-7-echo-of-neltharion.jpg",
        "https://www.method.gg/images/guides/bosses/18-03-23-6-Scalecommander%20Sarkareth.jpg",
    ]
    const opacityList = [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3]
    opacityList[props.number] = 1
    return (
        <div className="aberrusNav">
            <Link to="/aberrus">    <img className="bossIcon" src={bossIconList[0]} alt="" style={{opacity: opacityList[0]}}/></Link>
            <Link to="/kazzara">    <img className="bossIcon" src={bossIconList[1]} alt="" style={{opacity: opacityList[1]}}/></Link>
            <Link to="/molgoth">    <img className="bossIcon" src={bossIconList[2]} alt="" style={{opacity: opacityList[2]}}/></Link>
            <Link to="/experiments"><img className="bossIcon" src={bossIconList[3]} alt="" style={{opacity: opacityList[3]}}/></Link>
            <Link to="/zaqali">     <img className="bossIcon" src={bossIconList[4]} alt="" style={{opacity: opacityList[4]}}/></Link>
            <Link to="/rashok">     <img className="bossIcon" src={bossIconList[5]} alt="" style={{opacity: opacityList[5]}}/></Link>
            <Link to="/zskarn">     <img className="bossIcon" src={bossIconList[6]} alt="" style={{opacity: opacityList[6]}}/></Link>
            <Link to="/magmorax">   <img className="bossIcon" src={bossIconList[7]} alt="" style={{opacity: opacityList[7]}}/></Link>
            <Link to="/neltharion"> <img className="bossIcon" src={bossIconList[8]} alt="" style={{opacity: opacityList[8]}}/></Link>
            <Link to="/sarkareth">  <img className="bossIcon" src={bossIconList[9]} alt="" style={{opacity: opacityList[9]}}/></Link>
        </div>
    )
}
export function AberrusTitle(props) {
    return (
        <div className="aberrusTitle">
            <div className="aberrusTitleText">
                <div className="dungeon">어둠의 도가니 아베루스</div>
                <div className="name">{props.name}</div>
            </div>
            <div className='img'><img src={bossImgList[props.number]} alt=""/></div>
        </div>
    )
}
export function AberrusDifficulty() {
    return (
        <div className="aberrusDifficulty">
            <div className="aberrusDifficultyText">영웅</div>
            <div className="aberrusDifficultyText">신화</div>
        </div>
    )
}
export function AberrusBar(props) {
    return (
        <div className="aberrusBar">{props.name}</div>
    )
}
export function AberrusNext(props) {
    return (
        <div className="aberrusTitle">
            <div className="aberrusTitleText">
                <div className="dungeon">{props.next}</div>
                <div className="name">{props.name}</div>
            </div>
            <div className='img'><img src={bossImgList[props.number]} alt=""/></div>
        </div>
    )
}



export function AberrusInsertBox0(props) {
    return (
        <div className="aberrusInsertBox0">
            <div className="aberrusInsertBox0Title">
                <div className="aberrusInsertBox0TitleText">{props.title}</div>
            </div>
            <div className="aberrusInsertBox0Description">
                <div className="aberrusInsertBox0DescriptionText">{props.desc}</div>
            </div>
        </div>
    )
}
export function AberrusInsertBox1(props) {
    return (
        <div className="aberrusInsertBox1">
            <img className="aberrusInsertBox1Img" src={"https://wow.zamimg.com/images/wow/icons/large/"+props.img+".jpg"} alt=""/>
            <div className="aberrusInsertBox1Title">
                <div className="aberrusInsertBox1TitleText">{props.title}</div>
            </div>
            <div className="aberrusInsertBox1Description">
                <div className="aberrusInsertBox1DescriptionText"><p>{props.desc}</p></div>
            </div>
        </div>
    )
}
export function AberrusInsertBox2(props) {
    return (
        <div className="aberrusInsertBox2">
            <img className="aberrusInsertBox2Img" src={"https://wow.zamimg.com/images/wow/icons/large/"+props.img+".jpg"} alt=""/>
            <div className="aberrusInsertBox2Title">
                <div className="aberrusInsertBox2TitleText">{props.title}</div>
            </div>
            <div className="aberrusInsertBox2Description">
                <div className="aberrusInsertBox2DescriptionText"><p>{props.desc}</p></div>
            </div>
        </div>
    )
}
export function AberrusInsertBoxModulerModel(props) {
    return (
        <div className="aberrusInsertBoxModel">
            <img src={props.model} alt=""/>
            <div className="aberrusInsertBoxModelName">{props.name}</div>
        </div>
    )
}
export function AberrusInsertBoxModulerAbility(props) {
    return (
        <div className="aberrusInsertBoxModulerAbility">
            <img className="aberrusInsertBoxModulerAbilityImg" src={"https://wow.zamimg.com/images/wow/icons/large/"+props.img+".jpg"} alt=""/>
            <div className="aberrusInsertBoxModulerAbilityName">{props.name}</div>
            <div className="aberrusInsertBoxModulerAbilityDescription"><p>{props.desc}</p></div>
        </div>
    )
}
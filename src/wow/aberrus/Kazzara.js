import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./Aberrus.css"

const currentBoss = {
    bossName        : "지옥벼림 카자라",
    bossImg         : "https://www.method.gg/images/raidrace/bosses/aberrus-the-shadowed-crucible/kazzarathehellforged.png",
}
const publicData = {
    dungeonName     : "어둠의 도가니, 아베루스",
    tankerIcon      : "https://www.method.gg/images/icons/role/tank-icon.png",
    healerIcon      : "https://www.method.gg/images/icons/role/healer-icon.png",
    dealerIcon      : "https://www.method.gg/images/icons/role/dps-icon.png",
}

export default function Kazzara() {
    return (        
        <div className="content">
            <div className="title">[10.1] 어둠의 도가니, 아베루스</div>
            <div className="aberrus">
                
                <AberrusNav/>
                
                <AberrusBossTitle/>
                
                <AberrusDifficulty/>
                
                <TextBar name="공략 개요"/>
                <TextBarInsertIntro/>
                
                <TextBar name="사전 준비"/>
                <TextBarInsertSetup/>
                
                <TextBar name="던전 도감"/>
                <TextBarInsertMechanic/>
                
                <TextBar name="공략 진행"/>
                <TextBarInsertStrategy/>
                
                <NextBoss/>
                
            </div>
        </div>
    )
}
function AberrusNav() {
    const bossIconList = [
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
    return (
        <div className="aberrusNav">
            <Link to="/"><img className="bossIcon" src="img/pepe.png" alt="" style={{opacity: 0.3}}/></Link>
            <Link to="/kazzara"><img className="bossIcon" src={bossIconList[0]} alt="" style={{opacity: 1}}/></Link>
            <Link to="/molgoth"><img className="bossIcon" src={bossIconList[1]} alt="" style={{opacity: 0.3}}/></Link>
            <Link to="/experimentation"><img className="bossIcon" src={bossIconList[2]} alt="" style={{opacity: 0.3}}/></Link>
            <Link to="/zaqali"><img className="bossIcon" src={bossIconList[3]} alt="" style={{opacity: 0.3}}/></Link>
            <Link to="/rashok"><img className="bossIcon" src={bossIconList[4]} alt="" style={{opacity: 0.3}}/></Link>
            <Link to="/zskarn"><img className="bossIcon" src={bossIconList[5]} alt="" style={{opacity: 0.3}}/></Link>
            <Link to="/magmorax"><img className="bossIcon" src={bossIconList[6]} alt="" style={{opacity: 0.3}}/></Link>
            <Link to="/neltharion"><img className="bossIcon" src={bossIconList[7]} alt="" style={{opacity: 0.3}}/></Link>
            <Link to="/sarkareth"><img className="bossIcon" src={bossIconList[8]} alt="" style={{opacity: 0.3}}/></Link>
        </div>
    )
}
function AberrusBossTitle() {
    return (
        <div className="aberrusBossTitle">
            <div className="aberrusBossTitleText">
                <div className="dungeon">{publicData.dungeonName}</div>
                <div className="boss">{currentBoss.bossName}</div>
            </div>
            <div className='img'><img src={currentBoss.bossImg} alt=""/></div>
        </div>
    )
}
function AberrusDifficulty() {
    return (
        <div className="aberrusDifficulty">
            <div className="aberrusDifficultyText">영웅</div>
            <div className="aberrusDifficultyText">신화</div>
        </div>
    )
}
function TextBar(props) {
    return (
        <div className="textBar">{props.name}</div>
    )
}
function TextBarInsertIntro() {
    return (
        <div className="textBarInsert">
            <div className="textBarInsertInsert">
                <p>전투 대상: 단일</p>
            </div>
        </div>
    )
}
function TextBarInsertSetup() {
    return (
        <div className="textBarInsert">

            <div className="textBarInsertInsert">
                <div className="squad d-flex ac-c">
                    <img className="img-30 mr-1" src={publicData.tankerIcon} alt=""/>
                    <div className="count mr-1">2</div>
                    <img className="img-30 mr-1" src={publicData.healerIcon} alt=""/>
                    <div className="count mr-1">4 / 6</div>
                    <img className="img-30 mr-1" src={publicData.dealerIcon} alt=""/>
                    <div className="count">14+ / 22+</div>
                </div>
            </div>

            {/* <div className="textBarInsertInsert">
                <p className="mb-0">우왕</p>
            </div> */}

        </div>
    )
}
function TextBarInsertMechanic() {
    return (
        <div className="textBarInsert">

            <div className="textBarInsertMechanic mb-2">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/achievment_boss_spineofdeathwing.jpg" alt=""/>
                    <div><b className="txt-littleBig">지옥강철 학살</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>카자라의 생명력이 70%, 50%, 30%가 되면 공격대에 암흑불길 데미지를 입힙니다.</p>
                    <p className="mb-0">또한 지옥강철 파편과 망령의 피를 지속적으로 발산하여 회피해야합니다.</p>
                </div>
            </div>

            <div className="textBarInsertMechanic mb-2">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/inv_shadowflame_groundstate.jpg" alt=""/>
                    <div><b className="txt-littleBig">공포의 균열</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>"When Kazzara reaches 70%, 50% and 30% HP, the raid will take 93,612 Shadowflame damage, and a permanent DoT will be applied to the entire raid. The DoT deals 31,204 Shadowflame damage every 4 seconds, increasing in speed as the boss’ health gets lower.</p>
                    <p className="mb-0">Additionally, Hellsteel Fragments and Revenant's Blood puddles will spawn on the ground that need to be avoided.</p>
                </div>
            </div>

            <div className="textBarInsertMechanic mb-2">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/ability_mage_firestarter.jpg" alt=""/>
                    <div><b  className="txt-littleBig">고뇌의 광선</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>"When Kazzara reaches 70%, 50% and 30% HP, the raid will take 93,612 Shadowflame damage, and a permanent DoT will be applied to the entire raid. The DoT deals 31,204 Shadowflame damage every 4 seconds, increasing in speed as the boss’ health gets lower.</p>
                    <p className="mb-0">Additionally, Hellsteel Fragments and Revenant's Blood puddles will spawn on the ground that need to be avoided.</p>
                </div>
            </div>

            <div className="textBarInsertMechanic mb-2">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/ability_warlock_shadowflame.jpg" alt=""/>
                    <div><b className="txt-littleBig">지옥광선</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>"When Kazzara reaches 70%, 50% and 30% HP, the raid will take 93,612 Shadowflame damage, and a permanent DoT will be applied to the entire raid. The DoT deals 31,204 Shadowflame damage every 4 seconds, increasing in speed as the boss’ health gets lower.</p>
                    <p className="mb-0">Additionally, Hellsteel Fragments and Revenant's Blood puddles will spawn on the ground that need to be avoided.</p>
                </div>
            </div>

            <div className="textBarInsertMechanic mb-2">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/inv_icon_wingbroken07d.jpg" alt=""/>
                    <div><b className="txt-littleBig">멸종의 날개</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>"When Kazzara reaches 70%, 50% and 30% HP, the raid will take 93,612 Shadowflame damage, and a permanent DoT will be applied to the entire raid. The DoT deals 31,204 Shadowflame damage every 4 seconds, increasing in speed as the boss’ health gets lower.</p>
                    <p className="mb-0">Additionally, Hellsteel Fragments and Revenant's Blood puddles will spawn on the ground that need to be avoided.</p>
                </div>
            </div>

            <div className="textBarInsertMechanic">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/inv_10_elementalshardfoozles_shadowflame.jpg" alt=""/>
                    <div><b className="txt-littleBig">공포의 발톱</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>"When Kazzara reaches 70%, 50% and 30% HP, the raid will take 93,612 Shadowflame damage, and a permanent DoT will be applied to the entire raid. The DoT deals 31,204 Shadowflame damage every 4 seconds, increasing in speed as the boss’ health gets lower.</p>
                    <p className="mb-0">Additionally, Hellsteel Fragments and Revenant's Blood puddles will spawn on the ground that need to be avoided.</p>
                </div>
            </div>
            
        </div>
    )
}
function TextBarInsertStrategy() {
    return (
        <div className="textBarInsert">

            <div className="textBarInsertInsert">
                <p className="txt-big mt-0">시작 진형</p>
                <img src="https://www.method.gg/images/guides/uploads/kazzara-the-hellforged-opening-position.jpg" alt=""/>
                <p>
                    Tanks should keep the boss where she is standing and face her away from the raid. Even though she does no frontal attack, facing her away will help with awareness when the boss uses her Hellbeam ability (she will do a 180 turn). Tank swap each Terror Claws unless you want to test your limits.
                </p>
                <p>
                    Pop Hero/Lust on pull, and loosely spread behind the boss to not get caught by random lasers spawning on nearby players and to bait other abilities. The boss will reach 70% fairly quickly, so be ready to dodge puddles and to take raid wide damage.
                </p>
                <p>
                    The puddles she spawns when she hits 70%, 50% and 30% hit pretty hard, so avoid at all cost.
                </p>
                <p>
                    The Hellsteel Fragments only spawn at those breakpoints, but Revenant's Blood puddles spawn throughout the fight at increasing intensity the lower the boss' health is.
                </p>
                <p>
                    When the lasers spawn, kite them into the Dread Rifts puddles. The placement of Dread Rifts does not matter much as there is plenty of space behind the boss (just don’t place them too far away, as that will force players to kite for longer).
                </p>
                <p>
                    At 100 energy, be ready to dodge the frontal breath ability (Hellbeam). She will lock her position once she starts casting, so just dodge once.
                </p>
                <p>
                    The Wings of Extinction cast will do a small knockback, so just try not to get knocked into a laser/puddle, to avoid taking unnecessary damage. 
                </p>
                <p>
                    When the boss is below 30% health, the raid-wide damage will ramp up pretty high, so be extra careful to avoid taking unnecessary damage from other abilities, as this will most likely lead to deaths at this point.
                </p>
            </div>

        </div>
    )
}
function NextBoss() {
    return (
        <div className="aberrusBossTitle">
            <div className="aberrusBossTitleText">
                <div className="dungeon">다음 보스</div>
                <div className="boss">융합체의 방</div>
            </div>
            <div className='img'><img src="https://www.method.gg/images/raidrace/bosses/aberrus-the-shadowed-crucible/theamalgamationchamber.png" alt=""/></div>
        </div>
    )
}
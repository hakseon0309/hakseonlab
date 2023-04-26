import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./Aberrus.css"

const currentBoss = {
    bossName        : "잊힌 실험체",
    bossImg         : "https://www.method.gg/images/raidrace/bosses/aberrus-the-shadowed-crucible/theforgottenexperiments.png",
}
const publicData = {
    dungeonName     : "어둠의 도가니, 아베루스",
    tankerIcon      : "https://www.method.gg/images/icons/role/tank-icon.png",
    healerIcon      : "https://www.method.gg/images/icons/role/healer-icon.png",
    dealerIcon      : "https://www.method.gg/images/icons/role/dps-icon.png",
}

export default function Experiments() {
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
            <Link to="/kazzara"><img className="bossIcon" src={bossIconList[0]} alt="" style={{opacity: 0.3}}/></Link>
            <Link to="/molgoth"><img className="bossIcon" src={bossIconList[1]} alt="" style={{opacity: 0.3}}/></Link>
            <Link to="/experimentation"><img className="bossIcon" src={bossIconList[2]} alt="" style={{opacity: 1}}/></Link>
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
                <p>전투 대상: 3명의 보스, 한번에 하나의 보스와 전투</p>
                <p>전투 순서: 넬드리스, 타드리온, 리온투스</p>
                <p>블러드: 타드리온</p>
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
                    <div className="count mr-1">4-5 / 6-7</div>
                    <img className="img-30 mr-1" src={publicData.dealerIcon} alt=""/>
                    <div className="count">13+ / 21+</div>
                </div>
            </div>
            <div className="textBarInsertInsert">
                <p className="mb-0">유용한 기술들: 드워프의 석화, 대규모 무효화, 범의 욕망, 자유의 축복</p>
            </div>
        </div>
    )
}
function TextBarInsertMechanic() {
    return (
        <div className="textBarInsert">
            <div className="textBarInsertPhase">넬드리스</div>
            <div className="textBarInsertMechanic mb-2">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/ability_xavius_tormentingswipe.jpg" alt=""/>
                    <div><b className="txt-littleBig">분쇄의 돌진</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>여러 대상에게 빨간색 화살표의 표식을 부여하고 각 대상을 돌격합니다.</p>
                    <p>30초 동안 1초마다 물리 피해 출혈 디버프를 부여합니다.</p>
                    <p className="mb-1">경로에서 회피합니다.</p>
                </div>
            </div>

            <div className="textBarInsertMechanic mb-2">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/inv_weapon_hand_30.jpg" alt=""/>
                    <div><b className="txt-littleBig">거대한 격돌</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>전방 부채꼴 충격파 입니다.</p>
                    <p className="mb-0">이동해서 회피합니다.</p>
                </div>
            </div>

            <div className="textBarInsertMechanic mb-2">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/ability_evoker_oppressingroar.jpg" alt=""/>
                    <div><b  className="txt-littleBig">우레와 같은 포효</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p className="mb-0">멀리 떨어질수록 받는 피해가 감소합니다.</p>
                </div>
            </div>

            <div className="textBarInsertMechanic mb-2">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/ability_evoker_azurestrike.jpg" alt=""/>
                    <div><b className="txt-littleBig">마력 깃든 강타</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>탱커는 평타를 맞을 때마다 중첩되는 디버프를 얻습니다.</p>
                    <p>인계 후 다른 플레이어와 접촉하면 공격대에게 전체 피해와 20초 동안 도트 디버프가 부여됩니다.</p>
                    <p className="mb-0">인계마다 공격대 디버프가 중첩되지 않도록 20초 간격을 둡니다.</p>
                </div>
            </div>
            <div className="textBarInsertPhase">타드리온</div>
            <div className="textBarInsertMechanic mb-2">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/inv_icon_wingbroken07d.jpg" alt=""/>
                    <div><b className="txt-littleBig">멸종의 날개</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>공격대 피해와 넉백입니다.</p>
                    <p className="mb-0">이후 20초동안 2초마다 도트 피해 디버프가 부여됩니다.</p>
                </div>
            </div>

            <div className="textBarInsertMechanic">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/inv_10_elementalshardfoozles_shadowflame.jpg" alt=""/>
                    <div><b className="txt-littleBig">공포의 발톱</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>탱커에게 물리 피해와 암흑불길 피해를 동시에 입히고 25초동안 1초마다 도트 피해 디버프를 부여합니다.</p>
                    <p className="mb-0">1 중첩 교대합니다.</p>
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
                    탱커는 보스 위치에서 머리 방향만 반대쪽으로 돌리며 시작합니다. 전방 기술은 없지만 공격대원이 지옥 광선을 인식하는데 도움이 됩니다. 탱커 디버프는 1 중첩 교대합니다.
                </p>
                <p>
                    전투 시작 직후 피의 욕망을 사용합니다. 공격대원은 약 산개 진형으로 균열과 레이저에 대비합니다.
                </p>
                <p>
                    지옥강철 학살 이후 생기는 작은 소형 바닥인 지옥강철 파편과 망령의 피의 데미지가 강력하므로, 반드시 회피합니다.
                </p>
                <p>
                    지옥강철 파편은 지옥강철 학살때만 생성되고, 망령의 피는 전투 내내 지속적으로 생성됩니다.
                </p>
                <p>
                    레이저의 대상이 되면 공포의 균열로 유도해서 레이저를 제거합니다. 공간이 여유롭기 때문에 적당한 위치에 균열을 위치시키고 레이저를 제거해 동선 낭비를 줄입니다.
                </p>
                <p>
                    기력이 100이 되기 전, 미리 전방 숨결 공격에 대비하고, 회피합니다.
                </p>
                <p>
                    멸종의 날개는 넉백 기술이므로 시전시 캐릭터의 뒤를 확인합니다.
                </p>
                <p className="mb-0">
                    카자라의 생명력이 40% 이하가 되면 공격대 피해가 많이 증가하니, 생존에 조심하세요.
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
function MechanicSub() {
    return (
        <div className="MechanicSub">
            <img className="MechanicSubIcon" src="https://wow.zamimg.com/images/wow/icons/large/inv_ragnaros_heart.jpg" alt=""/>
            <div className="MechanicSubName">지옥불 심장: 4초마다 공격대 암흑불길 피해</div>
        </div>
    )
}
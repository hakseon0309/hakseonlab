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

export default function Kazzara() {
    return (        
        <div className="content">
            <TitleBar/>
            <div className="aberrus">                
                <AberrusNav number="1"/>                
                <AberrusBossTitle
                name="지옥불길 카자라"
                number="1"/>
                <AberrusDifficulty/>
                <AberrusBar name="공략 개요"/>
                <AberrusBarInsertIntro/>                
                <AberrusBar name="사전 준비"/>
                <AberrusBarInsertSetup/>                
                <AberrusBar name="던전 도감"/>
                <AberrusBarInsertMechanic/>                
                <AberrusBar name="공략 진행"/>
                <AberrusBarInsertStrategy/>                
                <NextBoss
                next="다음 보스"
                name="융합체의 방"
                number="2"
                />                
            </div>
        </div>
    )
}

function AberrusBarInsertIntro() {
    return (
        <div className="aberrusBarInsert">
            <div className="intro">
                <p className="mb-0">전투 대상: 단일</p>
            </div>
        </div>
    )
}

function AberrusBarInsertSetup() {
    const count = ["2", "4 / 6", "14+ / 22+"]
    return (
        <div className="aberrusBarInsert">

            <div className="setUp">
                <div className="squad d-flex ac-c">
                    <img className="img-30 mr-1" src={publicData.tankerIcon} alt=""/>
                    <div className="count mr-1">{count[0]}</div>
                    <img className="img-30 mr-1" src={publicData.healerIcon} alt=""/>
                    <div className="count mr-1">{count[1]}</div>
                    <img className="img-30 mr-1" src={publicData.dealerIcon} alt=""/>
                    <div className="count">{count[2]}</div>
                </div>
            </div>

            {/* <div className="textBarInsertInsert">
                <p className="mb-0">추가 사항</p>
            </div> */}

        </div>
    )
}

function AberrusBarInsertMechanic() {
    return (
        <div className="aberrusBarInsert">

            <div className="mechanic">
                <div className="mechanicTitle">
                    <img className="img" src="
                    https://wow.zamimg.com/images/wow/icons/large/achievment_boss_spineofdeathwing.jpg
                    " alt=""/>
                    <div className="name">
                    지옥강철 학살
                    </div>
                    </div>
                    <div className="mechanicDescription">
                    <p>카자라의 생명력이 80%, 60%, 40%가 되면 공격대에 암흑불길 데미지를 입힙니다.</p>
                    <p>매 생명력 퍼센트 단계마다 지옥불 심장의 주기가 짧아집니다.</p>
                    <p>지옥강철 파편과 망령의 피를 지속적으로 회피해야합니다.</p>
                    <MechanicSub
                    img="https://wow.zamimg.com/images/wow/icons/large/inv_ragnaros_heart.jpg"
                    name="지옥불 심장: 4초마다 공격대 피해"
                    />
                    <MechanicSub
                    img="https://wow.zamimg.com/images/wow/icons/large/inv_10_elementalcombinedfoozles_shadowflame.jpg"
                    name="지옥강철 파편: 4m 범위 바닥"
                    />
                    <MechanicSub
                    img="https://wow.zamimg.com/images/wow/icons/large/ability_deathwing_bloodcorruption_earth.jpg"
                    name="망령의 피: 3m 범위 바닥"
                    />                    
                </div>
            </div>

            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/inv_shadowflame_groundstate.jpg"
            name="공포의 균열"
            p1  ="다수에게 5초 후 암흑불길 피해 5m 균열을 생성하는 디버프를 부여합니다."
            p2  ="카자라의 매 생명력 퍼센트 단계마다 대상이 증가합니다."
            p3  ="균열은 고뇌의 광선을 유도해 서로 제거합니다."
            />

            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/ability_mage_firestarter.jpg"
            name="고뇌의 광선"
            p1  ="다수에게 레이저의 추적 대상으로 하고, 경로에 바닥을 생성합니다."
            p2  ="고뇌의 광선은 균열로 유도해 서로 제거합니다."
            />

            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/ability_warlock_shadowflame.jpg"
            name="지옥광선"
            p1  ="카자라의 기력이 100에 도달하면, 무작위 대상에게 전방 숨결 공격합니다."
            p2  ="경로에서 피하면 됩니다."
            />

            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/inv_icon_wingbroken07d.jpg"
            name="멸종의 날개"
            p1  ="공격대 피해와 넉백입니다."
            p2  ="이후 20초동안 2초마다 도트 피해 디버프가 부여됩니다."
            />

            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/inv_10_elementalshardfoozles_shadowflame.jpg"
            name="공포의 발톱"
            p1  ="탱커에게 물리 피해와 암흑불길 피해를 동시에 입히고 25초동안 1초마다 도트 피해 디버프를 부여합니다."
            p2  ="1 중첩 교대합니다."
            />

        </div>
    )
}
function AberrusBarInsertStrategy() {
    return (
        <div className="aberrusBarInsert">

            <div className="strategy">
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
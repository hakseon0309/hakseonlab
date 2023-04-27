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

export default function Experiments() {
    return (        
        <div className="content">
            <TitleBar/>
            <div className="aberrus">                
                <AberrusNav number="4"/>                
                <AberrusBossTitle
                name="자칼리의 습격"
                number="4"/>
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
                name="장로 라소크"
                number="5"
                />                
            </div>
        </div>
    )
}

function AberrusBarInsertIntro() {
    return (
        <div className="aberrusBarInsert">
            <div className="intro">
                <p>전투 대상: 다수 대상, 마지막 페이즈는 보스와 단일 전투</p>
                <p>블러드 : 마지막 페이즈</p>
                <p>많은 종류의 적이 나옵니다. 각 적이 어떤 스킬을 사용하는지 확인하고 대처하면 어렵지 않습니다.</p>
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

            <MechanicSub name="환경"/>
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/spell_mage_supernova_nightborne.jpg"
            name="방벽 반발 작용"
            p1  ="쫄이 맵 중앙의 문에 도착하면 전멸급의 공격대 피해를 받습니다."
            p2  ="탱커가 자칼리 벽등반자 어그로를 획득하지 않으면 문으로 달려가므로 주의하세요."
            />
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/ability_rogue_cannonballbarrage.jpg"
            name="석궁 발사"
            p1  ="전투 내내 12미터 연한 갈색 소용돌이 바닥이 생깁니다. 이동해서 피하세요."
            />
            <MechanicSub name="전쟁군주 카그니"/>
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/spell_mage_supernova_nightborne.jpg"
            name="방벽 반발 작용"
            p1  ="쫄이 맵 중앙의 문에 도착하면 전멸급의 공격대 피해를 받습니다."
            p2  ="탱커가 자칼리 벽등반자 어그로를 획득하지 않으면 문으로 달려가므로 주의하세요."
            />
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/ability_rogue_cannonballbarrage.jpg"
            name="석궁 발사"
            p1  ="전투 내내 12미터 연한 갈색 소용돌이 바닥이 생깁니다. 이동해서 피하세요."
            />

        </div>
    )
}
function AberrusBarInsertStrategy() {
    return (
        <div className="aberrusBarInsert">
            
            <div className="strategy">
                <p>크게 중요하진 않지만, 약산개 진형으로 시작합니다.</p>
                <p>공략은 매우 간단하고, 직관적 입니다.</p>
                <p>공격대원은 탱커와 부딪치지 않도록 합니다.</p>
                <p>넬드리스</p>
                <p>분쇄의 돌진, 경로에 서있지 않게 피하세요.</p>
                <p>울부짖는 포효를 시전하면 멀리 빠집니다.</p>

                <p>타드리온</p>
                <p>블러드를 사용하고 빠르게 전투를 끝내야 합니다.</p>
                <p>
                    불안정한 정수 관리가 핵심입니다. 자주 해제하면 쫄이 많아 딜 손실이 날 것이고, 그렇지 않으면 많은 공격대 피해를
                    상쇄해야합니다. 약 7중첩에 해제하면 좋습니다.
                </p>
                <p>
                    해제를 하면 쫄이 나오고, 이 쫄은 보스가 격렬한 분출을 시전하면 하나당 공격대 피해를 줍니다.
                    따라서 격렬한 분출 타이밍을 잘 보고 해제 타이밍을 결정해야합니다.
                </p>
                <p>바닥은 단순히 이동해서 피하면 됩니다.</p>

                <p>리온투스</p>

                <p>
                    리온투스와 전투중일 때도 불안정한 정수는 계속 존재합니다.
                    한번에 모여서 해제하고 광역 피해로 제거합니다.
                </p>

                <p>노란색 공이 보스에 닿지 않게 전담조가 계속 튕겨내주세요.</p>
                <p>파열 대상이 되면 진형에서 이탈합니다. 이동 속도가 감소했기 때문에, 깊은 숨결을 잘 피해야 합니다.</p>

                <p>깊은 숨결은 맵을 세 분할로 나눠 랜덤한 위치로 두 번 사용합니다, 위치를 잘 보고 피하세요.</p>


            </div>

        </div>
    )
}
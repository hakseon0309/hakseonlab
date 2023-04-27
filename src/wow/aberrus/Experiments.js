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
                <AberrusNav number="3"/>                
                <AberrusBossTitle
                name="잊힌 실험체"
                number="3"/>
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
                name="자칼리의 습격"
                number="4"
                />                
            </div>
        </div>
    )
}

function AberrusBarInsertIntro() {
    return (
        <div className="aberrusBarInsert">
            <div className="intro">
                <p>전투 대상: 3 보스, 각 단일 전투</p>
                <p>블러드 : 타드리온 (2번째 보스)</p>
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

            <MechanicSub name="모든 보스 공통 스킬"/>
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/ability_evoker_azurestrike.jpg"
            name="마력 깃든 강타"
            p1  ="평타마다 탱커에게 중첩되는 디버프를 부여합니다."
            p2  ="상대 탱커에게 인계를 하면서, 상대 탱커에게 부딪치면 디버프가 해제됩니다."
            p3  ="해제되면 공격대 전체에게 중첩되는 20초동안 2초마다 피해를 받는 디버프가 생깁니다. 중첩되지 않게 인계를 반복하세요."
            />

            <MechanicSub name="넬드리스"/>
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/ability_xavius_tormentingswipe.jpg"
            name="분쇄의 돌진"
            p1  ="여러 대상들에게 징표를 찍고 차례대로 돌진합니다."
            p2  ="맞으면 피해를 입고 밀쳐집니다."
            p3  ="경로에 있어도 피해를 받으며 이 효과는 중첩됩니다."
            />
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/inv_weapon_hand_30.jpg"
            name="거대한 격돌"
            p1  ="전방 충격파 입니다."
            />
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/ability_evoker_oppressingroar.jpg"
            name="우레와 같은 포효"
            p1  ="시전하면 멀리 떨어져서 받는 피해를 감소시키세요."
            />
            <MechanicSub name="타드리온"/>
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/ability_socererking_arcanemines.jpg"
            name="불안정한 정수"
            p1  ="무작위 대상에게 해제가 가능한 점점 많은 피해가 들어오는 디버프를 부여합니다. 해제를 하면 공격대 피해를 입히는 쫄이 생성되고, 빠르게 잡아내야 합니다."
            p2  ="잡아내면 다시 가까운 플레이어에게 디버프로 돌아갑니다. 반복하면서 점점 더 많은 대상이 생기기 때문에 블러드를 사용합니다."
            p3  ="모두 모여서 광역해제를 받고 빠르게 범위 공격으로 제거합니다."
            />
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/ability_socererking_arcanereplication.jpg"
            name="불안정한 분출"
            p1  ="바닥입니다, 피하면 됩니다."
            />
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/spell_shadow_unstableaffliction_3_purple.jpg"
            name="격렬한 분출"
            p1  ="8초동안 1초마다 공격대 피해를 줍니다."
            p2  ="영웅 난이도부터 격렬한 분출동안 쫄이 있으면 더 많은 공격대 피해를 받습니다."
            p3  ="격렬한 분출을 맞고나서 공격대원들의 디버프를 모여서 처리하면 안전할 것입니다."
            />
            <MechanicSub name="리온투스"/>
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/ability_evoker_deepbreath.jpg"
            name="깊은 숨결"
            p1  ="맵 가장자리로 뛰어가서 비행 브레스를 쏠 준비를 합니다. 시전중에 탱커를 바라보지만 쏠 방향은 고정되어 있습니다."
            p2  ="왼쪽, 가운데, 오른쪽 중 한 곳에 서서 맵 반대쪽으로 날면서 쏘기 때문에 위치를 보고 빠르게 이동해서 피합니다."
            p3  ="두번 쓰기 때문에 방심하지 마세요."
            />
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/ability_evoker_temporalanomaly.jpg"
            name="시간 변칙"
            p1  ="리온투스를 향해 노란색 구슬이 날아옵니다."
            p2  ="리온투스에 닿으면 리온투스가 큰 보호막을 얻기 때문에 공격대원은 몸으로 부딪쳐 튕겨내 닿지 않게 합니다."
            p3  ="공격대원은 닿으면 일정 피해를 받으니 조심하세요."
            />
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/ability_evoker_disintegrate.jpg"
            name="파열"
            p1  ="무작위 대상에게 3초동안 1초마다 피해를 주면서 디버프를 부여합니다."
            p2  ="이 디버프는 이동 속도를 30% 감소시키고, 5미터 내 공격대원들에게 16초동안 1초마다 피해를 입힙니다."
            p3  ="진형에서 이탈하고, 이동 속도가 느려졌기 때문에 깊은 숨결을 피하는데 주의해야 합니다."
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
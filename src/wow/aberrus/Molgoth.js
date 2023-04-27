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

export default function Molgoth() {
    return (        
        <div className="content">
            <TitleBar/>
            <div className="aberrus">                
                <AberrusNav number="2"/>                
                <AberrusBossTitle
                name="융합체의 방"
                number="2"/>
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
                name="잊힌 실험체"
                number="3"
                />                
            </div>
        </div>
    )
}

function AberrusBarInsertIntro() {
    return (
        <div className="aberrusBarInsert">
            <div className="intro">
                <p>전투 대상: 2타겟, 50% 이후 단일</p>
                <p>블러드: 2단계</p>
                <p>1단계에서 두 보스가 25m 이내로 위치하지 않도록 합니다.</p>
            </div>
        </div>
    )
}

function AberrusBarInsertSetup() {
    const count = ["2", "4-5 / 6-7", "13+ / 21+"]
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
            
            <MechanicSub name="1단계: 그림자의 정수"/>
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathsembrace.jpg"
            name="타락의 어둠"
            p1  ="50m 내 모든 대상에게 5초마다 타락의 어둠을 부여합니다."
            p2  ="20초동안 5초마다 피해를 입고, 최대 생명력이 1% 감소합니다."
            p3  ="이 효과는 다른 기술에 피해를 입어도 중첩됩니다."
            />
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/inv_icon_shadowcouncilorb_purple.jpg"
            name="응결되는 공허"
            p1  ="무작위 대상 위치에 50m 내 모든 대상에게 큰 피해를 입히는 폭탄을 생성합니다."
            p2  ="멀리 떨어질 수록 받는 피해가 감소합니다."
            />
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowfury.jpg"
            name="암영의 폭발"
            p1  ="무작위 여러 대상에게 6초 후 8m 바닥을 생성하는 디버프를 부여합니다."
            p2  ="공격대 위치 바깥, 벽쪽에 유도하고 복귀합니다."
            />
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/spell_priest_shadoworbs.jpg"
            name="어둠의 합일"
            p1  ="다방면에서 그림자의 정수 쪽으로 향하는 구체를 생성합니다."
            p2  ="이동해서 회피합니다."
            />
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/ability_ironmaidens_convulsiveshadows.jpg"
            name="어둠의 쐐기"
            p1  ="탱커에게 단일 피해를 입힙니다."
            p2  ="이 효과는 중첩됩니다, 면역 기술로 중첩을 초기화할 수 있습니다"
            />
            <MechanicSub name="1단계: 영원한 불길"/>
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/ability_warlock_fireandbrimstone.jpg"
            name="타오르는 열"
            p1  ="50m 내 모든 대상에게 20초동안 5초마다 피해를 입는 디버프를 부여합니다."
            p2  ="이 효과는 다른 기술에 피해를 입어도 중첩됩니다."
            />
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/spell_mage_meteor.jpg"
            name="불타는 유성"
            p1  ="여러 대상이 같이 맞아야하는 대형 바닥입니다."
            p2  ="면역 기술로 혼자 맞을 수 있습니다."
            />
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/ability_rhyolith_volcano.jpg"
            name="타오르는 폭발"
            p1  ="여러 바닥이 생성되고 모두 막아야 합니다."
            p2  ="막지 못한 바닥당 공격대 피해를 입습니다."
            />
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/spell_shaman_lavasurge.jpg"
            name="소용돌이치는 화염"
            p1  ="무작위 대상에게 여러 갈래로 뻗어나가는 소용돌이를 발사합니다."
            p2  ="이동해서 회피합니다."
            />
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/spell_fire_soulburn.jpg"
            name="화염 베기"
            p1  ="탱커에게 단일 피해를 입힙니다."
            p2  ="이 효과는 중첩되며, 면역 기술로 중첩을 초기화할 수 있습니다."
            />
            <MechanicSub name="2단계: 완벽한 파괴"/>
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/inv_shadowflame_debuff.jpg"
            name="암흑불길 오염"
            p1  ="모든 플레이어에게 10초마다 중첩되는 디버프를 부여합니다."
            p2  ="무한히 지속되며, 2초마다 피해를 입히고 최대 생명력을 1% 감소시킵니다."
            p3  ="이 효과는 중첩됩니다."
            />
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/inv_shadowflame_nova.jpg"
            name="암울한 겁화"
            p1  ="5명 이상의 대상이 나눠 맞아야하는 대형 바닥을 생성합니다."
            p2  ="이후 멀리 떨어져야하는 폭발이 발생합니다."
            />
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/inv_shadowflame_groundstate.jpg"
            name="맹렬한 황혼"
            p1  ="무작위 여러 대상에게 6초 후 분출되는 디버프를 부여합니다."
            p2  ="분출되면 대상 위치에 바닥을 생성하고 바깥 쪽으로 소용돌이를 발사합니다."
            p3  ="진형 밖에서 바닥을 깔고 복귀합니다."
            />
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/inv_chaos_orb.jpg"
            name="수렴 분출"
            p1  ="막아야 하는 여러 바닥이 생성됩니다, 막지 못하면 공격대 피해를 받습니다."
            p2  ="이후 바깥 쪽에서 바닥을 향해 소용돌이가 생성되므로 이동해서 회피합니다."
            />
            <Mechanic
            img ="https://wow.zamimg.com/images/wow/icons/large/inv_shadowflame_buff.jpg"
            name="쇠약의 약점"
            p1  ="탱커에게 큰 물리 피해를 입히고, 암흑불길 폭발로 받는 피해를 200% 증가시킵니다"
            p2  ="탱커는 1 중첩 교대합니다."
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
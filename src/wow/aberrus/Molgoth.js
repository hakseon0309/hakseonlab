import React from "react"
import { TitleBar } from "../../Layout"
import "./Aberrus.css"

import {
    AberrusNav,
    AberrusTitle,
    AberrusDifficulty,
    AberrusBar,
    AberrusNext,
    AberrusInsertBox0,
    AberrusInsertBox1,
    AberrusInsertBox2,
} from "./AberrusLayout"

export default function Molgoth() {
    return (        
        <div className="content">
            <TitleBar title="월드 오브 워크래프트 10.1 - 어둠의 도가니 아베루스"/>
            <div className="aberrus">                
                <AberrusNav number="2"/>                
                <AberrusTitle
                name="융합체의 방"
                number="2"/>
                <AberrusDifficulty/>
                <AberrusBar name="사전 준비"/>
                <AberrusBarInsertSetup/>                
                <AberrusBar name="공략 개요"/>
                <AberrusBarInsertIntro/>                
                <AberrusBar name="던전 도감"/>
                <AberrusBarInsertMechanic/>                
                <AberrusBar name="공략 진행"/>
                <AberrusBarInsertStrategy/>                
                <AberrusNext
                next="다음 보스"
                name="잊힌 실험체"
                number="3"
                />                
            </div>
        </div>
    )
}
function AberrusBarInsertSetup() {
    return (
        <div className="aberrusBarInsert">
            <AberrusInsertBox0
            title="인원 구성 : "
            desc="추가 힐러가 필요할 수 있음"
            />
        </div>
    )
}
function AberrusBarInsertIntro() {
    return (
        <div className="aberrusBarInsert">
            <AberrusInsertBox0
            title="전투 대상 : "
            desc="1 페이즈 - 2 대상,     2페이즈 - 1 대상"
            />
            <AberrusInsertBox0
            title="피의 욕망 : "
            desc="전투 시작 혹은 2 페이즈"
            />
            <AberrusInsertBox0
            title="유용함 : "
            desc="드루이드의 쇄도의 포효, 주술사의 바람 질주 토템, 흑마법사의 악마의 관문"
            />
        </div>
    )
}
function AberrusBarInsertMechanic() {
    return (
        <div className="aberrusBarInsert">
            <div className="aberrusBarInsertGridDouble">
                <AberrusInsertBox2
                img="spell_shadow_deathsembrace"
                title="타락의 어둠"
                desc="50m 내 모든 대상에게 5초마다 타락의 어둠을 부여합니다."
                />
                <AberrusInsertBox2
                img="ability_warlock_fireandbrimstone"
                title="타오르는 열기"
                desc="50m 내 모든 대상에게 20초동안 5초마다 피해를 입는 디버프를 부여합니다."
                />
                <AberrusInsertBox2
                img="inv_icon_shadowcouncilorb_purple"
                title="응결되는 공허"
                desc="무작위 대상 위치에 50m 내 모든 대상에게 큰 피해를 입히는 폭탄을 생성합니다."
                />
                <AberrusInsertBox2
                img="spell_mage_meteor"
                title="불타는 유성"
                desc="여러 대상이 같이 맞아야하는 대형 바닥입니다."
                />
                <AberrusInsertBox2
                img="spell_shadow_shadowfury"
                title="암영의 폭발"
                desc="무작위 여러 대상에게 6초 후 8m 바닥을 생성하는 디버프를 부여합니다."
                />
                <AberrusInsertBox2
                img="ability_rhyolith_volcano"
                title="타오르는 폭발"
                desc="여러 바닥이 생성되고 모두 막아야 합니다."
                />
                <AberrusInsertBox2
                img="spell_priest_shadoworbs"
                title="어둠의 합일"
                desc="다방면에서 그림자의 정수 쪽으로 향하는 구체를 생성합니다."
                />
                <AberrusInsertBox2
                img="spell_shaman_lavasurge"
                title="소용돌이치는 화염"
                desc="무작위 대상에게 여러 갈래로 뻗어나가는 소용돌이를 발사합니다."
                />
                <AberrusInsertBox2
                img="ability_ironmaidens_convulsiveshadows"
                title="어둠의 쐐기"
                desc="탱커에게 단일 피해를 입힙니다."
                />
                <AberrusInsertBox2
                img="spell_fire_soulburn"
                title="화염 베기"
                desc="탱커에게 단일 피해를 입힙니다."
                />
            </div>
            <AberrusInsertBox1
            img="inv_shadowflame_debuff"
            title="암흑불길 오염"
            desc="모든 플레이어에게 10초마다 중첩되는 디버프를 부여합니다."
            />
            <AberrusInsertBox1
            img="inv_shadowflame_nova"
            title="암울한 겁화"
            desc="5명 이상의 대상이 나눠 맞아야하는 대형 바닥을 생성합니다."
            />
            <AberrusInsertBox1
            img="inv_shadowflame_groundstate"
            title="맹렬한 황혼"
            desc="모든 플레이어에게 10초마다 중첩되는 디버프를 부여합니다."
            />
            <AberrusInsertBox1
            img="inv_chaos_orb"
            title="수렴 분출"
            desc="모든 플레이어에게 10초마다 중첩되는 디버프를 부여합니다."
            />
            <AberrusInsertBox1
            img="inv_shadowflame_buff"
            title="쇠약의 약점"
            desc="탱커에게 큰 물리 피해를 입히고, 암흑불길 폭발로 받는 피해를 200% 증가시킵니다."
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
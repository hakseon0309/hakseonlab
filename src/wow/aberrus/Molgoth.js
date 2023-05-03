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
            <AberrusInsertBox0
            title="중요 : "
            desc="1 페이즈에서 두 보스의 생명력을 나란히 50%로 감소시키기"
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
                desc="보라색 보스는 50m 내 모든 대상에게 5초마다 타락의 어둠을 부여합니다. 이는 중첩당 20초동안 최대 생명력이 1% 감소하고 피해를 입습니다."
                />
                <AberrusInsertBox2
                img="ability_warlock_fireandbrimstone"
                title="타오르는 열기"
                desc="노란색 보스는 50m 내 모든 대상에게 5초마다 피해를 입는 디버프를 부여합니다. 이는 중첩됩니다."
                />
                <AberrusInsertBox2
                img="inv_icon_shadowcouncilorb_purple"
                title="응결되는 공허"
                desc="폭탄이 설치되고 5초뒤에 폭발합니다. 주변을 끌어당기며 멀어질수록 피해가 감소합니다."
                />
                <AberrusInsertBox2
                img="spell_mage_meteor"
                title="불타는 유성"
                desc="여러 대상이 같이 맞아야하는 대형 바닥입니다. 탱커와 근딜이 같이 맞습니다."
                />
                <AberrusInsertBox2
                img="spell_shadow_shadowfury"
                title="암영의 폭발"
                desc="여러 대상에게 곧 바닥이 깔리는 디버프를 부여합니다. 밖에 나가서 깔고 오면 됩니다."
                />
                <AberrusInsertBox2
                img="ability_rhyolith_volcano"
                title="타오르는 폭발"
                desc="여러 바닥이 생성되고 모두 최소 한명씩 막아야 합니다."
                />
                <AberrusInsertBox2
                img="spell_priest_shadoworbs"
                title="어둠의 합일"
                desc="다방면에서 그림자의 정수 쪽으로 향하는 구체를 생성합니다. 이동해서 피하면 됩니다."
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
            desc="모든 플레이어에게 10초마다 중첩되는 디버프를 부여합니다. 이는 최대 생명력을 1% 감소시키고, 2초마다 피해를 입힙니다."
            />
            <AberrusInsertBox1
            img="inv_shadowflame_nova"
            title="암울한 겁화"
            desc="5명 이상의 대상이 나눠 맞아야하는 대형 바닥을 생성합니다. 이후 모두를 끌어당기는 바닥을 생성하는데, 멀리 떨어질수록 받는 피해가 감소합니다."
            />
            <AberrusInsertBox1
            img="inv_shadowflame_groundstate"
            title="맹렬한 황혼"
            desc="여러 대상에게 6초 후에 폭발하며 바닥을 남기고, 바깥쪽으로 소용돌이를 발사하는 디버프를 부여합니다. 밖에 깔고 오면 됩니다."
            />
            <AberrusInsertBox1
            img="inv_chaos_orb"
            title="수렴 분출"
            desc="모든 플레이어에게 10초마다 중첩되는 디버프를 부여합니다."
            />
            <AberrusInsertBox1
            img="inv_shadowflame_buff"
            title="쇠약의 약점"
            desc="탱커에게 큰 물리 피해를 입히고, 암흑불길 폭발로 받는 피해를 200% 증가시킵니다. 먼저 디버프를 부여하고 브레스를 쏘는데 이 사이에 다른 탱커가 도발합니다."
            />
        </div>
    )
}
function AberrusBarInsertStrategy() {
    return (
        <div className="aberrusBarInsert">
            <img src="https://www.method.gg/images/guides/uploads/the-amalgamation-chamber-phase-1-positions.jpg" alt=""/>
            <p>
                공격대를 두 그룹으로 나눕니다.<br/>
                보스의 이름은 그림자의 정수와 영원한 불길이지만 편의상 보라색과 노란색이라고 합니다.
            </p>
            <p>
                보라색 팀은 원딜 위주로 구성을 하면 좋습니다. 나가서 바닥을 깔고 구슬을 피하며, 멀리 빠지면 받는 피해가 감소하는 스킬들을 대처하기 때문입니다.
            </p>
            <p>
                노란색 팀은 근딜 위주로 구성을 하면 좋습니다. 소용돌이 발사를 피하고, 탱커와 함께 같이 맞는 바닥과, 한명 한명 모두 막아야 하는 바닥을 대처하면 됩니다.
            </p>
            <p>
                딜이 충분하다면 1페이즈에서 두 보스를 스왑하지 않고 빠르게 1페이즈를 끝내는 방식이 좋습니다.
                그렇지 않다면 탱커끼리 보스만 한번 스왑하면 편합니다.
            </p>
            <p>
                2단계는 두 보스 중 하나라도 50%가 되면 넘어가며, 두 보스의 생명력 평균으로 2단계 보스가 생성됩니다.
            </p>
            <p>
                2단계 보스는 두 보스의 스킬을 합한 패턴입니다.
            </p>
            <img src="https://www.method.gg/images/guides/uploads/the-amalgamation-chamber-phase-2-positions.jpg" alt=""/>
            <p>
                2페이즈가 시작되면 방 중앙에 약산개하여 모이고 타임어택이 시작됩니다. 디버프는 이제 사라지지 않고 계속 중첩됩니다.
            </p>
            <p>
                중간 중간 멀리 떨어져야하는 바닥이 생기기 때문에, 이동 속도 지원기나 관문이 유용하게 사용됩니다.
            </p>

        </div>
    )
}
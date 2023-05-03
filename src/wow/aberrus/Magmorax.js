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
} from "./AberrusLayout"

export default function Rashok() {
    return (        
        <div className="content">
            <TitleBar title="월드 오브 워크래프트 10.1 - 어둠의 도가니 아베루스"/>
            <div className="aberrus">                
                <AberrusNav number="7"/>                
                <AberrusTitle
                name="마그모락스"
                number="7"/>
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
                name="넬타리온의 메아리"
                number="8"
                />                
            </div>
        </div>
    )
}

//

function AberrusBarInsertSetup() {
    return (
        <div className="aberrusBarInsert">
            <AberrusInsertBox0
            title="인원 구성 : "
            desc="추가적인 힐러가 필요할 가능성 높음"
            />
        </div>
    )
}
function AberrusBarInsertIntro() {
    return (
        <div className="aberrusBarInsert">
            <AberrusInsertBox0
            title="전투 대상 : "
            desc="1 대상"
            />
            <AberrusInsertBox0
            title="피의 욕망 : "
            desc="전투 시작"
            />
            <AberrusInsertBox0
            title="유용함 : "
            desc="기원사의 되감기와 구출, 성기사의 보호의 축복, 무적형 생존기, 흑마법사의 악마의 관문"
            />
        </div>
    )
}

function AberrusBarInsertMechanic() {
    return (
        <div className="aberrusBarInsert">
            <AberrusInsertBox1
            img="spell_fire_moltenblood"
            title="재앙적인 분출"
            desc="마그모락스의 기력이 100이 되면 전멸한다고 보면 됩니다."
            />
            <AberrusInsertBox1
            img="spell_fire_firebolt02"
            title="타오르는 타액"
            desc="여러 대상에게 잠시 후 폭발하고 용암 웅덩이를 생성하는 디버프를 부여합니다. 밖에서 깔고 오면 됩니다."
            />
            <AberrusInsertBox1
            img="ability_rhyolith_lavapool"
            title="용암 방출"
            desc="용암 웅덩이는 제한이 없이 점점 커집니다. 공격대원이 바닥에 올라가면 계속해서 디버프가 생기지만 크기가 줄어들면서 사라집니다. 25중첩되면 사망합니다."
            />
            <AberrusInsertBox1
            img="ability_ironmaidens_rapidfire"
            title="타오르는 격분"
            desc="마그모락스가 용암 웅덩이 위에 있으면 기력이 5씩 상승하고 공격대 피해를 입힙니다."
            />
            <AberrusInsertBox1
            img="inv_misc_head_dragon_01"
            title="점화의 포효"
            desc="모든 대상에게 공격대 피해와 도트 디버프를 부여합니다. 계속해서 쌓이므로 힐에 한계가 있어 빠른 시간 안에 전투를 끝내야 합니다. 또한 추가로 이 능력을 사용하면 용암 웅덩이가 생성됩니다."
            />
            <AberrusInsertBox1
            img="spell_nature_earthquake"
            title="제압의 발구르기"
            desc="모든 대상에게 물리 피해와 넉백을 시킵니다. 흑마법사의 관문을 이용하면 무시할 수 있습니다."
            />
            <AberrusInsertBox1
            img="ability_mage_firestarter"
            title="타오르는 숨결"
            desc="전면 원뿔 브레스 입니다. 피하세요."
            />
            <AberrusInsertBox1
            img="spell_fire_burnout"
            title="소각하는 아귀"
            desc="탱커를 3번 연속으로 때립니다. 한번에 3중첩이 생깁니다. 바로 도발하면 됩니다. "
            />
        </div>
    )
}
function AberrusBarInsertStrategy() {
    return (
        <div className="aberrusBarInsert">
            <img src="https://www.method.gg/images/guides/uploads/magmorax-general-positioning.jpg" alt=""/>
            <p>
                보스가 큰 넉백을 사용하므로 맵 가장자리에서 탱킹합니다.
                탱커에게 소각하는 아귀 기술을 사용하면 한번에 3스택이 생깁니다. 생존기를 키고 맞은 뒤 도발 인계합니다.
            </p>
            <p>
                전투 중 주기적으로 여러 대상에게 바닥 디버프를 부여합니다. 맵 가장자리부터 깔고 돌아오면 됩니다.
                이 외에도 보스가 랜덤한 위치에 바닥을 생성하는데, 이는 공격대원 최소 3명이서 바로 지워줍니다.
            </p>
            <p>
                보스가 바닥 위에 올라가면 기력이 빠르게 회복됩니다.
                보스 기력이 100이 되면 전멸합니다.
            </p>
            <p>
                보스가 넉백을 사용하려고 할때 시전 0.5초 전에 관문을 사용하면 넉백에 면역이 될 수 있습니다.
            </p>
            <p>
                랜덤한 방향으로 머리를 돌려서 원뿔 브레스를 사용하므로 피하세요.
            </p>
            <p>
                점점 강력해지는 공격대 피해 디버프가 생기므로 타임어택형 전투가 됩니다.
                전투가 시작되자마자 블러드를 사용해서 빠르게 전투를 끝내세요.
            </p>

        </div>
    )
}
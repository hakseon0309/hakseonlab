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

export default function Kazzara() {
    return (        
        <div className="content">
            <TitleBar title="월드 오브 워크래프트 10.1 - 어둠의 도가니 아베루스"/>
            <div className="aberrus">                
                <AberrusNav number="1"/>                
                <AberrusTitle
                name="지옥불길 카자라"
                number="1"/>
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
                name="융합체의 방"
                number="2"
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
            desc="특이사항 없음, 일반적인 구성"
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
        </div>
    )
}
function AberrusBarInsertMechanic() {
    return (
        <div className="aberrusBarInsert">
            <AberrusInsertBox1
            img="achievment_boss_spineofdeathwing"
            title="지옥강철 학살"
            desc="카자라 생명력 80%, 60%, 40% 일 때, 공격대 피해와 세 가지 스킬 파생"
            />
            <AberrusInsertBox1
            img="inv_ragnaros_heart"
            title="지옥불 심장"
            desc="파생 스킬 1: 4초마다 공격대 피해를 입힙니다. 매 생명력% 마다 주기가 짧아집니다. 힐로 채우면 됩니다."
            />
            <AberrusInsertBox1
            img="inv_10_elementalcombinedfoozles_shadowflame"
            title="지옥강철 파편"
            desc="파생 스킬 2: 매 생명력% 마다 일회성으로 많은 바닥이 생깁니다. 이동해서 회피합니다."
            />
            <AberrusInsertBox1
            img="ability_deathwing_bloodcorruption_earth"
            title="망령의 피"
            desc="파생 스킬 3: 많은 바닥이 생깁니다. 폭발 후 바닥이 남습니다. 이동해서 회피합니다. "
            />
            <AberrusInsertBox1
            img="inv_shadowflame_groundstate"
            title="공포의 균열"
            desc="디버프 대상자가 되면 5초 후에 5미터 반경 폭발 후 바닥이 생깁니다. 밖에 나가서 깔고 옵니다."
            />
            <AberrusInsertBox1
            img="ability_mage_firestarter"
            title="고뇌의 광선"
            desc="디버프 대상자가 되면 레이저가 추적합니다. 공포의 균열 바닥으로 유도하면 제거됩니다."
            />
            <AberrusInsertBox1
            img="ability_warlock_shadowflame"
            title="지옥 광선"
            desc="카자라가 랜덤한 대상 방향으로 브레스를 발사합니다. 이동해서 회피합니다."
            />
            <AberrusInsertBox1
            img="inv_icon_wingbroken07d"
            title="멸종의 날개"
            desc="넉백과 함께 공격대 피해와 20초 디버프를 부여합니다. 힐로 채우면 됩니다."
            />
            <AberrusInsertBox1
            img="inv_10_elementalshardfoozles_shadowflame"
            title="공포의 발톱"
            desc="탱커에게 큰 피해를 주고 중첩되는 디버프를 남깁니다. 1중첩 교대합니다."
            />
        </div>
    )
}
function AberrusBarInsertStrategy() {
    return (
        <div className="aberrusBarInsert">
            <img src="https://www.method.gg/images/guides/uploads/kazzara-the-hellforged-opening-position.jpg" alt=""/>
            <p>
                탱커는 카자라를 가장자리에서 머리를 돌려 탱킹합니다.
                카자라가 정면 공격을 사용하지는 않지만, 공격대원이 브레스를 인식하는데 도움이 됩니다.
                디버프 1중첩에 도발 교대합니다.
            </p>
            <p>
                전투 시작하면서 블러드를 사용하고, 각종 패턴에 대처하기 좋도록 약산개 진형을 유지합니다.
                카자라가 80%, 60%, 40%에 도달하면 점점 패턴들이 치명적이게 됩니다.
                바닥을 한두번 맞고 죽기 쉬우니 주의하세요.
            </p>
            <p>
                지옥강철 파편은 각 퍼센트에서 한번 발생하지만, 망령의 피는 지속적으로 생성되므로 바닥을 계속 피해야 합니다.
                카자라 기력 100때 브레스를 사용하므로 기력을 보면서 피할 준비를 하세요.
            </p>
            <p>
                멸종의 날개는 넉백이 있습니다. 캐릭터 뒤에 바닥이나 추적중인 레이저가 위치하지 않도록 주의하세요.
                카자라의 생명력이 40% 미만일 때, 공격대 피해가 매우 증가하니 주의하세요.
            </p>
        </div>
    )
}
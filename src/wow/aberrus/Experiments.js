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

export default function Experiments() {
    return (        
        <div className="content">
            <TitleBar title="월드 오브 워크래프트 10.1 - 어둠의 도가니 아베루스"/>
            <div className="aberrus">                
                <AberrusNav number="3"/>                
                <AberrusTitle
                name="잊힌 실험체"
                number="3"/>
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
                name="자칼리의 습격"
                number="4"
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
            desc="총 3마리의 보스, 각 단일 전투"
            />
            <AberrusInsertBox0
            title="피의 욕망 : "
            desc="타드리온 (2번째 보스)"
            />
            <AberrusInsertBox0
            title="유용함 : "
            desc="사제의 대규모 무효화, 드워프의 석화, 수도사의 범의 욕망, 성기사의 자유의 축복, 기원사의 소생하는 불꽃"
            />
        </div>
    )
}

function AberrusBarInsertMechanic() {
    return (
        <div className="aberrusBarInsert">
            <AberrusInsertBox1
            img="ability_evoker_azurestrike"
            title="마력 깃든 강타"
            desc="평타마다 탱커에게 중첩되는 디버프를 부여합니다."
            />
            <AberrusInsertBox1
            img="ability_xavius_tormentingswipe"
            title="분쇄의 돌진"
            desc="여러 대상들에게 징표를 찍고 차례대로 돌진합니다."
            />
            <AberrusInsertBox1
            img="inv_weapon_hand_30"
            title="거대한 격돌"
            desc="전방 충격파 입니다."
            />
            <AberrusInsertBox1
            img="ability_evoker_oppressingroar"
            title="우레와 같은 포효"
            desc="시전하면 멀리 떨어져서 받는 피해를 감소시키세요."
            />
            <AberrusInsertBox1
            img="ability_socererking_arcanemines"
            title="불안정한 정수"
            desc="무작위 대상에게 해제가 가능한 점점 많은 피해가 들어오는 디버프를 부여합니다."
            />
            <AberrusInsertBox1
            img="ability_evoker_azurestrike"
            title="불안정한 분출"
            desc="바닥입니다, 피하면 됩니다."
            />
            <AberrusInsertBox1
            img="spell_shadow_unstableaffliction_3_purple"
            title="격렬한 분출"
            desc="8초동안 1초마다 공격대 피해를 줍니다."
            />
            <AberrusInsertBox1
            img="ability_evoker_deepbreath"
            title="깊은 숨결"
            desc="맵 가장자리로 뛰어가서 비행 브레스를 쏠 준비를 합니다. 시전중에 탱커를 바라보지만 쏠 방향은 고정되어 있습니다."
            />
            <AberrusInsertBox1
            img="ability_evoker_temporalanomaly"
            title="시간 변칙"
            desc="리온투스를 향해 노란색 구슬이 날아옵니다."
            />
            <AberrusInsertBox1
            img="ability_evoker_disintegrate"
            title="파열"
            desc="무작위 대상에게 3초동안 1초마다 피해를 주면서 디버프를 부여합니다."
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
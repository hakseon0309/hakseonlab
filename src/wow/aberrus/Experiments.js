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
            <div className="aberrusPhase">
                <div className="aberrusPhaseText">모든 보스 공통</div>
                <AberrusInsertBox1
                img="ability_evoker_azurestrike"
                title="마력 깃든 강타"
                desc="평타마다 탱커에게 중첩되는 디버프를 부여합니다. 다른 탱커가 도발 후 캐릭터끼리 부딪치면 중첩이 사라집니다. 중첩이 사라질 때마다 공격대 디버프가 생기기 때문에 주의합니다."
                />
            </div>
            <div className="aberrusPhase">
                <div className="aberrusPhaseText">1단계: 넬드리스</div>
                <AberrusInsertBox1
                img="ability_xavius_tormentingswipe"
                title="분쇄의 돌진"
                desc="여러 대상들에게 징표를 찍고 차례대로 돌진합니다. 경로에서 맞지 않도록 조심하세요."
                />
                <div className="mb-2"/>
                <AberrusInsertBox1
                img="inv_weapon_hand_30"
                title="거대한 격돌"
                desc="전방 충격파 입니다. 피하면 됩니다."
                />
                <div className="mb-2"/>
                <AberrusInsertBox1
                img="ability_evoker_oppressingroar"
                title="우레와 같은 포효"
                desc="시전하면 멀리 떨어져서 받는 피해를 감소시키세요."
                />
            </div>
            <div className="aberrusPhase">
                <div className="aberrusPhaseText">2단계: 타드리온</div>
            <AberrusInsertBox1
            img="ability_socererking_arcanemines"
            title="불안정한 정수"
            desc="무작위 대상에게 해제가 가능한 점점 많은 피해가 들어오는 디버프를 부여합니다. 해제하면 쫄이 생성되고 빠르게 죽이지 않으면 공격대 피해를 입습니다."
            />
            <div className="mb-2"/>
            <AberrusInsertBox1
            img="ability_socererking_arcanereplication"
            title="불안정한 분출"
            desc="바닥입니다, 피하면 됩니다."
            />
            <div className="mb-2"/>
            <AberrusInsertBox1
            img="spell_shadow_unstableaffliction_3_purple"
            title="격렬한 분출"
            desc="8초동안 1초마다 공격대 피해를 줍니다. 불안정한 정수 해제 쫄이 있을 경우 매우 큰 공격대 피해가 옵니다."
            />
            </div>
            <div className="aberrusPhase">
                <div className="aberrusPhaseText">3단계: 리온투스</div>
            <AberrusInsertBox1
            img="ability_evoker_deepbreath"
            title="깊은 숨결"
            desc="맵 가장자리에서 비행 브레스를 쏠 준비를 합니다. 맵 삼분할 중 한 구역에 위치해서 시전하기 때문에 보고 피할 수 있습니다."
            />
            <div className="mb-2"/>
            <AberrusInsertBox1
            img="ability_evoker_temporalanomaly"
            title="시간 변칙"
            desc="리온투스를 향해 노란색 구슬이 날아옵니다. 몸으로 막아서 닿지 않게 합니다."
            />
            <div className="mb-2"/>
            <AberrusInsertBox1
            img="ability_evoker_disintegrate"
            title="파열"
            desc="무작위 대상에게 3초동안 1초마다 피해를 주면서 디버프를 부여합니다. 이동 속도 감소가 있으니 브레스를 피할 수 있게 조심하세요."
            />
            </div>
        </div>
    )
}
function AberrusBarInsertStrategy() {
    return (
        <div className="aberrusBarInsert">
            <p>
                모든 보스와 전투 중 공통적으로 탱커는 중첩 해제를 조심해야합니다.
                상대 탱커가 보스 도발 후 오프 탱커는 메인 탱커와 캐릭터를 부딪치면 디버프가 사라집니다.
                하지만 공격대 전체에 20초간 디버프를 부여하고 이는 중첩이 되므로 이 디버프가 사라질 때마다 인계하면 됩니다.
                공격대원은 탱커와 캐릭터를 접촉하지 않도록 조심하세요.
            </p>
            <p>
                넬드리스는 대상을 찍고 돌진하기 때문에 경로에서 피하고, 포효를 사용할 땐 멀리 떨어집니다.
            </p>
            <p>
                타드리온은 블러드를 사용해서 전투를 빠르게 끝내야 합니다.
                공격대원들이 불안정한 정수 디버프를 자주 해제하게 되면 쫄이 자주 많이 생성되어 딜 감소로 이어집니다.
                최대한 오래 10 ~ 15중첩까지 들고 있는 것이 좋습니다. 불안정한 분출을 사용하면 필드에 나와있는 쫄만큼 피해가 커지기 때문에 조심합니다.
                불안정한 분출이 끝난 것을 확인하면 공격대원은 모두 모여서 해제를 받고 쫄을 광을 쳐서 빠르게 잡아냅니다.
            </p>
            <p>
                리온투스는 노란색 구슬이 닿으면 보호막이 생기기 때문에 몸으로 막아 튕겨내 닿지 못하게 합니다.
                파열 디버프 대상은 지속적인 피해와 이동 속도 감소가 있으니 조심하세요.
                깊은 숨결은 처음에 서있는 위치에서 반대편으로 발사하고, 이는 두번 반복됩니다. 보고 피하면 됩니다.
            </p>

        </div>
    )
}
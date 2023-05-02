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
                <AberrusNav number="9"/>                
                <AberrusTitle
                name="비늘사령관 사카레스"
                number="9"/>
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
                next="다음 던전"
                name="v10.2 ..."
                number=""/>  
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
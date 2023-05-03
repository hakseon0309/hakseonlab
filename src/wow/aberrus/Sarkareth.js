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
            <AberrusInsertBox1
            img=""
            title="망각"
            desc="사카레스의 능력에 맞으면, 디버프가 중첩되고, 10번 중첩되면 공격력을 99% 감소시키고, 20초 안에 정신의 파편을 회복해야 하는 것으로 보입니다."
            />
            <AberrusInsertBox1
            img=""
            title="억압의 포효"
            desc="사카레스가 넉백 후 대규모 파열, 불타는 숨결, 빛나는 쇄도의 피해를 증가시킵니다. 해당 능력들에 적중당하면 억압의 포효가 제거되고 공격대 피해를 입습니다."
            />
            <AberrusInsertBox1
            img=""
            title="빛나는 쇄도"
            desc="모든 대상에게 8초동안 1초마다 피해를 입히고, 억압의 포효가 걸린 대상에게 적중하면 12초동안 기절하고 피해를 입습니다."
            />
            <AberrusInsertBox1
            img=""
            title="작열하는 폭탄"
            desc="각 폭탄은 제거하지 않으면 공격대 피해를 입히는 것으로 보입니다. 또한 바닥을 생성하는 것으로 보입니다."
            />
            <AberrusInsertBox1
            img=""
            title="대규모 파열"
            desc="환영이 생성되어 무작위 대상에게 6초 후 레이저를 발사합니다. 억압의 포효에 걸린 대상은 이동 속도가 감사하고 5초마다 피해를 입습니다."
            />
            <AberrusInsertBox1
            img=""
            title="불타는 숨결"
            desc="전방 부채꼴 브레스 입니다. 3번 반복되고 중첩됩니다. 12초동안 피해를 입는 디버프가 생기고 해제가 가능합니다. 억압의 포효에 걸린 대상에게 적중하면 추가로 해제되지 않는 디버프가 부여됩니다."
            />
            <AberrusInsertBox1
            img=""
            title="떠도는 불씨"
            desc="바닥이 생성되어 맞으면 피해와 함께 넉백시킵니다."
            />
            <AberrusInsertBox1
            img=""
            title="타오르는 발톱"
            desc="탱커에게 큰 물리 피해와 화염 피해를 주는 도트 디버프를 남깁니다. 중첩이 되고 효과가 만료되면 모든 대상에게 타오르는 발톱으로 받은 총 화염 피해의 15%에 해당하는 화염 피해를 입힙니다. 중첩을 높게 가져가면 안되는 것으로 보입니다."
            />
            <AberrusInsertBox0
            title="2단계 : "
            desc=""
            />
            <AberrusInsertBox1
            img=""
            title="타오르는 발톱"
            desc="탱커에게 큰 물리 피해와 화염 피해를 주는 도트 디버프를 남깁니다. 중첩이 되고 효과가 만료되면 모든 대상에게 타오르는 발톱으로 받은 총 화염 피해의 15%에 해당하는 화염 피해를 입힙니다. 중첩을 높게 가져가면 안되는 것으로 보입니다."
            />

        </div>
    )
}
function AberrusBarInsertStrategy() {
    return (
        <div className="aberrusBarInsert">
            
        </div>
    )
}
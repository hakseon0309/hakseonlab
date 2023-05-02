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
                <AberrusNav number="6"/>                
                <AberrusTitle
                name="청지기 지스카른"
                number="6"/>
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
                name="마그모락스"
                number="7"
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
            desc="1 대상 + 주기적으로 소환되는 쫄 3마리"
            />
            <AberrusInsertBox0
            title="피의 욕망 : "
            desc="전투 시작"
            />
            <AberrusInsertBox0
            title="유용함 : "
            desc="드루이드의 쇄도의 포효, 주술사의 바람 질주 토템, 기원사의 되감기, 죽음의 기사의 죽음의 손길, 흑마법의 악마의 관문"
            />
        </div>
    )
}
function AberrusBarInsertMechanic() {
    return (
        <div className="aberrusBarInsert">
            <AberrusInsertBox1
            img="spell_fire_sealoffire"
            title="용불꽃 덫"
            desc="근처에 몇개의 덫을 활성화하고 경기장에서 무작위로 하나를 활성화 합니다."
            />
            <AberrusInsertBox1
            img="achievement_dungeon_ulduarraid_irongolem_01"
            title="골렘 소환"
            desc="골렘 3마리가 소환되고, 덫 활성화를 시도합니다. 차단하거나 스턴, 밀치기 등의 군중제어를 사용해서 방해합니다. 골렘이 죽으면 클릭해서 덫 가까이에서 엑스트라 버튼으로 비활성화 해야합니다."
            />
            <AberrusInsertBox1
            img="spell_fire_ragnaros_molteninferno"
            title="전술적 파괴"
            desc="지스카른의 기력이 100이 되면 근처 용 조각상을 활성화합니다. 빠르게 이탈해야 합니다."
            />
            <AberrusInsertBox1
            img="inv_misc_bomb_02"
            title="파편 폭탄"
            desc="지스카른이 폭탄을 여러개 설치합니다. 30초 후 폭발하면 공격대에 전멸급 피해를 입힙니다. 오프 탱커나 무적클로 제거해야 합니다."
            />
            <AberrusInsertBox1
            img="ability_mage_fierypayback"
            title="불안정한 불씨"
            desc="여러 대상에게 주변 범위 바닥 디버프를 부여합니다. 나가서 혼자 맞고 오면 됩니다."
            />
            <AberrusInsertBox1
            img="ability_foundryraid_blastwave"
            title="폭발파"
            desc="모든 대상을 넉백시키고 도트 디버프를 부여합니다. 바닥이나 폭탄 쪽으로 밀려날 수 있기 때문에 주의해야 합니다."
            />
            <AberrusInsertBox1
            img="ability_warlock_backdraft"
            title="불타는 발톱"
            desc="탱커에게 20초 디버프를 부여합니다. 중첩이 높아지면 도발 인계합니다."
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
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
            title="치명적인 폭발"
            desc="마그모락스의 기력이 100이 되면 전멸한다고 보면 됩니다."
            />
            <AberrusInsertBox1
            img="spell_fire_firebolt02"
            title="녹은 침"
            desc="여러 대상에게 잠시 후 폭발하고 용암 웅덩이를 생성하는 디버프를 부여합니다. 밖에서 깔고 오면 됩니다."
            />
            <AberrusInsertBox1
            img="ability_rhyolith_lavapool"
            title="용암 웅덩이"
            desc="용암 웅덩이는 제한이 없이 점점 커집니다. 공격대원이 바닥에 올라가면 계속해서 디버프가 생기지만 크기가 줄어들면서 사라집니다. 최대 10중첩의 디버프만 쌓을 수 있고 이후 바닥의 크기를 줄일 수 없습니다."
            />
            <AberrusInsertBox1
            img="ability_ironmaidens_rapidfire"
            title="타오르는 짜증"
            desc="마그모락스가 용암 웅덩이 위에 있으면 기력이 5씩 상승합니다."
            />
            <AberrusInsertBox1
            img="inv_misc_head_dragon_01"
            title="점화 포효"
            desc="모든 대상에게 공격대 피해와 도트 디버프를 부여합니다. 계속해서 쌓이므로 힐에 한계가 있어 빠른 시간 안에 전투를 끝내야 합니다. 또한 추가로 이 능력을 사용하면 용암 웅덩이가 생성됩니다."
            />
            <AberrusInsertBox1
            img="spell_nature_earthquake"
            title="압도적인 발구르기"
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
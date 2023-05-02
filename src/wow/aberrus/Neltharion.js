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
                <AberrusNav number="8"/>                
                <AberrusTitle
                name="넬타리온의 메아리"
                number="8"/>
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
                name="비늘사령관 사카레스"
                number="9"
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
            desc="1 대상 + 3페이즈 다수 대상"
            />
            <AberrusInsertBox0
            title="피의 욕망 : "
            desc="전투 시작"
            />
            <AberrusInsertBox0
            title="유용함 : "
            desc="보호막형 생존기, 죽음의 기사의 대마법 지대, 주술사의 정신 고리 토템"
            />
        </div>
    )
}

function AberrusBarInsertMechanic() {
    return (
        <div className="aberrusBarInsert">
            <AberrusInsertBox1
            img="6bf_blackrock_nova"
            title="뒤틀린 대지"
            desc="넬타리온이 맵에 벽을 생성합니다. 벽 너머로 딜, 힐을 할 수 없습니다. 순간이동으로 넘어다닐 수 있습니다. 혹은 넬타리온의 능력으로인해 파괴되면 지나다닐 수 있습니다."
            />
            <AberrusInsertBox1
            img="inv_ragnaros_heart"
            title="화산 심장"
            desc="대상에게 원형 범위 디버프를 부여합니다. 걸리면 밖에 나가서 사라질 때까지 혼자 맞고 오면 됩니다."
            />
            <AberrusInsertBox1
            img="spell_nature_earthquake"
            title="메아리치는 균열"
            desc="넬타리온 기력이 100이 되면 큰 범위의 바닥을 생성합니다. 빠르게 이탈하면 되며, 이후 또 시전할 경우 메아리가 쳐 공격대가 입는 피해가 점점 증가합니다. 넬타리온의 생명력을 빠르게 70%까지 넘겨야 합니다."
            />
            <AberrusInsertBox1
            img="inv_cosmicvoid_missile"
            title="돌진하는 어둠"
            desc="3명의 대상이 파란색 화살표가 생기며, 넬타리온이 레이저를 발사해 밀쳐냅니다. 밀쳐지면서 벽을 파괴할 수 있으며, 경로에 있는 대상은 피해를 입고 3초동안 침묵됩니다. 벽이 파괴될 경우 공격대 도트 디버프가 생깁니다."
            />
            <AberrusInsertBox1
            img="inv_sword_138"
            title="재앙의 일격"
            desc="탱커를 밀쳐내고 디버프를 부여합니다. 1중첩 도발하면 됩니다. 이후 메아리치는 균열이 옵니다."
            />

            <AberrusInsertBox1
            img=""
            title="저 너머의 목소리"
            desc="쫄 3마리가 생성됩니다. 넬타리온에게 채널링 스킬을 시전하며, 이 동안 넬타리온의 생명력은 40% 밑으로 내려가지 않습니다. 각 쫄은 보호막이 있으며 보호막이 제거된 후에 딜이 가능합니다. 타락 디버프가 생긴 대상들이 보호막을 제거할 수 있습니다. 보호막이 제거되면 공격대 피해가 지속적으로 들어오므로 빠르게 제거해야 합니다."
            />
            <AberrusInsertBox1
            img="spell_shadow_charm"
            title="타락"
            desc="여러 대상들이 정신 지배를 당해 다른 대상에게 적대적으로 변합니다. 타락 디버프가 생기면 벽을 넘어다닐 수 있고 쫄의 보호막을 제거하는 것이 최우선입니다. 보호막이 제거되면 모든 대상들의 타락이 제거됩니다. 보호막이 30초 안에 제거되지 않으면 다른 새로운 대상에게 타락이 부여됩니다."
            />
            <AberrusInsertBox1
            img="inv_cosmicvoid_buff"
            title="암영 전멸"
            desc="넬타리온이 주기적으로 공격대 피해를 입힙니다. 시전마다 피해가 100% 증가합니다. 빠르게 2페이즈를 끝내야 합니다."
            />
            <AberrusInsertBox1
            img="spell_deathknight_spelldeflection"
            title="썬더 새도우"
            desc="탱커를 공격하고 영혼을 날려버립니다. 남아있는 육체를 계속 공격하며, 영혼이 된 탱커가 육체와 결합하면 그동안 잃은 생명력에 해당하는 암흑 피해를 입습니다. 생존기를 키고 맞은 다음, 1중첩 인계하면 됩니다."
            />

            <AberrusInsertBox1
            img="inv_cosmicvoid_nova"
            title="썬더 현실"
            desc="다수의 포탈이 생성되고 쫄이 등장합니다. 포탈 안에 있으면 피해가 들어오고 공격력이 99% 감소합니다. 쫄은 무작위 대상 시선 고정 후 점점 강해집니다."
            />
            <AberrusInsertBox1
            img="inv_misc_head_dragon_black_nightmare"
            title="칠흑의 파괴"
            desc="시전하면 포탈 위로 올라가서 받는 데미지 99% 감소 버프를 획득해야 합니다. 이후 포탈은 사라집니다. 타임어택 패턴입니다."
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
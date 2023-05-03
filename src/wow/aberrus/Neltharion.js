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
            desc="추가 힐러가 필요할 가능성이 있음"
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
            title="암영 말살"
            desc="넬타리온이 주기적으로 공격대 피해를 입힙니다. 시전마다 피해가 100% 증가합니다. 빠르게 2페이즈를 끝내야 합니다."
            />
            <AberrusInsertBox1
            img="spell_deathknight_spelldeflection"
            title="어둠 분리"
            desc="탱커를 공격하고 영혼을 날려버립니다. 남아있는 육체를 계속 공격하며, 영혼이 된 탱커가 육체와 결합하면 그동안 잃은 생명력에 해당하는 암흑 피해를 입습니다. 생존기를 키고 맞은 다음, 1중첩 인계하면 됩니다."
            />

            <AberrusInsertBox1
            img="inv_cosmicvoid_nova"
            title="분리된 현실"
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
            <img src="https://www.method.gg/images/guides/uploads/echo-of-neltharion-phase-1-positioning.jpg" alt=""/>
            <p>
                전투가 시작되면 맵 중앙에 자리를 잡습니다. 공격대원은 화산 심장 디버프 대상자와, 돌진하는 어둠 대상자가 빠질 위치를 미리 정합니다.
                또한 탱커가 날아갈 위치는 위 세 자리중 한 곳으로 날아가서 바닥을 깔고 옵니다.
                탱커는 넉백되고나서 바로 도발하지 않습니다. 날아가면 넬타리온을 바깥쪽으로 끌고 가서 바닥을 까는 것까지 진행하고, 바닥을 깔면 도발합니다.
            </p>
            <p>
                메아리치는 균열 바닥은 점점 큰 공격대 피해를 입기 때문에 딜 요구량이 있는 편입니다.
                1 페이즈는 이렇게 반복하며 보스 생명력 70%가 되면 2 페이즈로 넘어갑니다.
            </p>
            <img src="https://www.method.gg/images/guides/uploads/echo-of-neltharion-phase-2-positioning.jpg" alt=""/>
            <p>
                2 페이즈가 시작되면 중앙 왼쪽에서 자리를 잡습니다. 타락 디버프 대상자가 되면 빠르게 진형에서 이탈해 아군에게 피해를 입지 않도록 합니다.
            </p>
            <p>
                2 페이즈에서 탱커에게 사용하는 기술은 생존기를 켜고 맞은 다음 빠르게 원 위치로 돌아와야 합니다.
            </p>
            <p>
                타락 디버프 대상자들은 쫄 3마리의 보호막을 유일하게 제거할 수 있습니다. 제거하고나면 이후 공격대원이 딜이 가능해집니다. 또한 공격대 피해가 들어오기 시작합니다.
                쫄들이 존재하는 한 넬타리온의 생명력은 40% 이하로 내려가지 않습니다. 2 페이즈의 목표는 쫄 3마리 제거와 동시에 넬타리온의 생명력이 40%가 되는 것입니다.
            </p>
            <p>
                타락 디버프는 30초간 유지되며 쫄의 보호막이 제거될 때마다 디버프도 종료됩니다. 30초안에 보호막을 제거하지 못했다면 다른 대상자들에게 타락 디버프가 넘어갑니다.
            </p>
            <p>
                돌진하는 어둠은 여전히 사용합니다. 다음 쫄 위치로 넘어갈 수 있도록 벽을 파괴하는데 이용합니다.
            </p>
            <div className="aberrusBarInsert">
                <AberrusInsertBox0
                title="3 단계 : "
                desc="넬타리온의 생명력 40% ~ 0%"
                />
            </div>
            <p>
                넬타리온의 생명력이 40%가 되면 3단계가 시작됩니다.
                블러드를 사용하고, 이젠 넬타리온의 능력으로 넉백당할 때, 포탈도 제거되므로 조심해야합니다.
                포탈은 전투 시간을 확보하는데 중요합니다.
            </p>
            <p>
                넬타리온이 포탈을 만들면서 벽을 파괴하고, 포탈은 쫄을 생성합니다. 포탈이 생성될 때 바닥 위에 있으면 피해를 입습니다.
                쫄은 무작위 대상에게 시선고정 후 점점 강해지므로 빠르게 광을 쳐 제거해야합니다.
                포탈이 닫힐 때까지 쫄은 계속해서 나옵니다.
            </p>
            <p>
                포탈 위에 있으면 1.5초마다 피해를 입고 공격력이 99%만큼 감소하지만, 넬타리온이 전멸기인 칠흑의 파괴를 사용할 때 위에 서 있으면 받는 데미지가 99% 감소합니다.
                그리고 포탈은 사라집니다. 따라서 포탈이 모두 사라지기 전에 전투를 끝내야 합니다.
            </p>
            <p>
                포탈 위에 1명이 있어도, 30명이 있어도 똑같이 피해 감소 효과를 받고, 사라지기 때문에 적절한 포탈 사용으로 쫄 개체 수와 전투 시간을 확보하는 것이 중요합니다.
            </p>

        </div>
    )
}
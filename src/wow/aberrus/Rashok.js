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
    AberrusInsertBox2,
    AberrusInsertBoxModulerModel,
    AberrusInsertBoxModulerAbility,
} from "./AberrusLayout"

export default function Rashok() {
    return (        
        <div className="content">
            <TitleBar title="월드 오브 워크래프트 10.1 - 어둠의 도가니 아베루스"/>
            <div className="aberrus">                
                <AberrusNav number="5"/>                
                <AberrusTitle
                name="장로 라소크"
                number="5"/>
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
                name="청지기 지스카른"
                number="6"
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
            <AberrusInsertBox0
            title="유용함 : "
            desc="드루이드의 쇄도의 포효, 주술사의 바람 질주 토템, 보호막형 생존기, 죽음의 기사의 대마법 지대, 주술사의 정신 고리 토템, 악마사냥꾼의 어둠"
            />
        </div>
    )
}

function AberrusBarInsertMechanic() {
    return (
        <div className="aberrusBarInsert">
            <AberrusInsertBox1
            img="warrior_talent_icon_furyintheblood"
            title="고대의 분노"
            desc="라소크의 기력이 100이 되면 공격대가 전멸합니다."
            />
            <AberrusInsertBox1
            img="spell_fire_fire"
            title="녹아내린 분노"
            desc="용암 웅덩이에서 15초마다 무작위 방향으로 분출됩니다."
            />
            <AberrusInsertBox1
            img="ability_shaman_lavalash"
            title="이글거리는 격돌"
            desc="대상자에게 잠시 후 점프 공격해 용암 웅덩이를 생성합니다. 밖에 깔면서 다른 용암 웅덩이와 겹치지 않게 합니다."
            />
            <AberrusInsertBox1
            img="inv_shadowflame_groundstate"
            title="파멸의 불꽃"
            desc="각 한명씩 들어가서 막아야 하는 바닥이 생깁니다. 못 막은 바닥마다 공격대 피해를 입습니다."
            />
            <AberrusInsertBox1
            img="inv_shadowflames_wave"
            title="암흑용암 작렬"
            desc="광범위 전방 부채꼴 공격입니다. 피하세요."
            />
            <AberrusInsertBox1
            img="inv_shadowflame_missile"
            title="충만한 강타"
            desc="모든 공격대원은 바닥 안에서 맞아야 합니다. 바닥 밖에 있는 공격대원은 큰 피해를 입습니다."
            />
            <AberrusInsertBox1
            img="inv_polearm_2h_dragonraid_d_02"
            title="자룬의 분노"
            desc="라소크가 2연속 공격을 합니다. 한번씩 맞을 수 있도록 탱커끼리 도발합니다."
            />
            <AberrusInsertBox1
            img="spell_shadow_lifedrain02_purple"
            title="장로의 도관"
            desc="라소크를 맵 중앙에 위치시키면, 기력 0이 될 때까지 1.5초마다 공격대 피해를 줍니다. 동시에 바닥을 피하면서 뭉쳐서 힐을 받아야 합니다."
            />
            <AberrusInsertBox1
            img="spell_winston_rage"
            title="이글거리는 분노"
            desc="사이펀 에너지가 종료되면 공격대 피해와 넉백을 입습니다."
            />
        </div>
    )
}
function AberrusBarInsertStrategy() {
    return (
        <div className="aberrusBarInsert">
            <img src="https://www.method.gg/images/guides/uploads/rashok-opening-position.jpg" alt=""/>
            <p>
                보스를 맵 가장자리에서 탱킹합니다. 이글거리는 격돌의 대상이 되면 벽쪽에 가서 바닥을 깔고 돌아옵니다. 이 바닥은 슬라임 구체를 바깥쪽으로 발사하니 피하세요.
                이글거리는 격돌의 대상자가 바닥을 같은 곳에 겹쳐 깔게 되면 전멸합니다.
            </p>
            <p>
                파멸의 불꽃을 시전하면 모든 바닥을 최소 한명씩은 막아야 합니다.
            </p>
            <p>
                암흑용암 작렬은 광범위 전방 부채꼴 브레스 공격입니다. 빠르게 이탈해서 피합니다.
            </p>
            <p>
                충만한 강타를 시전하면 모든 공격대원은 안으로 들어와서 맞아야 합니다.
            </p>
            <p>
                전투는 항상 같은 패턴입니다.
                이글거리는 격돌을 겹치지 않게 밖에다 깔면서, 바닥을 막고, 바닥을 같이 맞고 반복입니다.
                기력이 100이 되면 전멸하기 때문에 90정도에 기력을 소모시켜야 합니다.
            </p>
            <p>
                보스를 맵 중앙으로 끌고오면 갖고 있는 기력을 소모하면서 1.5초마다 공격대 피해를 줍니다. 그동안 뭉쳐서 힐을 받고 바닥을 지속적으로 피하면 됩니다.
            </p>
            <p>
                단순한 패턴의 기어체크형 보스입니다.
            </p>
        </div>
    )
}
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
            title="용숨결 덫"
            desc="근처에 몇개의 덫을 활성화하고 경기장에서 무작위로 하나를 활성화 합니다."
            />
            <AberrusInsertBox1
            img="achievement_dungeon_ulduarraid_irongolem_01"
            title="골렘 되살리기"
            desc="골렘 3마리가 소환되고, 덫 활성화를 시도합니다. 차단하거나 스턴, 밀치기 등의 군중제어를 사용해서 방해합니다. 골렘이 죽으면 클릭해서 덫 가까이에서 엑스트라 버튼으로 비활성화 해야합니다."
            />
            <AberrusInsertBox1
            img="spell_fire_ragnaros_molteninferno"
            title="전술적 파괴"
            desc="지스카른의 기력이 100이 되면 근처 용 조각상을 활성화합니다. 빠르게 이탈해야 합니다."
            />
            <AberrusInsertBox1
            img="inv_misc_bomb_02"
            title="유산탄"
            desc="지스카른이 폭탄을 여러개 설치합니다. 30초 후 폭발하면 공격대에 전멸급 피해를 입힙니다. 오프 탱커나 무적클로 제거해야 합니다."
            />
            <AberrusInsertBox1
            img="ability_mage_fierypayback"
            title="불안정한 불씨"
            desc="여러 대상에게 주변 범위 바닥 디버프를 부여합니다. 나가서 혼자 맞고 오면 됩니다."
            />
            <AberrusInsertBox1
            img="ability_foundryraid_blastwave"
            title="화염 폭풍"
            desc="모든 대상을 넉백시키고 도트 디버프를 부여합니다. 바닥이나 폭탄 쪽으로 밀려날 수 있기 때문에 주의해야 합니다."
            />
            <AberrusInsertBox1
            img="ability_warlock_backdraft"
            title="이글거리는 발톱"
            desc="탱커에게 20초 디버프를 부여합니다. 중첩이 높아지면 도발 인계합니다."
            />

        </div>
    )
}
function AberrusBarInsertStrategy() {
    return (
        <div className="aberrusBarInsert">
            <img src="https://www.method.gg/images/guides/uploads/zskarn-opening-position.jpg" alt=""/>
            <p>
                탱커는 보스를 용 조각상 중 한 곳으로 이동시킵니다. 보스의 기력이 100이 되면 가까운 용 조각상 하나에서 불이 뿜어져나오므로 이탈해야합니다.
            </p>
            <p>
                보스가 폭탄을 4개 설치하는데, 30초 후에 공격대 피해를 주므로 부딪쳐서 제거해야합니다. 오프 탱커와 무적기가 있는 클래스만이 제거할 수 있습니다.
                제거 후에도 도트 디버프가 남기 때문에 조심해야합니다.
                넉백시 뒤에 폭탄에 부딪치지 않도록 조심하세요.
                물리 피해기 때문에 그림자 망토는 유효하지 않습니다.
            </p>
            <p>
                화염폭풍을 시전하면 모두 넉백당하고 도트 디버프가 생깁니다.
                공격대 생존기를 활용하기 좋은 타이밍 입니다.
            </p>
            <p>
                맵에 규칙적으로 함정이 설치되어 있는데, 보스가 주기적으로 3 ~ 4개를 활성화시킵니다.
                활성화되면 용암 바닥이 생성됩니다.
            </p>
            <p>
                주기적으로 3마리의 용숨결 골렘이 소환됩니다. 어그로가 없으며 비활성화된 용숨결 덫을 활성화시키러 이동합니다.
                생명력이 많은 편이기 때문에 빠르게 점사해서 제거해야하며, 메즈기를 활용할 수 있습니다.
                골렘이 죽으면 클릭해서 활성화된 덫 근처에서 엑스트라 버튼으로 덫을 비활성화 시킬 수 있습니다.
            </p>
            <p>
                주기적으로 3마리의 용숨결 골렘이 소환됩니다. 어그로가 없으며 비활성화된 용숨결 덫을 활성화시키러 이동합니다.
                생명력이 많은 편이기 때문에 빠르게 점사해서 제거해야하며, 메즈기를 활용할 수 있습니다.
                골렘이 죽으면 클릭해서 활성화된 덫 근처에서 엑스트라 버튼으로 덫을 비활성화 시킬 수 있습니다.
            </p>
            <p>
                불안정한 불씨에 걸리면 나가서 10초동안 혼자 맞으면 됩니다.
            </p>
            <p>
                전투는 계속 이런 패턴으로 진행됩니다. 보스가 계속 덫을 활성화하고 기력 100이 되면 용 조각상에서 불을 뿜게 합니다.
                골렘이 나타나면 덫 활성화를 시도하기 때문에 막고, 잡아내어 덫을 비활성화해서 공간을 확보합니다.
                폭탄은 오프탱커와 무적기가 있는 클래스들이 처리합니다.
                넉백당하며 조각상 브레스나, 활성화된 덫, 폭탄에 부딪치지 않도록 조심합니다.
            </p>


        </div>
    )
}
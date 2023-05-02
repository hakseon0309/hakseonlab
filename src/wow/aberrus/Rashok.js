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
            title="시어링 슬램"
            desc="대상자에게 잠시 후 점프 공격해 용암 웅덩이를 생성합니다. 밖에 깔면서 다른 용암 웅덩이와 겹치지 않게 합니다."
            />
            <AberrusInsertBox1
            img="inv_shadowflame_groundstate"
            title="둠 플레임"
            desc="각 한명씩 들어가서 막아야 하는 바닥이 생깁니다. 못 막은 바닥마다 공격대 피해를 입습니다."
            />
            <AberrusInsertBox1
            img="inv_shadowflames_wave"
            title="암흑불길 블래스트"
            desc="광범위 전방 부채꼴 공격입니다. 피하세요."
            />
            <AberrusInsertBox1
            img="inv_shadowflame_missile"
            title="차지 스매시"
            desc="모든 공격대원은 바닥 안에서 맞아야 합니다. 바닥 밖에 있는 공격대원은 큰 피해를 입습니다."
            />
            <AberrusInsertBox1
            img="inv_polearm_2h_dragonraid_d_02"
            title="화산 콤보"
            desc="라소크가 2연속 공격을 합니다. 한번씩 맞을 수 있도록 탱커끼리 도발합니다."
            />
            <AberrusInsertBox1
            img="spell_shadow_lifedrain02_purple"
            title="사이펀 에너지"
            desc="라소크를 맵 중앙에 위치시키면, 기력 0이 될 때까지 1.5초마다 공격대 피해를 줍니다. 동시에 바닥을 피하면서 뭉쳐서 힐을 받아야 합니다."
            />
            <AberrusInsertBox1
            img="spell_winston_rage"
            title="불굴의 분노"
            desc="사이펀 에너지가 종료되면 공격대 피해와 넉백을 입습니다."
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
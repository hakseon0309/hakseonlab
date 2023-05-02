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

export default function Zaqali() {
    return (        
        <div className="content">
            <TitleBar title="월드 오브 워크래프트 10.1 - 어둠의 도가니 아베루스"/>
            <div className="aberrus">                
                <AberrusNav number="4"/>                
                <AberrusTitle
                name="자칼리의 습격"
                number="4"/>
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
                name="장로 라소크"
                number="5"
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
            desc="지속적인 다수 대상, 2페이즈는 단일 전투"
            />
            <AberrusInsertBox0
            title="피의 욕망 : "
            desc="전투 시작 혹은 2페이즈"
            />
        </div>
    )
}

function AberrusBarInsertMechanic() {
    return (
        <div className="aberrusBarInsert">
            <AberrusInsertBox1
            img=""
            title="1단계"
            dsec=""
            />
            <div className="aberrusBarInsertGridDouble">
                <AberrusInsertBox2
                img="spell_mage_supernova_nightborne"
                title="방벽 반발 작용"
                desc="쫄이 맵 중앙의 문에 도착하면 전멸급의 공격대 피해를 받습니다."
                />
                <AberrusInsertBox2
                img="ability_rogue_cannonballbarrage"
                title="석궁 발사"
                desc="전투 내내 12미터 연한 갈색 소용돌이 바닥이 생깁니다. 이동해서 피하세요."
                />
                <div className="aberrusInsertModuler">
                    <AberrusInsertBoxModulerModel
                    model="https://www.method.gg/images/raidrace/bosses/aberrus-the-shadowed-crucible/assaultofthezaqali.png"
                    name="전쟁군주 카그니"
                    />
                    <AberrusInsertBoxModulerAbility
                    img="ability_heroicleap"
                    name="파괴의 도약"
                    desc="카그니의 기력이 가득 차면 반대쪽 단상으로 이동합니다. 착지하는 곳에 12미터 범위 피해와 넉백이 있으니 조심하세요."
                    />
                    <AberrusInsertBoxModulerAbility
                    img="inv_10_blacksmithing_consumable_repairhammer_color1"
                    name="무거운 곤봉"
                    desc="탱커 쪽으로 전방 원뿔 공격을 합니다. 탱커는 45초동안 받는 피해가 15% 증가합니다."
                    />                
                </div>
                <div className="aberrusInsertModuler">
                    <AberrusInsertBoxModulerModel
                    model="https://www.method.gg/images/raidrace/bosses/aberrus-the-shadowed-crucible/assaultofthezaqali.png"
                    name="용암 비술사"
                    />
                    <AberrusInsertBoxModulerAbility
                    img="inv_misc_orb_05"
                    name="용암 보호막"
                    desc="계속해서 점점 강해지는 공격대 피해를 주므로, 빠르게 피해를 주어 용암 보호막을 벗겨내야 합니다."
                    />
                    <AberrusInsertBoxModulerAbility
                    img="ability_ironmaidens_rapidfire"
                    name="용암 분출"
                    desc="15초동안 3초마다 피해를 받는 디버프를 받습니다."
                    />                
                    <AberrusInsertBoxModulerAbility
                    img="spell_shaman_lavaburst"
                    name="용암 화살"
                    desc="비술사의 용암 보호막을 제거하고 나면 시전하는 스킬입니다. 차단해야 합니다."
                    />                
                </div>
                <div className="aberrusInsertModuler">
                    <AberrusInsertBoxModulerModel
                    model="https://www.method.gg/images/raidrace/bosses/aberrus-the-shadowed-crucible/assaultofthezaqali.png"
                    name="화염결속 수렵꾼"
                    />
                    <AberrusInsertBoxModulerAbility
                    img="inv_spear_03"
                    name="이글거리는 창"
                    desc="무작위 대상에게 창을 던져 8미터 범위 내 피해를 줍니다."
                    />           
                </div>
                <div className="aberrusInsertModuler">
                    <AberrusInsertBoxModulerModel
                    model="https://www.method.gg/images/raidrace/bosses/aberrus-the-shadowed-crucible/assaultofthezaqali.png"
                    name="흑요석 경비병"
                    />
                    <AberrusInsertBoxModulerAbility
                    img="ability_warlock_fireandbrimstone"
                    name="작열하는 포효"
                    desc="25미터 내 대상에게 1.5초동안 0.5초마다 화염 피해를 줍니다."
                    />           
                    <AberrusInsertBoxModulerAbility
                    img="ability_paladin_barrieroffaith"
                    name="화산 보호막"
                    desc="흑요석 경비병이 무작위 대상에게 용암 광선을 발사해 경로 모든 대상에게 피해를 줍니다."
                    />           
                </div>
                <div className="aberrusInsertModuler">
                    <AberrusInsertBoxModulerModel
                    model="https://www.method.gg/images/raidrace/bosses/aberrus-the-shadowed-crucible/assaultofthezaqali.png"
                    name="자칼리 벽등반자"
                    />
                    <AberrusInsertBoxModulerAbility
                    desc="자칼리 벽등반자는 사용하는 스킬은 없고 등장 이후 문을 향해 달려갑니다."
                    />               
                </div>
            </div>
            <AberrusInsertBox1
            img=""
            title="2단계"
            dsec=""
            />
            <AberrusInsertBox1
            img="spell_nature_earthquake"
            title="재앙적인 격돌"
            desc="기력이 100이 되면 문을 향해 충격파를 시전합니다. 맞으면 활력 약화 디버프가 생기는데, 다음 재앙적인 격돌로 받는 피해가 200% 증가합니다."
            />
            <AberrusInsertBox1
            img="spell_nature_unleashedrage"
            title="필사적인 제물"
            desc="카그니가 생명력의 100%를 회복합니다."
            />
            <AberrusInsertBox1
            img="inv_10_blacksmithing_consumable_repairhammer_color1"
            title="무거운 곤봉"
            desc="탱커 쪽으로 전방 원뿔 공격을 합니다. 탱커는 45초동안 받는 피해가 15% 증가합니다."
            />
        </div>
    )
}
function AberrusBarInsertStrategy() {
    return (
        <div className="aberrusBarInsert">
            
            <div className="strategy">
                <p>시작 전, 공격대를 각 플랫폼으로 이동할 두 그룹으로 나눕니다.</p>
                <p>탱커와 힐러, 딜러를 절반씩 배치하면 됩니다.</p>
                <p>카그니가 날아가고 나면, 각 플랫폼으로 이동합니다.</p>
                <p>지속해서 광을 치는 전투가 진행됩니다.</p>
                <p>중간중간 대처해야하는 스킬들에 대해 처리를 하면 됩니다.</p>
                <p>비술사가 나타나면 보호막을 깨고, 차단을 보며, 해제를 합니다.</p>

                <p>돌이 생성되면 담당 인원들이 획득해서 맵 가장자리에서 벽등반자를 제거합니다.</p>
                <p>카그니는 기력이 100 될때마다 반대편으로 이동합니다. 반대편에 착지할 때 범위 공격과 바깥쪽으로 날아가는 투사체들을 피하면 됩니다.</p>
                <p>
                    탱커는 빠르게 모든 쫄들의 어그로를 획득합니다.
                </p>
                <p>
                    카그니의 생명력이 25%가 되면 문이 위치한 방 중앙으로 이동하며 최대 생명력의 10%를 회복하고 지속해서 공격대 피해를 주기 시작합니다.
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
import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./Aberrus.css"

const currentBoss = {
    bossName        : "융합체의 방",
    bossImg         : "https://www.method.gg/images/raidrace/bosses/aberrus-the-shadowed-crucible/theamalgamationchamber.png",
}
const publicData = {
    dungeonName     : "어둠의 도가니, 아베루스",
    tankerIcon      : "https://www.method.gg/images/icons/role/tank-icon.png",
    healerIcon      : "https://www.method.gg/images/icons/role/healer-icon.png",
    dealerIcon      : "https://www.method.gg/images/icons/role/dps-icon.png",
}

export default function Kazzara() {
    return (        
        <div className="content">
            <div className="title">[10.1] 어둠의 도가니, 아베루스</div>
            <div className="aberrus">
                
                <AberrusNav/>
                
                <AberrusBossTitle/>
                
                <AberrusDifficulty/>
                
                <TextBar name="공략 개요"/>
                <TextBarInsertIntro/>
                
                <TextBar name="사전 준비"/>
                <TextBarInsertSetup/>
                
                <TextBar name="던전 도감"/>
                <TextBarInsertMechanic/>
                
                <TextBar name="공략 진행"/>
                <TextBarInsertStrategy/>
                
                <NextBoss/>
                
            </div>
        </div>
    )
}
function AberrusNav() {
    const bossIconList = [
        "https://www.method.gg/images/guides/bosses/18-03-23-10-kazzara-the-hellforged.jpg",
        "https://www.method.gg/images/guides/bosses/20-03-23-0-the-amalgamation-chamber.jpg",
        "https://www.method.gg/images/guides/bosses/18-03-23-9-the-forgotten-experiments.jpg",
        "https://www.method.gg/images/guides/bosses/18-03-23-7-assault-of-the-zaqali.jpg",
        "https://www.method.gg/images/guides/bosses/18-03-23-8-rashok-the-elder.jpg",
        "https://www.method.gg/images/guides/bosses/18-03-23-2-the-vigilant-steward-zskarn.jpg",
        "https://www.method.gg/images/guides/bosses/18-03-23-1-magmorax.jpg",
        "https://www.method.gg/images/guides/bosses/18-03-23-7-echo-of-neltharion.jpg",
        "https://www.method.gg/images/guides/bosses/18-03-23-6-Scalecommander%20Sarkareth.jpg",
    ]
    return (
        <div className="aberrusNav">
            <Link to="/"><img className="bossIcon" src="img/pepe.png" alt="" style={{opacity: 0.3}}/></Link>
            <Link to="/kazzara"><img className="bossIcon" src={bossIconList[0]} alt="" style={{opacity: 0.3}}/></Link>
            <Link to="/molgoth"><img className="bossIcon" src={bossIconList[1]} alt="" style={{opacity: 1}}/></Link>
            <Link to="/experimentation"><img className="bossIcon" src={bossIconList[2]} alt="" style={{opacity: 0.3}}/></Link>
            <Link to="/zaqali"><img className="bossIcon" src={bossIconList[3]} alt="" style={{opacity: 0.3}}/></Link>
            <Link to="/rashok"><img className="bossIcon" src={bossIconList[4]} alt="" style={{opacity: 0.3}}/></Link>
            <Link to="/zskarn"><img className="bossIcon" src={bossIconList[5]} alt="" style={{opacity: 0.3}}/></Link>
            <Link to="/magmorax"><img className="bossIcon" src={bossIconList[6]} alt="" style={{opacity: 0.3}}/></Link>
            <Link to="/neltharion"><img className="bossIcon" src={bossIconList[7]} alt="" style={{opacity: 0.3}}/></Link>
            <Link to="/sarkareth"><img className="bossIcon" src={bossIconList[8]} alt="" style={{opacity: 0.3}}/></Link>
        </div>
    )
}
function AberrusBossTitle() {
    return (
        <div className="aberrusBossTitle">
            <div className="aberrusBossTitleText">
                <div className="dungeon">{publicData.dungeonName}</div>
                <div className="boss">{currentBoss.bossName}</div>
            </div>
            <div className='img'><img src={currentBoss.bossImg} alt=""/></div>
        </div>
    )
}
function AberrusDifficulty() {
    return (
        <div className="aberrusDifficulty">
            <div className="aberrusDifficultyText">영웅</div>
            <div className="aberrusDifficultyText">신화</div>
        </div>
    )
}
function TextBar(props) {
    return (
        <div className="textBar">{props.name}</div>
    )
}
function TextBarInsertIntro() {
    return (
        <div className="textBarInsert">
            <div className="textBarInsertInsert">
                <p>전투 대상: 2타겟, 50% 이후 단일</p>
                <p>블러드: 2단계</p>
                <p>1단계에서 두 보스가 25m 이내로 위치하지 않도록 합니다.</p>
            </div>
        </div>
    )
}
function TextBarInsertSetup() {
    return (
        <div className="textBarInsert">

            <div className="textBarInsertInsert">
                <div className="squad d-flex ac-c">
                    <img className="img-30 mr-1" src={publicData.tankerIcon} alt=""/>
                    <div className="count mr-1">2</div>
                    <img className="img-30 mr-1" src={publicData.healerIcon} alt=""/>
                    <div className="count mr-1">4-5 / 6-7</div>
                    <img className="img-30 mr-1" src={publicData.dealerIcon} alt=""/>
                    <div className="count">13+ / 21+</div>
                </div>
            </div>

            {/* <div className="textBarInsertInsert">
                <p className="mb-0">우왕</p>
            </div> */}

        </div>
    )
}
function TextBarInsertMechanic() {
    return (
        <div className="textBarInsert">
            <div className="textBarInsertPhase">1단계: 그림자의 정수</div>
            <div className="textBarInsertMechanic mb-2">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathsembrace.jpg" alt=""/>
                    <div><b className="txt-littleBig">타락의 어둠</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>50m 내 모든 대상에게 5초마다 타락의 어둠을 부여합니다.</p>
                    <p>20초동안 5초마다 피해를 입고, 최대 생명력이 1% 감소합니다.</p>
                    <p className="mb-0">이 효과는 다른 기술에 피해를 입어도 중첩됩니다.</p>
                </div>
            </div>

            <div className="textBarInsertMechanic mb-2">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/inv_icon_shadowcouncilorb_purple.jpg" alt=""/>
                    <div><b className="txt-littleBig">응결되는 공허</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>무작위 대상 위치에 50m 내 모든 대상에게 큰 피해를 입히는 폭탄을 생성합니다.</p>
                    <p className="mb-0">멀리 떨어질 수록 받는 피해가 감소합니다.</p>
                </div>
            </div>

            <div className="textBarInsertMechanic mb-2">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowfury.jpg" alt=""/>
                    <div><b  className="txt-littleBig">암영의 폭발</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>무작위 여러 대상에게 6초 후 8m 바닥을 생성하는 디버프를 부여합니다.</p>
                    <p>공격대 위치 바깥, 벽쪽에 유도하고 복귀합니다.</p>
                </div>
            </div>

            <div className="textBarInsertMechanic mb-2">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/spell_priest_shadoworbs.jpg" alt=""/>
                    <div><b className="txt-littleBig">어둠의 합일</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>다방면에서 그림자의 정수 쪽으로 향하는 구체를 생성합니다.</p>
                    <p className="mb-0">이동해서 회피합니다.</p>
                </div>
            </div>

            <div className="textBarInsertMechanic mb-2">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/ability_ironmaidens_convulsiveshadows.jpg" alt=""/>
                    <div><b className="txt-littleBig">어둠의 쐐기</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>탱커에게 단일 피해를 입힙니다.</p>
                    <p className="mb-0">이 효과는 중첩됩니다, 면역 기술로 중첩을 초기화할 수 있습니다.</p>
                </div>
            </div>
            <div className="textBarInsertPhase">1단계: 영원한 불길</div>
            <div className="textBarInsertMechanic mb-2">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/ability_warlock_fireandbrimstone.jpg" alt=""/>
                    <div><b className="txt-littleBig">타오르는 열기</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>50m 내 모든 대상에게 20초동안 5초마다 피해를 입는 디버프를 부여합니다.</p>
                    <p className="mb-0">이 효과는 다른 기술에 피해를 입어도 중첩됩니다.</p>
                </div>
            </div>
            
            <div className="textBarInsertMechanic mb-2">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/spell_mage_meteor.jpg" alt=""/>
                    <div><b className="txt-littleBig">불타는 유성</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>여러 대상이 같이 맞아야하는 대형 바닥입니다.</p>
                    <p className="mb-0">면역 기술로 혼자 맞을 수 있습니다.</p>
                </div>
            </div>
            
            <div className="textBarInsertMechanic mb-2">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/ability_rhyolith_volcano.jpg" alt=""/>
                    <div><b className="txt-littleBig">타오르는 폭발</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>여러 바닥이 생성되고 모두 막아야 합니다.</p>
                    <p className="mb-0">막지 못한 바닥당 공격대 피해를 입습니다.</p>
                </div>
            </div>
            
            <div className="textBarInsertMechanic mb-2">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/spell_shaman_lavasurge.jpg" alt=""/>
                    <div><b className="txt-littleBig">소용돌이치는 화염</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>무작위 대상에게 여러 갈래로 뻗어나가는 소용돌이를 발사합니다.</p>
                    <p className="mb-0">이동해서 회피합니다.</p>
                </div>
            </div>
            
            <div className="textBarInsertMechanic">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/spell_fire_soulburn.jpg" alt=""/>
                    <div><b className="txt-littleBig">화염 베기</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>탱커에게 단일 피해를 입힙니다.</p>
                    <p className="mb-0">이 효과는 중첩되며, 면역 기술로 중첩을 초기화할 수 있습니다.</p>
                </div>
            </div>
            <div className="textBarInsertPhase">2단계: 완벽한 파괴</div>
            <div className="textBarInsertMechanic">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/inv_shadowflame_debuff.jpg" alt=""/>
                    <div><b className="txt-littleBig">암흑불길 오염</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>모든 플레이어에게 10초마다 중첩되는 디버프를 부여합니다.</p>
                    <p>무한히 지속되며, 2초마다 피해를 입히고 최대 생명력을 1% 감소시킵니다.</p>
                    <p className="mb-0">이 효과는 중첩됩니다.</p>
                </div>
            </div>
            
            <div className="textBarInsertMechanic">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/inv_shadowflame_nova.jpg" alt=""/>
                    <div><b className="txt-littleBig">암울한 겁화</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>5명 이상의 대상이 나눠 맞아야하는 대형 바닥을 생성합니다.</p>
                    <p className="mb-0">이후 멀리 떨어져야하는 폭발이 발생합니다.</p>
                </div>
            </div>
            
            <div className="textBarInsertMechanic">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/inv_shadowflame_groundstate.jpg" alt=""/>
                    <div><b className="txt-littleBig">맹렬한 황혼</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>무작위 여러 대상에게 6초 후 분출되는 디버프를 부여합니다.</p>
                    <p>분출되면 대상 위치에 바닥을 생성하고 바깥 쪽으로 소용돌이를 발사합니다.</p>
                    <p className="mb-0">진형 밖에서 바닥을 깔고 복귀합니다.</p>
                </div>
            </div>
            
            <div className="textBarInsertMechanic">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/inv_chaos_orb.jpg" alt=""/>
                    <div><b className="txt-littleBig">수렴 분출</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>막아야 하는 여러 바닥이 생성됩니다, 막지 못하면 공격대 피해를 받습니다.</p>
                    <p className="mb-0">이후 바깥 쪽에서 바닥을 향해 소용돌이가 생성되므로 이동해서 회피합니다.</p>
                </div>
            </div>
            
            <div className="textBarInsertMechanic">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/inv_shadowflame_buff.jpg" alt=""/>
                    <div><b className="txt-littleBig">쇠약의 약점</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>탱커에게 큰 물리 피해를 입히고, 암흑불길 폭발로 받는 피해를 200% 증가시킵니다.</p>
                    <p className="mb-0">탱커는 1 중첩 교대합니다.</p>
                </div>
            </div>
            
            <div className="textBarInsertMechanic">
                <div className="textBarInsertMechanicTitle borbtm1">
                    <img className="img-50 mr-1" src="https://wow.zamimg.com/images/wow/icons/large/inv_shadowflame_missile.jpg" alt=""/>
                    <div><b className="txt-littleBig">암흑불길 폭발</b></div>
                </div>
                <div className="textBarInsertMechanicDescription">
                    <p>현재 대상을 향해 정면에 원뿔 모양으로 큰 데미지를 입힙니다.</p>
                    <p className="mb-0">탱커는 보스의 머리를 공격대를 향하지 않도록 합니다.</p>
                </div>
            </div>
            
        </div>
    )
}
function TextBarInsertStrategy() {
    return (
        <div className="textBarInsert">

            <div className="textBarInsertInsert">
                <p className="txt-big mt-0">시작 진형</p>
                <img src="https://www.method.gg/images/guides/uploads/the-amalgamation-chamber-phase-1-positions.jpg" alt=""/>
                <p>
                    그림자의 정수 쪽은 원딜이, 영원한 불꽃 쪽은 근딜 위주로 편성합니다.
                </p>
                <p>
                    두 보스 중 하나가 생명력 50%가 되면, 두 보스는 합쳐집니다. 이후 기존 생명력의 평균값을 가진 암흑불길 융합체와 함께 2단계가 시작됩니다.
                </p>
                <p>
                    적당한 중첩이 되면 탱커끼리 서로 보스를 도발해서 교체합니다. 공격대원들은 달라진 보스의 스킬에 대비해야합니다.
                </p>
                <p>
                    그림자의 정수 쪽은 벽 쪽에 바닥을 유도하고, 응결되는 공허 폭발에 대비해 멀리 이동하고 반복합니다. 반대쪽에서 날아오는 화염 소용돌이를 조심하세요.
                </p>
                <p>
                    영원한 불길 쪽은 불타는 유성을 모두 막아야하고, 타오르는 폭발에 5명 이상의 인원을 편성하여 모두 적중하도록 합니다.
                </p>
                <img src="https://www.method.gg/images/guides/uploads/the-amalgamation-chamber-phase-2-positions.jpg" alt=""/>
                <p>
                    2단계가 되면 타임어택 입니다. 블러드를 사용하고 빠르게 전투를 끝내야 합니다.
                </p>
                <p>
                    탱커는 보스가 공격대를 향하지 않도록 머리를 돌립니다. 이후 1 중첩 교대합니다.
                </p>
                <p>
                    탱커와 근접 딜러들은 암울한 겁화에 모두 적중하고 생기는 폭발에 대비해 관문을 타고 벗어나세요.
                </p>
                <p>
                    융합 분출의 모든 바닥을 막아야합니다.
                </p>
                <p>
                    바닥 대상자가 되면 밖에서 바닥과 소용돌이를 깔고 복귀합니다.
                </p>
            </div>

        </div>
    )
}
function NextBoss() {
    return (
        <div className="aberrusBossTitle">
            <div className="aberrusBossTitleText">
                <div className="dungeon">다음 보스</div>
                <div className="boss">잊힌 실험체</div>
            </div>
            <div className='img'><img src="https://www.method.gg/images/raidrace/bosses/aberrus-the-shadowed-crucible/theforgottenexperiments.png" alt=""/></div>
        </div>
    )
}
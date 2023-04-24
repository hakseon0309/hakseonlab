import React from 'react'
import "./Aberrus.css"

export default function Aberrus(props) {

    let index = parseInt(props.named);
    let indexNext = index + 1;

    let bossIcon = [
        "img/wow/aberrus/18-03-23-10-kazzara-the-hellforged.webp",
        "img/wow/aberrus/20-03-23-0-the-amalgamation-chamber.webp",
        "img/wow/aberrus/18-03-23-9-the-forgotten-experiments.jpg",
        "img/wow/aberrus/18-03-23-7-assault-of-the-zaqali.webp",
        "img/wow/aberrus/18-03-23-8-rashok-the-elder.jpg",
        "img/wow/aberrus/18-03-23-2-the-vigilant-steward-zskarn.webp",
        "img/wow/aberrus/18-03-23-1-magmorax.webp",
        "img/wow/aberrus/18-03-23-7-echo-of-neltharion.webp",
        "img/wow/aberrus/18-03-23-6-Scalecommander Sarkareth.webp",
    ]

    let bossImg = [
        "img/wow/aberrus/kazzarathehellforged.webp",
        "img/wow/aberrus/theamalgamationchamber.png",
        "img/wow/aberrus/theforgottenexperiments.webp",
        "img/wow/aberrus/assaultofthezaqali.webp",
        "img/wow/aberrus/rashoktheelder.webp",
        "img/wow/aberrus/thevigilantstewardzskarn.webp",
        "img/wow/aberrus/magmorax.webp",
        "",
        "",
    ]

    let kazarraSkillIcon = [
        {hellsteelCarnage: "https://wow.zamimg.com/images/wow/icons/large/achievment_boss_spineofdeathwing.jpg"},
        {first: "https://wow.zamimg.com/images/wow/icons/large/inv_shadowflame_groundstate.jpg"},
        {first: "https://wow.zamimg.com/images/wow/icons/large/ability_mage_firestarter.jpg"},
        {first: "https://wow.zamimg.com/images/wow/icons/large/inv_10_elementalcombinedfoozles_shadowflame.jpg"},
        {first: "https://wow.zamimg.com/images/wow/icons/large/ability_deathwing_bloodcorruption_earth.jpg"},
        {first: "https://wow.zamimg.com/images/wow/icons/large/ability_warlock_shadowflame.jpg"},
        {first: "https://wow.zamimg.com/images/wow/icons/large/inv_icon_wingbroken07d.jpg"},
        {first: "https://wow.zamimg.com/images/wow/icons/large/inv_10_elementalshardfoozles_shadowflame.jpg"},
    ]

    let tankIcon = "img/wow/icon/tank-icon.webp";
    let healerIcon = "img/wow/icon/healer-icon.webp";
    let dpsIcon = "img/wow/icon/dps-icon.webp";
    
    return (
        
        <div className="aberrus">

            <div className="nav">
                <img className="bossIcon" src={bossIcon[0]} alt=""/>
                <img className="bossIcon" src={bossIcon[1]} alt="" style={{opacity: 0.3}}/>
                <img className="bossIcon" src={bossIcon[2]} alt="" style={{opacity: 0.3}}/>
                <img className="bossIcon" src={bossIcon[3]} alt="" style={{opacity: 0.3}}/>
                <img className="bossIcon" src={bossIcon[4]} alt="" style={{opacity: 0.3}}/>
                <img className="bossIcon" src={bossIcon[5]} alt="" style={{opacity: 0.3}}/>
                <img className="bossIcon" src={bossIcon[6]} alt="" style={{opacity: 0.3}}/>
                <img className="bossIcon" src={bossIcon[7]} alt="" style={{opacity: 0.3}}/>
                <img className="bossIcon" src={bossIcon[8]} alt="" style={{opacity: 0.3}}/>
            </div>

            <div className="scrollspy">
                <div>인원 구성</div>
                <div>능력 숙지</div>
                <div>공략 준비</div>
            </div>

            <div className="bossTitle">
                <div className="text">
                    <div className="raid">어둠의 도가니, 아베루스</div>
                    <div className="boss">지옥벼림 카자라</div>
                    <div className="sub">KAZZARA, THE HELLFORGED</div>
                </div>
                <div className='img'>
                    <img src={bossImg[index]} alt=""/>
                </div>
            </div>

            <div className="difficulty">
                <div className="heroic">HEROIC</div>
                <div className="mythic">MYTHIC</div>
            </div>

            <div className="info">마지막 수정: 2023 / 4 / 23</div>

            <div className="raidSetup">
                인원 구성
                <div className="positionIcon">
                    <img src={tankIcon} alt=""/>2
                    <img src={healerIcon} alt=""/>4
                    <img src={dpsIcon} alt=""/>14+
                </div>
            </div>

            <div className="introduction">INTRODUCTION</div>

            <div className="introductionContent">
                <strong>Fight Style</strong>: Single Target Fight<br/>
                <strong>Recommended Setup</strong>: 2 Tanks / 4 Healers / 14+ DPS<br/>
                <strong>Useful utilities</strong>: A second monitor to watch YouTube during the boss fight<br/>
            </div>

            <div className="mechanics">MECHANICS</div>

            <div className="mechanicsContent">
                <div className='machanic'>
                    <img src={kazarraSkillIcon[0].first} alt=''/>
                </div>
            </div>

            <div className="strategy">STRATEGY</div>

            <div className="strategyContent">
                <div className="stConTitle">OPENING POSITION</div>        
                <div className="img"><img src="https://www.method.gg/images/guides/uploads/kazzara-the-hellforged-opening-position.jpg" alt=""></img></div>
                <div className="paragraph">
                    <p>
                        Tanks should keep the boss where she is standing and face her away from the raid. Even though she does no frontal attack, facing her away will help with awareness when the boss uses her Hellbeam ability (she will do a 180 turn). Tank swap each Terror Claws unless you want to test your limits.

                        Pop Hero/Lust on pull, and loosely spread behind the boss to not get caught by random lasers spawning on nearby players and to bait other abilities. The boss will reach 70% fairly quickly, so be ready to dodge puddles and to take raid wide damage.

                        The puddles she spawns when she hits 70%, 50% and 30% hit pretty hard, so avoid at all cost.

                        The Hellsteel Fragments only spawn at those breakpoints, but Revenant's Blood puddles spawn throughout the fight at increasing intensity the lower the boss' health is.

                        When the lasers spawn, kite them into the Dread Rifts puddles. The placement of Dread Rifts does not matter much as there is plenty of space behind the boss (just don’t place them too far away, as that will force players to kite for longer).

                        At 100 energy, be ready to dodge the frontal breath ability (Hellbeam). She will lock her position once she starts casting, so just dodge once.

                        The Wings of Extinction cast will do a small knockback, so just try not to get knocked into a laser/puddle, to avoid taking unnecessary damage. 

                        When the boss is below 30% health, the raid-wide damage will ramp up pretty high, so be extra careful to avoid taking unnecessary damage from other abilities, as this will most likely lead to deaths at this point.
                    </p>
                </div>
            </div>
            <div className="nextBoss">
                <div className='text'>
                    <div className='next'>NEXT BOSS</div>
                    <div className='name'>융합체의 방</div>
                </div>            
                <div className='img'><img src={bossImg[indexNext]} alt=""/></div>
            </div>
        </div>
    )
}
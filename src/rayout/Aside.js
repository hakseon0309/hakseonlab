import React from 'react'

export default function Aside() {
    return (
        <aside>
            <img className="banner" src= "https://media.tenor.com/iixn8CyQDywAAAAd/blue-archive.gif" alt=""/>
            <div className="profile">
                <div className="background">
                    <img className="icon" src= "https://wow.zamimg.com/images/wow/icons/large/inv_pet_cats_siamesecat.jpg" alt=""/>
                    <div>
                        <div className="character monk">"학선양"</div>
                        <div className="server">KR-Azshara</div>
                    </div>    
                </div>
            </div>
        </aside>
    );
};
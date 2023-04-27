import React from "react"

import "./Roster.css"

export default function Roster() {
    const row1  = [ 1  , "양조" , <CharacterLog class="양조" name="학선양"/>             , ]
    const row2  = [ 2  , "보기" , <CharacterLog name="Diamondtits"/>        , ]
    const row3  = [ 3  , "신사" , <CharacterLog name="요조링"/>             , ]
    const row4  = [ 4  , "신기" , <CharacterLog name="공격대체력관리사"/>    , ]
    const row5  = [ 5  , "복술" , <CharacterLog name="연치난사"/>            , ]
    const row6  = [ 6  , ""     , ""                                        , ]
    const row7  = [ 7  , "전딜" , <CharacterLog name="칩턴이"/>              , ]
    const row8  = [ 8  , "악딜" , <CharacterLog name="Zinzu"/>              , ]
    const row9  = [ 9  , "도적" , <CharacterLog name="Amsso"/>              , ]
    const row10 = [ 10 , ""     , ""                                        , ]
    const row11 = [ 11 , "법사" , <CharacterLog name="Lastwaltz"/>          , ]
    const row12 = [ 12 , "법사" , <CharacterLog name="딸기맛향기"/>          , ]
    const row13 = [ 13 , "흑마" , <CharacterLog name="꼼흑"/>               , ]
    const row14 = [ 14 , "흑마" , <CharacterLog name="안득환"/>             , ]
    const row15 = [ 15 , "냥꾼" , <CharacterLog name="할수있따"/>           , ]
    const row16 = [ 16 , "냥꾼" , <CharacterLog name="아동센터"/>           , ]
    const row17 = [ 17 , "조드" , <CharacterLog name="니달리뜨루"/>         , ]
    const row18 = [ 18 , "정술" , <CharacterLog name="깊게박힌진동토템"/>   , ]
    const row19 = [ 19 , "암사" , <CharacterLog name="메이드홍콩"/>         , ]
    const row20 = [ 20 , "용딜" , <CharacterLog name="바다드래곤"/>         , ]
    return (
        <table>
            <tr>탱커</tr>
            <tr>
                <td>{row1[0]}</td>
                <td>{row1[1]}</td>
                <td>{row1[2]}</td>
                <td>{row1[3]}</td>
                <td>{row1[4]}</td>
                <td>{row1[5]}</td>
                <td>{row1[6]}</td>
                <td>{row1[7]}</td>
                <td>{row1[8]}</td>
                <td>{row1[9]}</td>
            </tr>
            <tr>
                <td>{row2[0]}</td>
                <td>{row2[1]}</td>
                <td>{row2[2]}</td>
                <td>{row2[3]}</td>
                <td>{row2[4]}</td>
                <td>{row2[5]}</td>
                <td>{row2[6]}</td>
                <td>{row2[7]}</td>
                <td>{row2[8]}</td>
                <td>{row2[9]}</td>
            </tr>
            <tr className="healer">힐러</tr>
            <tr>
                <td>{row3[0]}</td>
                <td>{row3[1]}</td>
                <td>{row3[2]}</td>
                <td>{row3[3]}</td>
                <td>{row3[4]}</td>
                <td>{row3[5]}</td>
                <td>{row3[6]}</td>
                <td>{row3[7]}</td>
                <td>{row3[8]}</td>
                <td>{row3[9]}</td>
            </tr>
            <tr>
                <td>{row4[0]}</td>
                <td>{row4[1]}</td>
                <td>{row4[2]}</td>
                <td>{row4[3]}</td>
                <td>{row4[4]}</td>
                <td>{row4[5]}</td>
                <td>{row4[6]}</td>
                <td>{row4[7]}</td>
                <td>{row4[8]}</td>
                <td>{row4[9]}</td>
            </tr>
            <tr>
                <td>{row5[0]}</td>
                <td>{row5[1]}</td>
                <td>{row5[2]}</td>
                <td>{row5[3]}</td>
                <td>{row5[4]}</td>
                <td>{row5[5]}</td>
                <td>{row5[6]}</td>
                <td>{row5[7]}</td>
                <td>{row5[8]}</td>
                <td>{row5[9]}</td>
            </tr>
            <tr>
                <td>{row6[0]}</td>
                <td>{row6[1]}</td>
                <td>{row6[2]}</td>
                <td>{row6[3]}</td>
                <td>{row6[4]}</td>
                <td>{row6[5]}</td>
                <td>{row6[6]}</td>
                <td>{row6[7]}</td>
                <td>{row6[8]}</td>
                <td>{row6[9]}</td>
            </tr>
            <tr className="dealer">딜러</tr>
            <tr>
                <td>{row7[0]}</td>
                <td>{row7[1]}</td>
                <td>{row7[2]}</td>
                <td>{row7[3]}</td>
                <td>{row7[4]}</td>
                <td>{row7[5]}</td>
                <td>{row7[6]}</td>
                <td>{row7[7]}</td>
                <td>{row7[8]}</td>
                <td>{row7[9]}</td>
            </tr>
            <tr>
                <td>{row8[0]}</td>
                <td>{row8[1]}</td>
                <td>{row8[2]}</td>
                <td>{row8[3]}</td>
                <td>{row8[4]}</td>
                <td>{row8[5]}</td>
                <td>{row8[6]}</td>
                <td>{row8[7]}</td>
                <td>{row8[8]}</td>
                <td>{row8[9]}</td>
            </tr>
            <tr>
                <td>{row9[0]}</td>
                <td>{row9[1]}</td>
                <td>{row9[2]}</td>
                <td>{row9[3]}</td>
                <td>{row9[4]}</td>
                <td>{row9[5]}</td>
                <td>{row9[6]}</td>
                <td>{row9[7]}</td>
                <td>{row9[8]}</td>
                <td>{row9[9]}</td>
            </tr>
            <tr>
                <td>{row10[0]}</td>
                <td>{row10[1]}</td>
                <td>{row10[2]}</td>
                <td>{row10[3]}</td>
                <td>{row10[4]}</td>
                <td>{row10[5]}</td>
                <td>{row10[6]}</td>
                <td>{row10[7]}</td>
                <td>{row10[8]}</td>
                <td>{row10[9]}</td>
            </tr>
            <tr>
                <td>{row11[0]}</td>
                <td>{row11[1]}</td>
                <td>{row11[2]}</td>
                <td>{row11[3]}</td>
                <td>{row11[4]}</td>
                <td>{row11[5]}</td>
                <td>{row11[6]}</td>
                <td>{row11[7]}</td>
                <td>{row11[8]}</td>
                <td>{row11[9]}</td>
            </tr>
            <tr>
                <td>{row12[0]}</td>
                <td>{row12[1]}</td>
                <td>{row12[2]}</td>
                <td>{row12[3]}</td>
                <td>{row12[4]}</td>
                <td>{row12[5]}</td>
                <td>{row12[6]}</td>
                <td>{row12[7]}</td>
                <td>{row12[8]}</td>
                <td>{row12[9]}</td>
            </tr>
            <tr>
                <td>{row13[0]}</td>
                <td>{row13[1]}</td>
                <td>{row13[2]}</td>
                <td>{row13[3]}</td>
                <td>{row13[4]}</td>
                <td>{row13[5]}</td>
                <td>{row13[6]}</td>
                <td>{row13[7]}</td>
                <td>{row13[8]}</td>
                <td>{row13[9]}</td>
            </tr>
            <tr>
                <td>{row14[0]}</td>
                <td>{row14[1]}</td>
                <td>{row14[2]}</td>
                <td>{row14[3]}</td>
                <td>{row14[4]}</td>
                <td>{row14[5]}</td>
                <td>{row14[6]}</td>
                <td>{row14[7]}</td>
                <td>{row14[8]}</td>
                <td>{row14[9]}</td>
            </tr>
            <tr>
                <td>{row15[0]}</td>
                <td>{row15[1]}</td>
                <td>{row15[2]}</td>
                <td>{row15[3]}</td>
                <td>{row15[4]}</td>
                <td>{row15[5]}</td>
                <td>{row15[6]}</td>
                <td>{row15[7]}</td>
                <td>{row15[8]}</td>
                <td>{row15[9]}</td>
            </tr>
            <tr>
                <td>{row16[0]}</td>
                <td>{row16[1]}</td>
                <td>{row16[2]}</td>
                <td>{row16[3]}</td>
                <td>{row16[4]}</td>
                <td>{row16[5]}</td>
                <td>{row16[6]}</td>
                <td>{row16[7]}</td>
                <td>{row16[8]}</td>
                <td>{row16[9]}</td>
            </tr>
            <tr>
                <td>{row17[0]}</td>
                <td>{row17[1]}</td>
                <td>{row17[2]}</td>
                <td>{row17[3]}</td>
                <td>{row17[4]}</td>
                <td>{row17[5]}</td>
                <td>{row17[6]}</td>
                <td>{row17[7]}</td>
                <td>{row17[8]}</td>
                <td>{row17[9]}</td>
            </tr>
            <tr>
                <td>{row18[0]}</td>
                <td>{row18[1]}</td>
                <td>{row18[2]}</td>
                <td>{row18[3]}</td>
                <td>{row18[4]}</td>
                <td>{row18[5]}</td>
                <td>{row18[6]}</td>
                <td>{row18[7]}</td>
                <td>{row18[8]}</td>
                <td>{row18[9]}</td>
            </tr>
            <tr>
                <td>{row19[0]}</td>
                <td>{row19[1]}</td>
                <td>{row19[2]}</td>
                <td>{row19[3]}</td>
                <td>{row19[4]}</td>
                <td>{row19[5]}</td>
                <td>{row19[6]}</td>
                <td>{row19[7]}</td>
                <td>{row19[8]}</td>
                <td>{row19[9]}</td>
            </tr>
            <tr>
                <td>{row20[0]}</td>
                <td>{row20[1]}</td>
                <td>{row20[2]}</td>
                <td>{row20[3]}</td>
                <td>{row20[4]}</td>
                <td>{row20[5]}</td>
                <td>{row20[6]}</td>
                <td>{row20[7]}</td>
                <td>{row20[8]}</td>
                <td>{row20[9]}</td>
            </tr>
        </table>
    )
}
function CharacterLog(props) {
    const url = "https://ko.warcraftlogs.com/character/kr/%EC%95%84%EC%A6%88%EC%83%A4%EB%9D%BC/"+props.name
    return (
        <span>
            <a className={props.class} href={url}>{props.name}</a>
        </span>
    )
}
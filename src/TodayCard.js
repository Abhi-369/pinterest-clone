import React from 'react';
import './TodayCard.css'

function TodayCard({ Img_src1, Img_src2, Img_src3, title_1, title_2 }) {
    return <div className="img__box">

        <div className="img__row">
            <img src={Img_src1} alt="" />
            <img src={Img_src2} alt="" />
            <img src={Img_src3} alt="" />
        </div>

        <div className="headline">
            <p>{title_1}</p>
            <h2>{title_2}</h2>
        </div>
    </div>
}

export default TodayCard;

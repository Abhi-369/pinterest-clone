import React from 'react';
import './SearchImgBox.css';

function SearchImgBox({ Img, tag }) {
    return <div className="searchimg__box">
        <div className="img__cont">
            <p>{tag}</p>
            <div className="bg" />
            <img src={Img} alt="" />
        </div>
    </div>

}

export default SearchImgBox;

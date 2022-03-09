import React from 'react';
import './SearchContainer.css';
import SearchImgBox from './SearchImgBox';


function SearchContainer() {
    return <div className="search__box">

        <p>Ideas for you</p>
        <div className="box__">
            <SearchImgBox Img="https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg" tag="Men’s fashion" />
            <SearchImgBox Img="https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg" tag="Food and drink"/>
            <SearchImgBox Img="https://images.pexels.com/photos/811572/pexels-photo-811572.jpeg" tag="Event planning"/>
            <SearchImgBox Img="https://cdn.pixabay.com/photo/2016/11/22/06/05/girl-1848454_960_720.jpg" tag="Beauty"/>
            <SearchImgBox Img="https://cdn.pixabay.com/photo/2017/08/03/21/11/art-2578353_960_720.jpg" tag="Design"/>
            <SearchImgBox Img="https://cdn.pixabay.com/photo/2013/09/14/19/53/city-182223_960_720.jpg" tag="Architecture"/>
            <SearchImgBox Img="https://cdn.pixabay.com/photo/2016/01/02/16/53/lion-1118467_960_720.jpg" tag="Animals"/>
            <SearchImgBox Img="https://images.pexels.com/photos/716658/pexels-photo-716658.jpeg" tag="Christmas"/>
            

        </div>

        <p>Popular on Pinterest</p>
        <div className="box__">
            <SearchImgBox Img="https://cdn.pixabay.com/photo/2014/07/21/03/53/digital-art-398342_960_720.png" tag="Holidays"/>
            <SearchImgBox Img="https://cdn.pixabay.com/photo/2015/10/30/18/04/banner-1014539_960_720.jpg" tag="Women’s fashion"/>
            <SearchImgBox Img="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg" tag="Weddings"/>
            <SearchImgBox Img="https://cdn.pixabay.com/photo/2021/09/07/11/53/car-6603726_960_720.jpg" tag="Travel"/>
            <SearchImgBox Img="https://cdn.pixabay.com/photo/2020/08/31/00/23/light-box-5531025_960_720.jpg" tag="Quotes"/>
            <SearchImgBox Img="https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478_960_720.jpg" tag="Health and wellness"/>
            <SearchImgBox Img="https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_960_720.jpg" tag="Beach"/>
            <SearchImgBox Img="https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_960_720.jpg" tag="Home"/>

        </div>
    </div>;
}

export default SearchContainer;

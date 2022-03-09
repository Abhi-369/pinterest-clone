import React, { useState } from 'react';
import Cards from './Cards'
import './Home.css'
import { FaPlus, FaQuestion } from 'react-icons/fa';
import { Button, IconButton } from '@material-ui/core';
import styled from 'styled-components'
import { FaBell, FaCommentDots, FaUserCircle, FaAngleDown, FaSearch } from 'react-icons/fa'
import { NavLink, Link } from 'react-router-dom'
import SearchContainer from './SearchContainer'
import axios from 'axios';

function Card() {

    const [photo, setPhoto] = useState(" ");
    const [clientId, setClientId] = useState("iIWqgk4HL9DuUvivXjrkh6nHtlnAuFIs-6t2dhkwcns");
    const [result, setResult] = useState([]);
    const [search, setSearch] = useState(false);

    function handleChange(event) {
        setPhoto(event.target.value);
    }

    function handleSubmit(event) {
        const url = `https://api.unsplash.com/search/photos?page=3&per_page=30&query=${photo}&client_id=${clientId}`

        axios.get(url).then((res) => {
            setResult(res.data.results)
        })

    }


    return (

        <>
            <div className="navbar">
                <Nav>
                    <div className="left__menu">
                        <Link to="/" >
                            <IconButton >
                                <img src="https://i.pinimg.com/originals/d3/d1/75/d3d175e560ae133f1ed5cd4ec173751a.png" alt="" />
                            </IconButton>
                        </Link>

                        <li><NavLink exact activeClassName="active" className="today" to="/">Home</NavLink></li>
                        <li><NavLink activeClassName="active" className="today" to="/today">Today</NavLink></li>

                    </div>
                    <div className="input__search">

                        <FaSearch className="search__icon" />

                        <input onChange={handleChange} type="text" placeholder='Search For New Images...' onClick={() => setSearch(!search)} />
                        <Button variant="text" onClick={handleSubmit}>enter</Button>

                    </div>
                    {search && <SearchContainer />}

                    <div className="right__menu">

                        <div className="icon">
                            <FaBell />
                            <FaCommentDots />
                            <FaUserCircle />
                            <FaAngleDown />
                        </div>

                    </div>

                </Nav>


            </div>

            {
                result.map((photo) => (

                    <img className="api__img" src={photo.urls.small} />
                ))
            }
            <div className="card">

                <div className="section__first">

                    <Cards src="https://source.unsplash.com/random" alt="" />

                    <Cards src="https://source.unsplash.com/random?bike" alt="" />

                    <Cards src="https://source.unsplash.com/random?girl" alt="" />

                    <Cards src="https://source.unsplash.com/random?lady" alt="" />

                    <Cards src="https://source.unsplash.com/random?place" alt="" />

                    <Cards src="https://source.unsplash.com/random?london" alt="" />

                    <Cards src="https://source.unsplash.com/random?beach" alt="" />

                </div>

                <div className="section__first">

                    <Cards src="https://source.unsplash.com/random?fashion" alt="" />

                    <Cards src="https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg" alt="" />

                    <Cards src="https://source.unsplash.com/random?car" alt="" />

                    <Cards src="https://images.pexels.com/photos/1854129/pexels-photo-1854129.jpeg" alt="" />

                    <Cards src="https://images.pexels.com/photos/2870355/pexels-photo-2870355.jpeg" alt="" />

                    <Cards src="https://images.pexels.com/photos/2775518/pexels-photo-2775518.jpeg" alt="" />

                </div>

                <div className="section__first">

                    <Cards src="https://cdn.pixabay.com/photo/2020/05/22/07/59/girl-5204296_960_720.jpg" alt="" />

                    <Cards src="https://cdn.pixabay.com/photo/2020/05/22/07/59/girl-5204280_960_720.jpg" alt="" />

                    <Cards src="https://images.pexels.com/photos/10152716/pexels-photo-10152716.jpeg" alt="" />

                    <Cards src="https://images.pexels.com/photos/67552/giraffe-tall-mammal-africa-67552.jpeg" alt="" />

                    <Cards src="https://source.unsplash.com/random?phone" alt="" />

                    <Cards src="https://cdn.pixabay.com/photo/2016/07/22/21/39/girl-1535856_960_720.jpg" alt="" />

                </div>

                <div className="section__first">

                    <Cards src="https://images.pexels.com/photos/5117913/pexels-photo-5117913.jpeg" alt="" />

                    <Cards src="https://source.unsplash.com/random?health" alt="" />

                    <Cards src="https://source.unsplash.com/random?drink" alt="" />

                    <Cards src="https://source.unsplash.com/random?food" alt="" />

                    <Cards src="https://source.unsplash.com/random?business" alt="" />

                    <Cards src="https://cdn.pixabay.com/photo/2016/04/17/22/00/girl-1335663_960_720.jpg" alt="" />

                </div>

                <div className="section__first">

                    <Cards src="https://images.pexels.com/photos/9940949/pexels-photo-9940949.jpeg" alt="" />

                    <Cards src="https://source.unsplash.com/random?female" alt="" />

                    <Cards src="https://cdn.pixabay.com/photo/2020/02/02/17/23/travel-4813653_960_720.jpg" alt="" />

                    <Cards src="https://images.pexels.com/photos/1964970/pexels-photo-1964970.jpeg" alt="" />

                    <Cards src="https://source.unsplash.com/random?garden" alt="" />

                    <Cards src="https://cdn.pixabay.com/photo/2017/09/24/15/23/paris-2782145_960_720.jpg" alt="" />

                </div>

                <div className="section__first">

                    <Cards src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg" alt="" />

                    <Cards src="https://source.unsplash.com/random?friends" alt="" />

                    <Cards src="https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg" alt="" />

                    <Cards src="https://source.unsplash.com/random?hug" alt="" />

                    <Cards src="https://source.unsplash.com/random?love" alt="" />

                    <Cards src="https://images.pexels.com/photos/1995730/pexels-photo-1995730.jpeg" alt="" />

                    <Cards src="https://source.unsplash.com/random?lion" alt="" />

                </div>


            </div>
            <div className="bottomRight__icon">
                <Button variant="text" className="btomicon">
                    <FaPlus />
                </Button>

                <Button variant="text" className="btomicon">
                    <FaQuestion />
                </Button>
            </div>
        </>
    )
}



const Nav = styled.div`
position: fixed;
display: flex;
align-items:center;
// border: 2px solid black;
// border-bottom: 1px solid lightgray;
top: 0;
height: 80px;
width: 100%;
z-index: 1;
background-color: #fff;
.left__menu{
    display: flex;
    align-items: center;
    padding: 10px;    
    margin: 10px;
    justify-content: space-between;
    width: 170px;
    // border: 2px solid red;
    
    img{
        height: 35px;
    }
    .today{
        text-decoration: none;
        list-style: none;
        padding: 9px 13px;
        color: black;
        font-weight: bold;
    }
    .today:hover{
        background-color: #efefef;
        border-radius: 50px;
    }
    li {
        list-style: none;
        text-decoration: none;
    }
    
    li > .active{
        font-weight: bold;
        text-decoration: none;
        color: #000;
        list-style: none;
        border: 1px solid lightgray;
        padding: 9px 13px;
        border-radius: 50px;
    }
}
.input__search{
    width: 100%;
    margin: 10px 10px;
    // border: 2px solid;
    background-color: #efefef;
    border-radius: 30px;
    display: flex;
    align-items: center;
    flex: 1;
    padding: 5px;
    padding-left: 10px;
    
    .search__icon{
        color: darkGray;
        font-size: 18px;
        margin-left: 8px;
    }
    
    input{
        border: none;
        outline: none;
        width: 80%;
        background-color: #efefef;
        padding: 5px;
    }
}
.right__menu{
    width: 200px;
    margin: 0 20px;

    .icon{
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 10px;
            font-size: 23px;

        }

    }
`

export default Card;
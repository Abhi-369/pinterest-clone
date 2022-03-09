import React, { useState } from 'react';
import './Today.css';
import { FaPlus, FaQuestion } from 'react-icons/fa';
import styled from 'styled-components'
import { FaBell, FaCommentDots, FaUserCircle, FaAngleDown, FaSearch } from 'react-icons/fa'
import { NavLink, Link } from 'react-router-dom'
import SearchContainer from './SearchContainer'
import TodayCard from './TodayCard';
import { FaCheckCircle } from 'react-icons/fa';
import { Button, IconButton } from '@material-ui/core';
import { format } from 'date-fns';
import axios from 'axios';

function Today() {
    const [photo, setPhoto] = useState(" ");
    const [clientId, setClientId] = useState("iIWqgk4HL9DuUvivXjrkh6nHtlnAuFIs-6t2dhkwcns");
    const [result, setResult] = useState([]);
    const [search, setSearch] = useState(false);

    function handleChange(event) {
        setPhoto(event.target.value);
        console.log(photo);
    }

    function handleSubmit(event) {
        const url = `https://api.unsplash.com/search/photos?page=2&per_page=20&query=${photo}&client_id=${clientId}`

        axios.get(url).then((res) => {
            console.log(res);
            setResult(res.data.results)
        })

    }

    const d1 = new Date();
    const d2 = new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24)
    const d3 = new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24 * 2)

    const date1 = format(d1, 'MMM dd, yyyy');
    const date2 = format(d2, 'MMM dd, yyyy');
    const date3 = format(d3, 'MMM dd, yyyy');

    return (
        <>
            <div className="navbar">
                <Nav>
                    <div className="left__menu">
                        <Link to="/">
                        <IconButton>
                            <img src="https://i.pinimg.com/originals/d3/d1/75/d3d175e560ae133f1ed5cd4ec173751a.png" alt="" />
                        </IconButton>
                        </Link>

                        <li><NavLink exact activeClassName="active" className="today" to="/">Home</NavLink></li>
                        <li><NavLink activeClassName="active" className="today" to="/today">Today</NavLink></li>

                    </div>
                    <div className="input__search">

                        <FaSearch className="search__icon" />

                        <input onChange={handleChange} type="text" placeholder='Search' onClick={() => setSearch(!search)} />
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

            <div className="to__container">

                <div className="title">
                    <div className="date">
                        <p>{date1}</p>
                    </div>
                    <div className="quote">
                        <p>Stay Inspired</p>
                    </div>
                </div>

                <div className="img__container">

                    <TodayCard Img_src1="https://images.pexels.com/photos/6230961/pexels-photo-6230961.jpeg" Img_src2="https://images.pexels.com/photos/1485548/pexels-photo-1485548.jpeg" Img_src3="https://images.pexels.com/photos/3806690/pexels-photo-3806690.jpeg" title_1="Happy Monday!" title_2="Colourful Affirmation for a Colourful Life" />

                    <TodayCard Img_src1="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg" Img_src2="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg" Img_src3="https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg" title_1="Style Update" title_2="Say Hello Mini Skirts!" />

                    <TodayCard Img_src1="https://images.pexels.com/photos/3323163/pexels-photo-3323163.jpeg" Img_src2="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg" Img_src3="https://images.pexels.com/photos/3220360/pexels-photo-3220360.jpeg" title_1="Get Creative" title_2="Fashion Illustartion Ideas" />


                </div>

                <div className="title">
                    <div className="date">
                        <p>{date2}</p>
                    </div>
                </div>

                <div className="img__container">

                    <TodayCard Img_src1="https://images.pexels.com/photos/9418783/pexels-photo-9418783.jpeg" Img_src2="https://images.pexels.com/photos/2150622/pexels-photo-2150622.jpeg" Img_src3="https://images.pexels.com/photos/2270078/pexels-photo-2270078.jpeg" title_1="Shaadi Style" title_2="Fun Sarees for a Wedding Guest" />

                    <TodayCard Img_src1="https://images.pexels.com/photos/8523820/pexels-photo-8523820.jpeg" Img_src2="https://images.pexels.com/photos/6169695/pexels-photo-6169695.jpeg" Img_src3="https://images.pexels.com/photos/2923922/pexels-photo-2923922.jpeg" title_1="Style Update" title_2="MeansWear Trends" />

                    <TodayCard Img_src1="https://images.pexels.com/photos/3323163/pexels-photo-3323163.jpeg" Img_src2="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg" Img_src3="https://images.pexels.com/photos/3220360/pexels-photo-3220360.jpeg" title_1="Never too late to build a good habit" title_2="30 day challenges" />

                    <TodayCard Img_src1="https://images.pexels.com/photos/2168975/pexels-photo-2168975.jpeg" Img_src2="https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg" Img_src3="https://images.pexels.com/photos/698849/pexels-photo-698849.jpeg" title_1="World Travelling" title_2="Famous Places" />


                </div>

                <div className="title">
                    <div className="date">
                        <p>{date3}</p>
                    </div>
                </div>

                <div className="img__container">

                    <TodayCard Img_src1="https://images.pexels.com/photos/712651/pexels-photo-712651.jpeg" Img_src2="https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg" Img_src3="https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg" title_1="Wedding Guide" title_2="Perfect Bridal Entry Ideas" />

                    <TodayCard Img_src1="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg" Img_src2="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg" Img_src3="https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg" title_1="You are worth it" title_2="Affirmations to be your best self" />

                    <TodayCard Img_src1="https://images.pexels.com/photos/3323163/pexels-photo-3323163.jpeg" Img_src2="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg" Img_src3="https://images.pexels.com/photos/3220360/pexels-photo-3220360.jpeg" title_1="Pink is everyone" title_2="More men should wear Pink" />


                </div>

                <div className="bottom__info">
                    <FaCheckCircle />
                    <p>That's all for today!</p>
                    <h2>Come back tomorrow for more inspiration</h2>
                    <Link to="/">
                        <Button variant="contained">Go to home feed</Button>
                    </Link>
                </div>

            </div>;

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
border-bottom: 1px solid lightgray;
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

export default Today;
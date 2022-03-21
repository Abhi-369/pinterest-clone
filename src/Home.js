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
                        <li><NavLink activeClassName="active" className="today right__today" to="/today">Today</NavLink></li>

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

            <div className="img__api">
                {
                    result.map((photo) => (

                        <img className="api__img" src={photo.urls.small} />
                    ))
                }
            </div>

            <div className="card">

                <div className="section__first">

                    <Cards src="https://source.unsplash.com/random" alt="" />

                    <Cards src="https://source.unsplash.com/random?bike" alt="" />

                    <Cards src="https://source.unsplash.com/random?beautiful" alt="" />

                    <Cards src="https://source.unsplash.com/random?lady" alt="" />

                    <Cards src="https://source.unsplash.com/random?place" alt="" />

                    <Cards src="https://source.unsplash.com/random?london" alt="" />

                    <Cards src="https://source.unsplash.com/random?beach" alt="" />

                </div>

                <div className="section__first">

                    <Cards src="https://source.unsplash.com/random?fashion" alt="" />

                    <Cards src="https://source.unsplash.com/random?uk" alt="" />

                    <Cards src="https://source.unsplash.com/random?car" alt="" />

                    <Cards src="https://source.unsplash.com/random?model" alt="" />

                    <Cards src="https://source.unsplash.com/random?employee" alt="" />

                    <Cards src="https://source.unsplash.com/random?party" alt="" />
                    <Cards src="https://source.unsplash.com/random?club" alt="" />

                </div>

                <div className="section__first">

                    <Cards src="https://source.unsplash.com/random?kid" alt="" />

                    <Cards src="https://source.unsplash.com/random?nature" alt="" />

                    <Cards src="https://source.unsplash.com/random?cream" alt="" />

                    <Cards src="https://source.unsplash.com/random?forest" alt="" />

                    <Cards src="https://source.unsplash.com/random?phone" alt="" />

                    <Cards src="https://source.unsplash.com/random?bird" alt="" />

                </div>

                <div className="section__first">

                    <Cards src="https://source.unsplash.com/random?house" alt="" />

                    <Cards src="https://source.unsplash.com/random?health" alt="" />

                    <Cards src="https://source.unsplash.com/random?drink" alt="" />

                    <Cards src="https://source.unsplash.com/random?food" alt="" />

                    <Cards src="https://source.unsplash.com/random?business" alt="" />

                    <Cards src="https://source.unsplash.com/random?woman" alt="" />

                </div>

                <div className="section__first">

                    <Cards src="https://source.unsplash.com/random?car" alt="" />

                    <Cards src="https://source.unsplash.com/random?female" alt="" />

                    <Cards src="https://source.unsplash.com/random?morning" alt="" />

                    <Cards src="https://source.unsplash.com/random?male" alt="" />

                    <Cards src="https://source.unsplash.com/random?garden" alt="" />

                    <Cards src="https://source.unsplash.com/random?boy" alt="" />

                </div>

                <div className="section__first extra">

                    <Cards src="https://source.unsplash.com/random?company" alt="" />

                    <Cards src="https://source.unsplash.com/random?business" alt="" />

                    <Cards src="https://source.unsplash.com/random?canada" alt="" />

                    <Cards src="https://source.unsplash.com/random?girl" alt="" />

                    <Cards src="https://source.unsplash.com/random?flower" alt="" />

                    <Cards src="https://source.unsplash.com/random?drink" alt="" />

                </div>

            </div>
            <h2 style={{textAlign: 'center'}}>Search For More...</h2>
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
     
    img{
        height: 35px;
        @media only screen and (max-width: 600px) {
            margin-right: -30px;
        }
    }
    .today{
        text-decoration: none;
        list-style: none;
        padding: 9px 13px;
        color: black;
        font-weight: bold;
        @media (max-width: 600px) {
            padding: 0px;
          }
    }
    .right__today{
        @media (max-width: 600px) {
            position: absolute;
            right: 40px;
            top: 33px;
          }
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
    background-color: #efefef;
    border-radius: 30px;
    display: flex;
    align-items: center;
    flex: 1;
    padding: 5px;
    padding-left: 10px;

    @media (max-width: 600px) {
        flex: 0.7;
        margin-left: -30px;
        button{
            margin-left: 50px;
        }
      }

    
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
        @media (max-width: 600px) {
            width: 30%;
          }
    }
}
.right__menu{
    width: 200px;
    margin: 0 20px;

    @media (max-width: 600px) {
        display: none;
      }

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
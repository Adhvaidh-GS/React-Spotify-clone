import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"


function Header() {

    return (
        <Nav>
            <NavContainer>
            <Link to="/" >
               <LeftNav src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"/>
            </Link>   
               <RightNav>
                    <ul> 
                    <Link to="/premium" >
                        <li>Premium</li>
                    </Link>  
                    <Link to="/support" >  
                        <li>Support</li>
                    </Link>    
                    <Link to="/download" >
                        <li>Download</li>
                    </Link>
                        <li>|</li>
                        <li>Sign up</li>
                        <li>Log in</li>
                    </ul>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/2048px-Hamburger_icon_white.svg.png"/>
               </RightNav>
            </NavContainer>
        </Nav>
    )
}

export default Header



const Nav = styled.nav`
    background-color: black;
    width: 100%;
    height: 80px;


    @media (max-width: 992px) {
        height: 50px;
    }
`

const NavContainer = styled.div`
    margin: 0 170px;
    padding: 10px 10px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    @media (max-width: 1200px) { 
       margin: 0 10px;
    }

    @media (max-width: 992px) { 
       margin: 0 10px;
    }


`

const LeftNav = styled.img`
    width: 120px;
    display: flex;
    padding-top: 10px;
    align-items: center;
    cursor: pointer;

    @media (max-width: 992px) {
        width: 90px;
        padding: 0;
    }

`
const RightNav = styled.ul`
    color: white;
    display: flex;
    padding-top: 10px;

    ul{ 
        display: flex;
    }

   
    ul li {
        list-style: none;
        margin-right: 35px;
        font-weight: 600;
        cursor: pointer;


        &:hover {
            color: rgb(30,215,96);
        }


    }
    @media (max-width: 1200px) {
        img {
            display: none;
        }
    }

    img{ 
        width: 20px;
        display: none;
        cursor: pointer;
    }

    @media (max-width: 992px) {
        ul {
            display: none;
        }

        img {
            display: block;
        }
    }


`
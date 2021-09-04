import React from 'react'
import styled from 'styled-components'

function SupportHeader() {
    return (
        <Container>
           <TextContainer>
           How can we help you?
           </TextContainer>
           <SearchContainer placeholder="Search">
           
           </SearchContainer>
           <NavContainer>
                <h3>TOP SOLUTIONS</h3>
                <NavText>
                    <h4>CHARGE HELP</h4>
                    <li>Price updates</li>
                </NavText>
                <NavText>
                    <h4>AVAILABLE PLANS</h4>
                    <li>Start or join Family plan</li>
                </NavText>
                <NavText>
                    <h4>LOGGING IN</h4>
                    <li>Can't reset password</li>
                </NavText>
                <NavText>
                    <h4>ACCOUNT SETTINGS</h4>
                    <li>Country or region settings</li>
                </NavText>
           </NavContainer>
        </Container>
    )
}

export default SupportHeader


const Container = styled.div`
    min-height: 440px;
    background: url("https://support.scdn.co/web/_next/static/assets/f94227f/search-desktop.webp") top/100% no-repeat #1c2963;
    object-fit: cover;
    color: white;
    display: flex;
    flex-direction: column;

    @media (max-width:760px) {
        background: url("https://support.scdn.co/web/_next/static/assets/f94227f/search-mobile.webp") top/100% no-repeat #1c2963;
    }


`
const TextContainer = styled.h1`
    font-size: 64px;
    line-height: 72px;
    font-weight: 700;
    text-align: center;
    padding-top: 70px;

    @media (max-width:760px) {  
        font-size: 48px;
    }
`

const SearchContainer = styled.input`
    padding: 15px 40px;
    width: 700px;
    margin: 30px auto;
    border: none;
    justify-content: center;
    align-items: center;
    position: relative;

    &:focus {
        outline: none;
    }
    
    &::placeholder {
        font-size: 18px;    
    }

    @media (max-width:760px) { 
        width: 80%;
        padding: 15px;
    }

`
const NavContainer = styled.div`
    display: flex;
    margin: 30px 15%;

    h3 {
        display: none;
    }

    @media (max-width:950px) { 
        margin: 30px ;
        flex-direction: column;
        justify-content: flex-start;

        h3 {
            display: block;
            font-size: 12px;
            line-height: 32px;
            color: #d9d9d9;
            font-weight: 400;
            letter-spacing: .1em;
        }

    }


`

const NavText = styled.div`
    text-align: center;
    margin: auto;
    h4 {
        color: #d9d9d9;
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        letter-spacing: 1px;
    }

    li {
        font-size: 18px;
        line-height: 27px;
        font-weight: 400;
    }

    @media (max-width:950px) {
        margin: 0;
        text-align: start;
        h4 {
            display: none;
        }

        li {
            margin-top: 15px;
        
            &:hover {
                text-decoration: underline;
            }
            
        }
    }


`
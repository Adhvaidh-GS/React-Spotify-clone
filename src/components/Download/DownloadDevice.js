import React from 'react'
import styled from "styled-components"

function DownloadDevice() {
    return (
        <Container>
            <ImgContainer src="	https://www-growth.scdn.co/static/download/all-devices.svg" />
            <TextContainer>
                One account, listen everywhere.
            </TextContainer>
            <LinkContainer>
                <h5>MOBILE</h5>
                <span>•</span>
                <h5>COMPUTER</h5>
                <span>•</span>
                <h5>TABLET</h5>
                <span>•</span>
                <li>CAR</li>
                <span>•</span>
                <li>Playstation®</li>
                <span>•</span>
                <li>Xbox</li>
                <span>•</span>
                <li>tv</li>
                <span>•</span>
                <li>speaker</li>   
                <span>•</span>
                <li>web player</li>         
            </LinkContainer>
        </Container>
    )
}

export default DownloadDevice

const Container = styled.div`
    min-height: 400px;
    padding: 60px 15px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(34, 35, 38);
`
const ImgContainer = styled.img`
    width: 480px;
    max-width: 560px;
    margin-bottom: 20px;
    padding: 0 40px;

    @media (max-width:620px) { 
        max-width: 400px;
    }

    @media (max-width:490px) { 
        max-width: 300px;
    }

    @media (max-width:360px) { 
        max-width: 250px;
    }

    @media (max-width:330px) { 
        max-width: 200px;
    }
    
`

const TextContainer = styled.h1`
    color: white;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.5px;
    text-align: center;

    @media (max-width:900px) { 
        font-size: 28px;
        line-height: 36px;
    }

`
const LinkContainer = styled.li`
    display: flex;
    line-height: 24px;
    text-transform: uppercase;
    margin: 10px;
    margin-top: 50px;

    h5 {
        color: white;
        font-size: 16px;
        font-weight: 400;
        padding-right: 15px;
        cursor: default;
    }

    li , span {
        color: rgb(29, 185, 84);
        padding-right: 15px;
        font-size: 16px;
    }

    span {
        cursor: default;
    }

    li {
        text-decoration: underline;

        &:hover {
            color: #1ed760;
        }

    }

    @media (max-width:900px) {
            flex-direction: column;
            align-items: center;
            gap: 15px;
            span {
                display: none;
            }
        }



`

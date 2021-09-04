import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

function DownloadNow() {
    return (
        <Container>
            <TextContainer>
                Bring your music to mobile and tablet, too.
            </TextContainer>
            <DescriptionContainer>
                Listening on your phone or tablet is free, easy, and fun.
            </DescriptionContainer>
            <ImgContainer>
            <Link to="google.com" target="_blank" rel="noopener noreferrer">
                <Img src="https://www-growth.scdn.co/static/badges/apple/en.png"/>
            </Link>    
            <Link to="">
                <Img src="https://www-growth.scdn.co/static/badges/google/en.png"/>
            </Link>    
            <Link to="">
                <Img src="https://www-growth.scdn.co/static/badges/microsoft-windows/en.png"/>
            </Link>    
            <Link to="">
                <Img src="https://www-growth.scdn.co/static/badges/amazon/us.png"/>
            </Link>    
            </ImgContainer>
        </Container>
    )
}

export default DownloadNow

const Container = styled.div`
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const TextContainer = styled.h1`
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
    padding-bottom: 20px;
    letter-spacing: -0.5px;
`
const DescriptionContainer = styled.p`
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    padding-bottom: 20px;
`

const ImgContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Img = styled.img`
    width: 135px;
    height: 40px;
    margin: 10px;
    object-fit: cover;
`
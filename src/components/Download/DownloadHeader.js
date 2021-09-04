import React from 'react'
import styled from 'styled-components'

function DownloadHeader() {
    return (
        <Container>
            <HeaderContainer>
                <LapImg src="https://www-growth.scdn.co/static/download/laptop.svg" />
                <Circle src="	https://www-growth.scdn.co/static/download/green-circle.svg"/>
                <Check src="	https://www-growth.scdn.co/static/download/green-success-check.svg"/>
                <TextContainer>
                    Download Spotify
                </TextContainer>
                <DescriptionContainer>
                    Play millions of songs on your device.
                </DescriptionContainer>
                <DownloadButton>
                    Download
                </DownloadButton>
            </HeaderContainer>
        </Container>
    )
}

export default DownloadHeader

const Container = styled.div`
    min-height: 350px;
    background-color: rgb(25,230,140);
    padding: 40px 15px 104px;
`
const HeaderContainer = styled.div`
   margin: 0px auto;
   max-width: 750px;
   display: flex;
   flex-direction: column;
   align-items: center;
`

const LapImg = styled.img`
    width: 136px;
    margin-top: 63px;
    margin-bottom: 40px;
    max-width: 202px;
    position: relative;

`

const Circle = styled.img`
    position: absolute;
    width: 36px;
    top: 26%;

    @media (max-width:990px) {
        top: 22.5%;
    }
`

const Check = styled.img `
    position: absolute;
    width: 15px;
    top: 27.5%;

    @media (max-width:990px) {
        top: 24%;
    }

`

const TextContainer = styled.h1`
  font-size: 48px;
  line-height: 56px;
  padding-bottom: 24px;

  @media (max-width:990px) {
      font-size: 40px;
      line-height: 48px;
  }

  @media (max-width:750px) {
        font-size: 32px;
        line-height: 40px;
  }


`

const DescriptionContainer = styled.p`
    padding: 0px 0px 2em;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
`

const DownloadButton = styled.button`
    padding: 14px 32px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    background-color:white;
    line-height: 20px;
    font-weight: 600;
    transition: 250ms;

    &:hover {
        background-color: #f6f6f6;
        transform: scale(1.05);
    }
`

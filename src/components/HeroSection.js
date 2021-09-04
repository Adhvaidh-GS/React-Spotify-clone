import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


function HeroSection() {
    return (
        <Container>
                <HeaderContainer>
                <LeftContainer>
                <Badge>Spotify Premium</Badge>
                <TitleText>
                    Get 3 months of Premium for free
                </TitleText>
                <DescriptionText>
                    Enjoy ad-free music listening, offline playback, and more. Cancel anytime.
                </DescriptionText>
                <ButtonContainer>
                <Link to="/premium">
                    <LeftButton>
                        Get 3 Months Free
                    </LeftButton>
                </Link>    
                </ButtonContainer>
            </LeftContainer>   
            <RightContainer>
            <RightImg src="https://i.scdn.co/image/ab671c3d0000f4307f4523881179bfd1eb0eecfd" />
            </RightContainer> 
        </HeaderContainer>
        </Container>
    )
}

export default HeroSection



const Container = styled.div `
    background-color: rgb(178, 44, 21);
    min-height: 400px;
`
const HeaderContainer = styled.div `
    display: flex;
    padding: 50px ;

    @media (max-width:1300px) {
        padding: 20px;
    }
   
    @media (max-width:1185px) {
        flex-direction: column;
        padding: 30px 0;
        text-align: start;
    }


`
const Badge = styled.h5`
    text-transform: uppercase;
    font-size: 14px;
    margin: 16px 0px 32px;
    letter-spacing: 0.1em;

    @media (max-width:1185px) {
        text-align: center;
        font-size: 10px;
    }

   
`

const LeftContainer = styled.div`
    max-width: 800px;
    margin: auto;
    color: #fff;

    @media (max-width:1185px) {
        margin: auto;

    }

    @media (max-width:600px) {
        margin: 10px;

    }

`
const RightContainer = styled.div`
   max-width: 400px;
   max-height: 400px;
   margin: auto;

`
const RightImg = styled.img `
    
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const TitleText = styled.h1 `
   font-size: 60px;
   line-height: 72px;
   font-weight: 700;
   padding-bottom: 30px;

   @media (max-width:1185px) { 
        font-size: 50px;
   }

   @media (max-width:750px)  {
    font-size: 32px;
    line-height: 40px;
   }
   @media (max-width:600px)  {    
       padding-bottom: 10px;
    }

    @media (max-width:520px)  {
       font-size: 29px;
       
    }
   
`

const DescriptionText = styled.p `
   font-size: 24px;
   font-weight: 400;
   line-height: 36px;
   max-width: 650px;
   padding-bottom: 30px;

   @media (max-width:1185px) { 
        font-size: 20px;
        text-align: flex-start;
   }

   @media (max-width:600px)  {
       font-size: 16px;
    }
    @media (max-width:520px)  {
       font-size: 14px;
    }

`

const ButtonContainer= styled.div `
    padding-bottom: 40px;
   
    
   @media (max-width:1185px) { 
       text-align: flex-start;
   }

    @media (max-width:600px)  {
       display: flex;
       width: auto;
       flex-direction: column;
    }
   
`
const LeftButton = styled.button `
   padding: 17px 47px;
   border-radius: 50px;
   border: none;
   background-color: #0B0909;
   color: white;
   font-size: 13px;
   font-weight: 600;
   text-transform: uppercase;
   letter-spacing: 1px;
   line-height: 14px;
   margin-right: 10px;
   cursor: pointer;
   border: 2px solid rgb(25, 20, 20);

   &:hover { 
    background-color: black;
    transform: scale(1.05);
   }

   
   @media (max-width:600px)  {
       margin-bottom: 20px;
    }


   

`

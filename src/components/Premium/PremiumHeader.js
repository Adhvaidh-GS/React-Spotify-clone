import React from 'react'
import styled from 'styled-components'

function PremiumHeader() {
    return (
        <Container>
            <HeaderContainer>
                <LeftContainer>
                <TitleText>
                Explore Premium. Now 3 months free.      
                </TitleText>
                <DescriptionText>
                    Enjoy ad-free music listening, offline playback, and more. Cancel anytime.
                </DescriptionText>
                <ButtonContainer>
                    <LeftButton>
                        Get 3 Months Free
                    </LeftButton>
                    <RightButton>
                        View Plans
                    </RightButton>
                </ButtonContainer>
                <AboutContainer>
                Monthly subscription fee applies after. Open only to users who haven't already tried Premium. Offer excludes Family and Duo plans.<span>Terms and conditions apply.</span>  Offer ends 30 September 2021.
                </AboutContainer>
            </LeftContainer>   
            <RightContainer>
               <RightImg src="https://i.scdn.co/image/ab671c3d0000f4307f4523881179bfd1eb0eecfd" />
            </RightContainer> 
        </HeaderContainer>
        </Container>
    )
}

export default PremiumHeader



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
    }


`

const LeftContainer = styled.div`
    max-width: 650px;
    margin: auto;
    color: #fff;

    @media (max-width:1185px) {
        margin: 20px;
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
   font-size: 40px;
   line-height: 48px;
   font-weight: 700;
   padding-bottom: 30px;
   max-width: 400px;

   @media (max-width:600px)  {
       font-size: 35px;
       padding-bottom: 10px;
    }

    @media (max-width:520px)  {
       font-size: 30px;
       
    }
   
`

const DescriptionText = styled.p `
   font-size: 24px;
   font-weight: 400;
   line-height: 36px;
   padding-bottom: 30px;

   @media (max-width:600px)  {
       font-size: 20px;
    }
    @media (max-width:520px)  {
       font-size: 18px;
    }

`

const ButtonContainer= styled.div `
    padding-bottom: 40px;

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
   border: 2px solid rgb(25, 20, 20);

   &:hover { 
    background-color: black;
    transform: scale(1.05);
   }
   
   @media (max-width:600px)  {
       margin-bottom: 20px;
    }


   

`
const RightButton = styled(LeftButton) `
   background-color: rgb(178, 44, 21);
   border: 2px solid rgb(255, 255, 255);
   cursor: pointer;

   &:hover {
    background-color:#9B2612 ;
   }

   
`
const AboutContainer = styled.p`
    padding-bottom: 70px;
    font-size: 12px;
    line-height:16px;
    font-weight: 400;

    span {
        text-decoration:  underline;
        cursor: pointer;
    }

    @media (max-width:600px)  {
       font-size: 10px;
    }

`
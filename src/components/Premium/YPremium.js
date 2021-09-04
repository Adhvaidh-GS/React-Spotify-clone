import React from 'react'
import styled from 'styled-components'


function YPremium() {
    return (
        <Section>
            <TopicContainer>
                Why go Premium?
            </TopicContainer>
        <AboutContainer>    
        <PremiumContainer>
        <ImageContainer src="https://i.scdn.co/image/ab671c3d0000f43009302fbaf6259b4c117c704f" />
            <TextContainer>
            Download music.
            </TextContainer>
            <DescriptionContainer>
            Listen anywhere.
            </DescriptionContainer>  
            </PremiumContainer>
            <PremiumContainer>
        <ImageContainer src="https://i.scdn.co/image/ab671c3d0000f43098292b95d24a697c20df5137" />
            <TextContainer>       
                No ad interruptions.
            </TextContainer>
            <DescriptionContainer>
                Enjoy nonstop music.
            </DescriptionContainer>  
            </PremiumContainer>
            <PremiumContainer>
        <ImageContainer src="https://i.scdn.co/image/ab671c3d0000f4306998d3ffd58aad6da6afdf67" />
            <TextContainer>
                Play any song.
            </TextContainer>
            <DescriptionContainer>
                Even on mobile.
            </DescriptionContainer>  
            </PremiumContainer>
            <PremiumContainer>
        <ImageContainer src="https://i.scdn.co/image/ab671c3d0000f430cd6c528745e510c5be63a012" />
            <TextContainer>
                Unlimited skips.
            </TextContainer>
            <DescriptionContainer>
                Just hit next.
            </DescriptionContainer>  
            </PremiumContainer>
            </AboutContainer>
        </Section>
    )
}

export default YPremium


const Section = styled.div `
    min-height: 600px;
`
const TopicContainer = styled.h1`
    text-align: center;
    padding-top: 60px;
    font-size: 40px;
    line-height: 46px;
    font-weight: 700;

    @media (max-width:600px) {
       font-size: 38px;
    }
`

const AboutContainer = styled.div`
    display: flex;
    margin-top: 70px;
    margin-right: 10px;


    @media (max-width:760px) {
       flex-direction: column;
       margin-top: 30px;
    }


`

const PremiumContainer = styled.div`
   margin: 30px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;




`
const ImageContainer = styled.img`
    max-width: 120px;

    @media (max-width:600px) {
       width: 100px
    }
`
const TextContainer = styled.div`
    padding-top: 30px;
    font-size: 21px;
    line-height: 27px;
    font-weight: 700;
    
`

const DescriptionContainer = styled.div`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

`

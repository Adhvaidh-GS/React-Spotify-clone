import React from 'react'
import styled from 'styled-components'

function SupportVisit() {
    return (
        <Container>
            <TextContainer>
                Visit the Community
            </TextContainer>
            <DescriptionContainer>
                Have questions? Find answers from our worldwide Community of expert fans!
            </DescriptionContainer>
            <ButtonContainer>
                Find Answers
            </ButtonContainer>
        </Container>
    )
}

export default SupportVisit

const Container = styled.div`
    min-height: 350px;
    text-align: center;
`
const TextContainer = styled.h1`
    font-size: 48px;
    padding-top: 50px;
    line-height: 56px;
    padding-bottom: 30px;
    font-weight: 700;


    @media (max-width:850px) {
        font-size: 42px;
    }
`
const DescriptionContainer = styled.p`
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    margin: auto;
    max-width: 450px;
    padding-bottom: 40px;

    @media (max-width:850px) {
        font-size: 16px;
    }


`
const ButtonContainer = styled.button`
    padding: 14px 32px;
    border-radius: 50px;
    border: none;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    background-color: #1ed760;
    transition: 250ms;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        background-color: #21e065;
    }
`
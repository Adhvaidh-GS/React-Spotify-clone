import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

function SupportNav() {
    return (
        <Section>
            <Container>
                <NavItems>
                <TextHeader>
                    <TextContainer>
                        Account Help
                    </TextContainer>
                    <FontAwesomeIcon id="chevron-down" icon={faChevronDown}/>
                    <FontAwesomeIcon id="chevron-up" icon={faChevronUp}/>
                </TextHeader>    
                    <SupportItems id="list">
                        <li>Logging in</li>
                        <li>Profile help</li>
                        <li>Account settings</li>
                        <li>Security</li>
                    </SupportItems>
                </NavItems>
                <NavItems>
                <TextHeader>
                    <TextContainer>
                        Payment Help
                    </TextContainer>
                    <FontAwesomeIcon id="chevron-down" icon={faChevronDown}/>
                    <FontAwesomeIcon id="chevron-up" icon={faChevronUp}/>
                </TextHeader>    
                    <SupportItems>
                        <li>Manage payments</li>
                        <li>Payment methods</li>
                        <li>Charge help</li>
                    </SupportItems>
                </NavItems>
                <NavItems>
                <TextHeader>
                    <TextContainer>
                        Plan Help
                    </TextContainer>
                    <FontAwesomeIcon id="chevron-down" icon={faChevronDown}/>
                    <FontAwesomeIcon id="chevron-up" icon={faChevronUp}/>
                </TextHeader>
                    <SupportItems>
                        <li>Available plans</li>
                        <li>Plan settings</li>
                        <li>Premium Family & Kids</li>
                        <li>Premium Student</li>
                        <li>Premium Duo</li>
                    </SupportItems>
                </NavItems>
                <NavItems>
                <TextHeader>
                    <TextContainer>
                        App Help
                    </TextContainer>
                    <FontAwesomeIcon id="chevron-down" icon={faChevronDown}/>
                    <FontAwesomeIcon id="chevron-up" icon={faChevronUp}/>
                </TextHeader>
                    <SupportItems>
                        <li>Getting started</li>
                        <li>App settings</li>
                        <li>Troubleshooting</li>
                        <li>Playlist</li>
                        <li>Features</li>
                        <li>Social features</li>
                        <li>Voice assistants</li>
                    </SupportItems>
                </NavItems>
                <NavItems>
                <TextHeader>
                <TextContainer>
                    Device Help
                </TextContainer>
                    <FontAwesomeIcon id="chevron-down" icon={faChevronDown}/>
                    <FontAwesomeIcon id="chevron-up" icon={faChevronUp}/>
                </TextHeader>
                <SupportItems>
                    <li>Speakers</li>
                    <li>Smart watches</li>
                    <li>TVs</li>
                    <li>Gaming</li>
                    <li>Cars</li>
                    <li>Car Thing</li>
                </SupportItems>
            </NavItems>
            <NavItems>
            <TextHeader>
                <TextContainer>
                     Data & Privacy
                </TextContainer>
                    <FontAwesomeIcon id="chevron-down" icon={faChevronDown}/>
                    <FontAwesomeIcon id="chevron-up" icon={faChevronUp}/>
                </TextHeader>
                <SupportItems>
                    <li>Listening privacy</li>
                    <li>Data privacy info</li>
                </SupportItems>
            </NavItems>

            </Container>
        </Section>   
    )
}

export default SupportNav

const Section = styled.div`
    background-color: rgb(238,238,238);
    min-height: 600px;
    width: 100%;
`

const Container = styled.div`
    margin: auto;
    display: flex;
    padding-top: 50px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 100px;
    max-width: 992px;

    @media (max-width:620px) {
        flex-direction: column;
        gap: 0;
    }

`
const NavItems = styled.div`
    margin: 30px;

    @media (max-width:620px) {
        margin: 10px;
    }
    
`

const TextHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width:1600px) {
    #chevron-up, #chevron-down {
        display: none;
    }
    }

    @media (max-width:620px) {
    #chevron-down {
        display: block;
    }
   
}

`


const TextContainer = styled.h1`
    font-size: 24px;
    line-height: 32px;
    text-align: start;
 
    @media (max-width:620px) {
        cursor: pointer;
    
    }

`
const SupportItems = styled.ul`
   padding-inline-start: 0;
    margin-top: 30px;
    max-width: 300px;

    li{ 
        color: #117a37;
        font-weight: 700;
        padding-bottom: 10px;
        font-size: 18px;

        &:hover {
            text-decoration: underline;
        }
        
    }


    @media (max-width:620px) {
        max-height: 0;
        overflow: hidden;
    }


`


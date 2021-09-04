import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons' 

function Footer() {
    return (
        <Container>
            <FooterContainer>
                <LogoContainer src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"/>
                <NavMenu>
                    <Nav1>
                        <h2>Company</h2>
                        <li>About</li>
                        <li>Jobs</li>
                        <li>For the Record</li>
                    </Nav1>
                    <Nav2>
                        <h2>Communities</h2>
                        <li>For Artists</li>
                        <li>Developers</li>
                        <li>Advertising</li>
                        <li>Investors</li>
                        <li>Vendors</li>
                    </Nav2>
                    <Nav3>
                        <h2>Useful links</h2>
                        <li>Support</li>
                        <li>Web Player</li>
                        <li>Free Mobile App</li>
                    </Nav3>
                </NavMenu>
                <SocialLink>
                <span>
                    <FontAwesomeIcon icon={faInstagram} />
                </span>
                <span>
                    <FontAwesomeIcon icon={faTwitter} /> 
                </span>
                <span>
                    <FontAwesomeIcon icon={faFacebookF} />
                </span>
                </SocialLink>
            </FooterContainer>
            <FooterBottom>
                <ul>
                    <li>Legal</li>
                    <li>Privacy Center</li>
                    <li>Privacy Policy</li>
                    <li>Cookies</li>
                    <li>About Ads</li>
                    <li>Additional CA Privacy Disclosures</li>
                    <li></li>
                </ul>
            </FooterBottom>
        </Container>
    )
}

export default Footer

const Container = styled.footer `
    background-color: black;
`
const FooterContainer = styled.div `
   color: white;
   display: flex;
   padding: 80px 0 50px;
   margin: 0 20px;
   justify-content: space-evenly;

    @media (max-width:970px) {
        flex-direction: column;
        gap: 90px;
        margin-left: 15%;
    }

    @media (max-width:690px) {
        margin-left: 20px;
    }


`
const LogoContainer = styled.img `
   width: 120px;
    height: 100%;
    object-fit: cover;
    cursor: pointer;    
`
const NavMenu = styled.div `
   display: flex;
   gap: 80px;

   @media (max-width:690px) {
        flex-direction: column;
        gap: 20px;
        width: 150px;
    }



`
const Nav1 = styled.div `
    li {
        font-size: 16px;
        line-height: 1.5;
        padding: 3px 0 15px;
        margin-right: 30px;

        &:hover {
                color: #1ed760;
        }
    }
`
const Nav2 = styled(Nav1) `

`
const Nav3 = styled(Nav1) `

`

const SocialLink = styled.i `
    span {
        background-color: rgb(34,35,38);
        padding: 10px 15px;
        cursor: pointer;
        border-radius: 50%;
        margin-right: 20px;
        font-size: 26px;
        &:hover {
            color:#1ed760 ;
        }

    }
`

const FooterBottom = styled.div `
    color: rgb(145,148,150);
    font-size: 12px;
    margin-top: 40px;
    margin-left: 10%;
    padding-bottom: 50px;

    ul {
        display: flex;
        gap: 20px;
    }

    li {

        &:hover {
        color:#1ed760 ;
        }
    }

    @media (max-width:690px) {
        font-size: 10px;
        padding: 1em 0;
        margin-left: -10px;
    }

`

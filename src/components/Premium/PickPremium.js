import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


function PickPremium() {
    return (
        <Container id="plans">
            <Title> 
                Pick your Premium
            </Title>
            <Description> 
            Listen without limits on your phone, speaker, and other devices.
            </Description>
            <ImgContainer>
                <CardImg src="https://content-tooling.spotifycdn.com/images/c870a1e1-f980-4626-ab1b-14eeb8d4cab4_visa.svg"/>
                <CardImg src="https://content-tooling.spotifycdn.com/images/e5ebed70-82ea-42ae-917d-b3edb7ed98ef_mastercard.svg"/>
                <CardImg src="https://content-tooling.spotifycdn.com/images/3fcc3442-3a00-455f-9256-d3115ac3e382_amex.svg"/>
                <CardImg src="https://content-tooling.spotifycdn.com/images/205f3c09-6649-42db-8bf3-7a356be0ae37_discover.svg"/>
                <CardImg src="	https://i.scdn.co/image/ab671c3d0000f4300e2f169bed4bb2798accb287"/>
            </ImgContainer>
            <PriceSection>
                <Card>
                    <CardBadge>
                        3 months free
                    </CardBadge>
                    <CardTitle>
                        Individual                    
                    </CardTitle>
                    <CardDescription>
                        $9.99/month after offer period
                    </CardDescription>
                    <CardAccount>
                        1 account
                    </CardAccount>
                    <CardBreak/>
                    <CardDetails>
                        <li><FontAwesomeIcon icon={faCheck}/>Listen to music ad-free</li>
                        <li><FontAwesomeIcon icon={faCheck}/>Play anywhere - even offline</li>
                        <li><FontAwesomeIcon icon={faCheck}/>On-demand playback</li>
                    </CardDetails>
                    <CardButton>
                    GET STARTED
                    </CardButton>
                    <CardAbout>
                    Monthly subscription fee applies after. Open only to users who haven't already tried Premium. Offer excludes Family and Duo plans.<span>Terms and conditions apply.</span>Offer ends 30 September 2021.
                    </CardAbout>
                </Card>
                <Card>
                    <CardBadge>
                        1 month free
                    </CardBadge>
                    <CardTitle>
                        Duo                    
                    </CardTitle>
                    <CardDescription>
                        $12.99/month after offer period
                    </CardDescription>
                    <CardAccount>
                        2 accounts
                    </CardAccount>
                    <CardBreak/>
                    <CardDetails>
                        <li><FontAwesomeIcon icon={faCheck}/>2 Premium accounts for a couple under one roof</li>
                        <li><FontAwesomeIcon icon={faCheck}/>Duo Mix: a playlist for two, regularly updated with music you both enjoy</li>
                        <li><FontAwesomeIcon icon={faCheck}/>Ad-free music listening, play offline, on-demand playback</li>
                    </CardDetails>
                    <CardButton>
                    GET STARTED
                    </CardButton>
                    <CardAbout>
                        <span>Terms and conditions apply.</span> 1 month free not available for users who have already tried Premium.
                    </CardAbout>
                </Card>
                <Card>
                    <CardBadge>
                        1 month free
                    </CardBadge>
                    <CardTitle>
                        Family                    
                    </CardTitle>
                    <CardDescription>
                        $15.99/month after offer period
                    </CardDescription>
                    <CardAccount>
                        6 accounts
                    </CardAccount>
                    <CardBreak/>
                    <CardDetails>
                        <li><FontAwesomeIcon icon={faCheck}/>6 Premium accounts for family members living under one roof</li>
                        <li><FontAwesomeIcon icon={faCheck}/>Family Mix: a playlist for your family, regularly updated with music you all enjoy</li>
                        <li><FontAwesomeIcon icon={faCheck}/>Block explicit music</li>
                        <li><FontAwesomeIcon icon={faCheck}/>Ad-free music listening, play offline, on-demand playback</li>
                        <li><FontAwesomeIcon icon={faCheck}/>Spotify Kids: a separate app made just for kids</li>
                    </CardDetails>
                    <CardButton>
                    GET STARTED
                    </CardButton>
                    <CardAbout>
                    <span>Terms and conditions apply.</span> 1 month free not available for users who have already tried Premium.
                    </CardAbout>
                </Card>
                <Card>
                    <CardBadge>
                        3 months free
                    </CardBadge>
                    <CardTitle>
                        Student          
                    </CardTitle>
                    <CardDescription>
                        $4.99/month after offer period
                    </CardDescription>
                    <CardAccount>
                        1 account
                    </CardAccount>
                    <CardBreak/>
                    <CardDetails>
                        <li><FontAwesomeIcon icon={faCheck}/>Hulu (ad-supported) plan</li>
                        <li><FontAwesomeIcon icon={faCheck}/>SHOWTIME</li>
                        <li><FontAwesomeIcon icon={faCheck}/>Listen to music ad-free</li>
                        <li><FontAwesomeIcon icon={faCheck}/>Play anywhere - even offline</li>
                        <li><FontAwesomeIcon icon={faCheck}/>On-demand playback</li>
                    </CardDetails>
                    <CardButton>
                    GET STARTED
                    </CardButton>
                    <CardAbout>
                        Offer currently includes access to Hulu (ad-supported) plan and SHOWTIME Streaming Service, subject to eligibility. Available only to students at an accredited higher education institution. 1 month free only open to higher education students who haven't already tried Premium. T<span>Terms and conditions apply.</span>
                    </CardAbout>
                </Card>
    
            </PriceSection>
        </Container>
    )
}


export default PickPremium


const Container = styled.div`
    width: 100%;
    text-align: center;
    height:100%;
    background-color: rgb(239,239,239);
`
const Title = styled.h1`
    padding-top: 60px;
    font-size: 32px;
    font-weight: bold;
    line-height: 1;
    
`
const Description = styled.p`
    margin: 10px 0;
    font-size: 16px;
    
`
const ImgContainer = styled.div`
    margin-top: 16px;
    
`

const CardImg = styled.img`
    width: 32px;
    margin-right: 10px;
`




const PriceSection = styled.div`
    padding-bottom: 50px;
    display: flex;
    margin: 0 20px;    
    align-items: center;
    justify-content: center;

    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
    }

`

const Card = styled.div`
    height:700px;
    margin:30px 10px;
    border-radius: 10px;
    width: 250px;
    box-shadow:  rgb(255 255 255) 0px -9px 0px 0px, rgb(0 0 0 / 30%) 0px 0px 8px;
    background-color: white;
    text-align: start;
    padding-left: 20px;
    padding-top: 20px;


    @media (max-width: 1200px) {
        width: 400px;
        height: 100%;
        padding-bottom: 30px;
    }

    @media (max-width: 450px) {
        width: 100%;
    }

`
const CardBadge = styled.div`
    background-color: rgb(46,119,208);
    width: 100px;
    font-weight: bold;
    padding: 4px;
    text-align: center;
    font-size: 14px;
    border-radius: 5px;
    color: white;
`
const CardTitle = styled.h1`
    padding-top: 10px;
    font-size: 24px;
    line-height: 24px;
    font-weight: 700;

`
const CardDescription = styled.p`
    font-size: 16px;
    line-height: 22px;
    font-weight: 500;
    padding-top: 10px;
`
const CardAccount = styled(CardDescription)`
    padding-top: 5px;
    padding-bottom: 10px;
`
const CardBreak = styled.hr`
    margin-right: 10px;
`

const CardDetails = styled.div`
    height: 300px;
    padding-top: 20px;

    li {
        margin-bottom: 10px;
        font-weight: 400;
        cursor: default;
    }

    @media (max-width: 1200px) {
        height: 100%;
        padding-bottom: 20px;
    }


`
const CardButton = styled.button`
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
   text-align: center;
   margin-left: 12px;
   cursor: pointer;
   border: 2px solid rgb(25, 20, 20);
   transition: 250ms;

   &:hover { 
    background-color: black;
    transform: scale(1.05);
   }

   @media (max-width: 1200px) {
       margin-left: 23%;
    }
    @media (max-width: 370px) {
        margin-left: 15%;
        
    }

`
const CardAbout = styled.p`
    color: #535353;
    font-size: 12px;
    line-height: 16px;
    padding-top: 20px;
    font-weight: 400;
    cursor: default;
    span {
        text-decoration: underline;
        cursor: pointer;
    }

`





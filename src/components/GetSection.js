import React from 'react'
import styled from 'styled-components'

function GetSection() {
    return (
        <Container>
            <Section>    
                <TextContainer>
                    <Badge>
                    SPOTIFY FREE
                    </Badge>
                    <TitleContainer>
                    Listening is everything
                    </TitleContainer>
                    <SubTitle>
                    Millions of songs and podcasts. No credit card needed.
                    </SubTitle>
                    <GetButton>
                    Get Spotify Free
                    </GetButton>
                </TextContainer>
            </Section>    
        </Container>
    )
}

export default GetSection


const Container = styled.main`
    margin: 0 auto;
`

const Section = styled.div`
    min-height: 600px;
    background-image: url("https://content-tooling.spotifycdn.com/images/b236bf87-bfd5-4bcb-b51a-77881073039c_lie_circles.svg");
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: right center;
    background-color: rgb(41, 65, 171);

    @media (max-width:1185px) {
        background-image: url("https://content-tooling.spotifycdn.com/images/1d2242b4-f071-4244-a276-3bcdc58e77cf_lie_circles-tablet.svg");
        background-position: 65% 55%;
        background-size: auto 115%;
        background-repeat: no-repeat;
    }

`

const TextContainer = styled.div `
    padding: 12% 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    color: #1ed760;
    width: 1275px;
    justify-content: flex-start;

    @media (max-width:1200px) {
        width: 800px;
    }
    
    @media (max-width:1185px) {
        width: auto;
        text-align: center;
        padding: auto;
    }

`
const Badge = styled.h5`
    font-size: 14px;
    margin: 16px 0 32px;
    line-height: 16px;
    letter-spacing: 0.1em;

    @media (max-width:1185px) {
        margin-top: -20px;
        margin-bottom: 96px;
        font-size: 10px;  
        font-weight: 400;
    }

`

const TitleContainer = styled.h1`
    font-size: 60px;
    min-width: 372px;
    letter-spacing: -0.02em;

    @media (max-width:750px) {
        margin: 0 0 8px;
        font-size: calc(24px + 8 * ((100vw - 320px) / 160));
    }

    @media (max-width:600px)  {
        min-width: auto;
    }

`
const SubTitle = styled.p`
    margin: 32px 0 40px;
    font-size: 24px;
    line-height: 1.5;
    font-weight: 400;
    max-width: 558px;
    letter-spacing: 0.25px;

    @media (max-width:1185px) {
        max-width: 100%;
    }

    @media (max-width:750px) {
       font-size: 18px;
       line-height: 1.5;
    }
   

`
const GetButton = styled.button`
    padding: 17px 48px;
    width: 250px;
    border-radius: 50px;
    border: none;
    margin-top: 20px;
   background-color: #1ED760;
   color: #2941AB;
   font-size: 14px;
   font-weight: 600;
   text-transform: uppercase;
   letter-spacing: 1px;
   cursor: pointer;
   transition: 250ms;

    &:hover {
        background-color: #43E57D;
        transform: scale(1.05);
    }

    @media (max-width:1185px) {
        margin: auto;
    } 

    @media (max-width:600px)  {
        padding: auto;
        width: auto;
    }
`






// const Container = styled.main`
//     position: relative;
//     height: 100vh;
//     display: flex;

  
//     &:before {
//         background: url("https://www-growth.scdn.co/static/home/bursts.svg");
//         position: absolute;
//         background-color: rgb(41, 65, 171);
//         content: "";
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         z-index: -1;
//         background-position: 46% 4%;
//         background-size: 175%;
//     }
    
//     @media (max-width:1200px) {
//         &:before {
//         background: url("https://www-growth.scdn.co/static/home/bursts-tablet.svg"); 
//         background-size: 153%;
//         background-position: right 40% center;
//         background-color: rgb(41, 65, 171);
//         justify-content: center;
//         background-repeat: no-repeat;
       




//         /* @media (max-width: 1200px) {
//             min-height: 846px;

//         } */

//         @media (max-width: 560px) {
//             top: -15%;

//         }
//     }
//     }
   
// `
// const TextContainer = styled.div `
//     width: 900px;
//     height: 500px;
//     margin: 11% auto;
//     display: flex;
//     flex-direction: column;
//     text-align: center;
//     align-items: center;

//     @media (max-width:1200px) {
//         margin: 16% auto;
//         justify-content: center;
//     }

//     @media (max-width:725px) {
//        margin: 14% 10%;
//     }

//     @media (max-width:570px) {
//        margin: 12% 0;
//     }


// /* 
//     @media (max-width:800px) {
//         margin: 20% 0;
//     }

//     @media (max-width:740px) {
//        margin: 120px 0;
        
//     }

//     @media (max-width:700px) {
//        margin: 150px -10px;
        
//     } */


//     /* @media (max-width:660px) {
//        margin: 160px 20px;
//     }

//     @media (max-width:600px) {
//        margin: 160px 0;
//        width: 300px;
//     }
//  */


// `


// const TitleContainer = styled.h1`
//     font-size: 156px;
//     text-indent: -3.2em;
//     transform: translate(125px, 0px);
//     color: #1ed760;
//     letter-spacing: -10px;
//     line-height: 166px;
//     padding-bottom: 52px;

//     @media (max-width:1200px) {
//         font-size: 104px;
//         text-indent: 0;
//         width: 754px;
//         letter-spacing: -5px;
//         line-height: 104px;
//         padding-bottom: 10px;
//         margin-left: -27%;
//     }

//     @media (max-width:820px) {
//        width: 500px;
    
//     }

//     @media (max-width:725px) {
//       margin-left: -50%;
    
//     }

//     @media (max-width:570px) {
//       font-size: 85px;
//       width: 400px;
//     }

//     @media (max-width:450px) {
//         font-size: 65px;
//         line-height: 70px;
//         margin-left: -60%;
//         letter-spacing: -1px;
//     }
//     @media (max-width:360px) {
//         font-size: 65px;
//         line-height: 70px;
//         margin-left: -70%;
//     }


// `
// const SubTitle = styled.p `
//     font-size: 18px;
//     text-align: center;
//     color:  #1ed760;
//     font-weight: 500;
//     padding-bottom: 40px;
//     line-height: 24px;



//     @media (max-width:1200px) {
//         width: 400px;
//         margin: 30px 50px;
//         padding-bottom: 10px;
//     }

//     @media (max-width:570px) {
//         font-size: 16px;
//         width: 350px;
//     }

//     @media (max-width:450px) {
//         font-size: 14px;
//         width: 300px;
//     }

//     /* @media (max-width:700px) {
//         width: 400px;
//         margin: auto;
//         padding: 0; 
//     } */

// `

// const GetButton = styled.button`
//     text-transform: uppercase;
//     padding: 14px 32px;
//     font-size: 14px;
//     border-radius: 500px;
//     background-color: #1ED760;
//     border: none;
//     color: #2941AB;
//     font-weight: 600;
//     cursor: pointer;
//     transition:200ms ease-in -1s;

//     &:hover {
//         transform: scale(1.05);
//         background-color: rgb(30,215,96,) ;
//     }

//     @media (max-width:450px) {
//         font-size: 12px;
        
//     }
// `

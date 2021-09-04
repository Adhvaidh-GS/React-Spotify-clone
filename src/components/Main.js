import React from 'react'
import styled from 'styled-components'
import GetSection from './GetSection'
import HeroSection from './HeroSection'

function Main() {
    return (
        <Container>
            <HeroSection />
            <GetSection/>
        </Container>
    )
}

export default Main

const Container = styled.div`

`

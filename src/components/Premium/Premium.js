import React from 'react'
import styled from 'styled-components'
import PickPremium from './PickPremium'
import PremiumHeader from './PremiumHeader'
import YPremium from './YPremium'

function Premium() {
    return (
        <Section>
            <PremiumHeader/>
            <YPremium/>
            <PickPremium/>
        </Section>
    )
}

export default Premium

const Section = styled.div`

`
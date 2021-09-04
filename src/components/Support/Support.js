import React from 'react'
import styled from 'styled-components'
import SupportHeader from './SupportHeader'
import SupportNav from './SupportNav'
import SupportVisit from './SupportVisit'


function Support() {
    return (
        <Section>
            <SupportHeader/>
            <SupportNav />
            <SupportVisit />
        </Section>
    )
}

export default Support

const Section = styled.div`

`
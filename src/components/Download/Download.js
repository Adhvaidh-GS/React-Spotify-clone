import React from 'react'
import styled from "styled-components"
import DownloadDevice from './DownloadDevice'
import DownloadHeader from './DownloadHeader'
import DownloadNow from './DownloadNow'

function Download() {
    return (
        <Container>
            <DownloadHeader/>
            <DownloadNow/>
            <DownloadDevice/>
        </Container>
    )
}

export default Download

const Container = styled.div`

`
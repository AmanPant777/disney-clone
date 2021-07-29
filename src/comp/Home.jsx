import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Recommend from './Recommend'
const Home = () => {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommend />
        </Container>
    )
}
export default Home
const Container = styled.main`
min-height: calc(100vh-250px);
overflow-x: hidden;
display: block;
position: relative;
top: 72px;
padding: 0 calc(3.5vw +5px);
&:after{
    background: url('images/home-background.png');
    background-position: center;
    object-fit: cover;
    background-repeat: no-repeat;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
}
`
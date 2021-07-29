import React from 'react'
import styled from 'styled-components'
const Viewers = () => {
    return (
        <Container>
            <Wrap>
                <img src="images/viewers-disney.png" alt="" />
                <video autoPlay={true} playsInline={true} loop={true}>
                    <source src='videos/1564674844-disney.mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src="images/viewers-marvel.png" alt="" />
                <video autoPlay={true} playsInline={true} loop={true}>
                    <source src='videos/1564676115-marvel.mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src="images/viewers-national.png" alt="" />
                <video autoPlay={true} playsInline={true} loop={true}>
                    <source src='videos/1564676296-national-geographic.mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src="images/viewers-pixar.png" alt="" />
                <video autoPlay={true} playsInline={true} loop={true}>
                    <source src='videos/1564676714-pixar.mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src="images/viewers-starwars.png" alt="" />
                <video autoPlay={true} playsInline={true} loop={true}>
                    <source src='videos/1608229455-star-wars.mp4' />
                </video>
            </Wrap>
        </Container>
    )
}
export default Viewers
const Container = styled.div`
margin-top: 30px;
padding: 30px 0 26px;
display: grid;
grid-gap: 25px;
gap: 25px;
grid-template-columns: repeat(3,minmax(0,1fr));
@media (max-width:768px){
    grid-template-columns: repeat(1,minmax(0,1fr));
}
`

const Wrap = styled.div`
border: 3px solid rgba(249,249,249,0.1);
padding-top: 56.25%;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
cursor: pointer;
position: relative;
overflow: hidden;
transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
max-width: 100%;
img{
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
}
video{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0;
    z-index:0;
    object-fit: contain;
    
}
&:hover{
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        transform: scale(1.05);
        border-color: rgba(249,249,249,.8);
        video{
            opacity:1;
        }
    }
`
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { selectOriginals } from '../redux/movieSlice'
const Originals = () => {
    const movies = useSelector(selectOriginals)
    return (
        <Container>
            <h4>Originals</h4>
            <Content>
                {movies && movies.map((movie, key) =>
                    <Wrap key={key}>
                        {movie.id}
                        <Link to={`/detail/` + movie.id}>
                            <img src={movie.cardImg} alt="" />
                        </Link>
                    </Wrap>
                )}
            </Content>
        </Container>
    )
}

export default Originals

const Container = styled.div`
padding: 0 0 26px;
`
const Content = styled.div`
display: grid;
grid-gap:25px;
gap: 25px;
grid-template-columns: repeat(4,minmax(0,1fr));
@media (max-width:768px){
    grid-template-columns: repeat(2,minmax(0,1fr));
}
`
const Wrap = styled.div`
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
padding-top: 56%;
border-radius: 10px;
cursor: pointer;
overflow: hidden;
position: relative;
border: 3px solid rgba(249,249,249,0.1);
transition: all 250ms cubic-bezier(0.25,0.45,0.46,0.94) 0s;
img{
    inset: 0px;
    object-fit: cover;
    height: 100%;
    width: 100%;
    top: 0;
    position: absolute;
    transition:opacity 650ms ease-in-out 0s ;
    opacity: 1;
    z-index: 1;
    
}
&:hover{
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249,249,249,0.8);
    transform: scale(1.05);
    }
`
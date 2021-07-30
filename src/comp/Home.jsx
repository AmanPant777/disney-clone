import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Recommend from './Recommend'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Trending from './Trending'
import { useDispatch } from 'react-redux'
import { selectUserName } from '../redux/userSlice'
import { setMovies } from '../redux/movieSlice'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import db from '../firebase'
const Home = () => {
    const dispatch = useDispatch()
    const username = useSelector(selectUserName)
    let trending = [];
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                switch (doc.data().type) {
                    case 'recommend':
                        recommends = [...recommends, { id: doc.id, ...doc.data() }];
                        break;
                    case 'new':
                        newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                        break;
                    case 'trending':
                        trending = [...trending, { id: doc.id, ...doc.data() }]
                        break;
                    case 'original':
                        originals = [...originals, { id: doc.id, ...doc.data() }]
                        break;
                    default:
                        break;
                }
            })
            dispatch(setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                originals: originals,
                trending: trending
            }))
        })
    }, [username])
    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommend />
            <NewDisney />
            <Originals />
            <Trending />
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
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../redux/userSlice'
import { useEffect } from 'react'
const Header = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const username = useSelector(selectUserName)
    const userphoto = useSelector(selectUserPhoto)
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user)
                history.push('/home')
            }
        })
    }, [username])
    const handleAuth = () => {
        if (!username) {
            auth.signInWithPopup(provider)
                .then(result => setUser(result.user))
                .catch(error => alert(error.message))
        } else if (username) {
            auth.signOut().then(() => {
                dispatch(setSignOutState())
                history.push('/')
            }).catch(error => alert(error.message))
        }

    }
    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
        }))
    }
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="" />
            </Logo>
            {!username ? (<Login onClick={handleAuth}>
                Login
            </Login>) : (
                <>
                    <NavMenu>
                        <a >
                            <img src="/images/home-icon.svg" alt="" />
                            <span>Home</span>
                        </a>
                        <a >
                            <img src="/images/search-icon.svg" alt="" />
                            <span>Search</span>
                        </a>
                        <a >
                            <img src="/images/watchlist-icon.svg" alt="" />
                            <span>WatchList</span>
                        </a>
                        <a >
                            <img src="/images/original-icon.svg" alt="" />
                            <span>Originals</span>
                        </a>
                        <a >
                            <img src="/images/movie-icon.svg" alt="" />
                            <span>Movies</span>
                        </a>
                        <a >
                            <img src="/images/series-icon.svg" alt="" />
                            <span>Series</span>
                        </a>
                    </NavMenu>
                    <SignOut>
                        <UserImg src={userphoto} />
                        <DropDown>
                            <span onClick={handleAuth}>Sign Out</span>
                        </DropDown>
                    </SignOut>

                </>
            )}


        </Nav>
    )
}
export default Header
const Nav = styled.nav`
position: fixed;
top: 0;
right: 0;
left: 0;
height: 70px;
display: flex;
background-color: #090b13;
justify-content: space-between;
letter-spacing: 1.6px;
align-items: center;
z-index: 3;
padding: 0 30px;
`
const Logo = styled.a`
padding: 0;
width: 80px;
margin-top: 4px;
display: inline-block;
max-height: 70px;
img{
    display: block;
    width: 100%;
}
`
const NavMenu = styled.div`
display: flex;
align-items: center;
flex-direction: row;
flex-wrap: nowrap;
height: 100%;
justify-content: flex-end;
margin: 0;
padding: 0;
margin-right: auto;
margin-left: 25px;
/* @media (max-width:768px){
    display: none;
} */
a{
display: flex;
align-items: center;
padding: 0 10px;
img{
    height: 20px;
    min-width: 20px;
    width: 20px;
}
span{
    color: rgb(249.249.249);
    font-size:13px;
    letter-spacing: 1.5px;
    line-height: 1.08;
    padding: 2px 0;
    position: relative;
    &:before{
    background-color: rgb(249,249,249);
    border-radius: 0 0 4px 4px ;
    bottom: -6px;
    content:'';
    height: 2px;
    opacity: 0;
    left: 0;
    position: absolute;
    right: 0;
    transform-origin: left center;
    transform: scaleX(0);
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    visibility: hidden;
    width: auto;
}
}
&:hover{span:before{
    transform: scaleX(1);
    visibility: visible;
    opacity: 1;
}}
}
`
const Login = styled.a`
background-color: rgba(0,0,0,0.6);
text-transform:uppercase;
padding: 8px 16px ;
letter-spacing: 1.5px;
border:1px solid #7c7070;
border-radius:4px;
transition: all 0.2s ease 0s;
&:hover{
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
}
`
const UserImg = styled.img`
/* border-radius: 50%; */
object-fit: contain;
`
const DropDown = styled.div`
position: absolute;
top: 48px;
right: 0;
background: rgb(19,19,19);
border: 1px solid rgba(151,151,151,0.3);
border-radius: 4px;
font-size: 14px;
padding: 5px;
letter-spacing: 3px ;
width: 100px;
max-width: 100px;
opacity: 0;
max-height: 30px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
const SignOut = styled.div`
height: 48px;
width:48px;
position: relative;
display: flex;
cursor: pointer;
align-items: center;
justify-content: center;
${UserImg}{
    border-radius: 50%;
    width: 100%;
    height: 100%;
}
&:hover{
    ${DropDown}{
        opacity: 1;
        transition-duration: 1s;
        opacity: 1;
    }
}
`

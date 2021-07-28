import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
const Header = () => {
    const handleAuth = () => {
        auth.signInWithPopup(provider)
            .then(result => console.log(result))
            .catch(error => alert(error.message))
    }
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="" />
            </Logo>
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
            <Login onClick={handleAuth}>
                Login
            </Login>
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
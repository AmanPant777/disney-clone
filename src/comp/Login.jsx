import React from 'react'
import styled from 'styled-components'
const Login = () => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src='/images/cta-logo-one.svg' />
                </CTA>
                <BgImage />
            </Content>
        </Container>
    )
}

export default Login
const Container = styled.section`
height: 100vh;
display: flex;
flex-direction: column;
text-align: center;
overflow: hidden;

`
const Content = styled.div`
min-height: 100vh;
margin-bottom: 10vw;
position: relative;
width: 100%;
box-sizing: border-box;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 80px 40px;
height: 100%;
`
const BgImage = styled.div`
background-image: url('/images/back.jpg');
height: 100%;
background-size: cover;
background-repeat: no-repeat;
position: absolute;
top: 0;
left: 0;
right: 0;
z-index:-1;
`
const CTA = styled.div`
border: 2px solid yellow;
margin-bottom: 2vw;
max-width: 650px;
width: 500px;
height: 600px;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 0;
text-align: center;
margin-right: auto;
margin-left: auto;
flex-wrap: wrap;
`
const CTALogoOne = styled.img`
margin-bottom:12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
border: 2px solid green;
`
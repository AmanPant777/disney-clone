import React from 'react'
import styled from 'styled-components'
const Login = () => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src='/images/cta-logo-one.svg' />
                    <SignUp>GET IT ALL THERE</SignUp>
                    <Description>
                        Get Premium Acess to Raya and the Last Dragon for an additional fee with a Disney+ subscription.
                        As of 25/07/2021 the Price of Disney+ and Disney bundle will increase bt $1.
                    </Description>
                    <CTALogoTwo src='/images/cta-logo-two.png' />
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
margin-bottom: 2vw;
max-width: 650px;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 0;
text-align: center;
margin-right: auto;
margin-left: auto;
flex-wrap: wrap;
transition-timing-function: ease-out;
transition: opacity 0.2s;
width: 100%;
`
const CTALogoOne = styled.img`
margin-bottom:12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;

`
const SignUp = styled.a`
background-color: #0063e5;
font-weight: bold;
color: #f9f9f9;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 17px 0;
border: 1px solid transparent;
border-radius: 5px;
&:hover{
    background-color: #0483ee;
}
`
const Description = styled.p`
color: hsla(0,0%,95%,3%,1);
font-size: 15px;
margin: 0 0 24px;
letter-spacing: 1.5px;
line-height: 1.5;
overflow: hidden;
width: 100%;
`
const CTALogoTwo = styled.img`
margin-bottom: 12px ;
max-width: 600px;
margin-top: 10px;
display: inline-block;
vertical-align: bottom;
width: 100%;
`
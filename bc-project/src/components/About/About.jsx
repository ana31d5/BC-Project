import React from 'react'
import styled from 'styled-components'
import AnimatedShapes from '../Home/AnimatedShapes'
import Blackimage from '../img/blackimage.jpg'

const Container = styled.div `
display: flex;

`

const Right = styled.div `
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 60px;

`

const Image = styled.img `
width: 55%;
padding: 20px;


`

const Left = styled.div `
width: 50%;
margin-top: 60px;

`

const Title = styled.span `
font-size: 70px;
`
const SubTitle = styled.span `
font-size: 24px;
font-weight: 550;
color: black;
margin-top: 30px;

`
const Desc = styled.p `
font-size: 20px;
color: black;
margin-top: 30px;
font-weight: 400;

`

const Button = styled.button `
margin-top: 20px;
width: 150px;
border-color: wheat;
padding: 15px 20px;
background-color: darkred;
color: wheat;
font-size: 20px;
border-radius: 20px;
cursor: pointer;

`

const About = () => {
  return (
    <Container>

        <Left> 
            
            <Image src= {Blackimage} />

         </Left>

         <Right>

             <Title> 
                <b>Request</b> <br/> 
                 <b>Accept</b> <br/>
                 <b>Promote</b> <i>Securely</i> <br/>
                 
             </Title>

             <SubTitle>
                 Request for an Influncer to <br/>
                 Promote your Brand Today

             </SubTitle>

             <Desc>
                 We ensure that are clients a securely getting their services they require from the promoter <br/>
                 We also ensure that the promoter receives the requested payment securely.
             </Desc>

             <Button>
                 Find out About our Services

             </Button>


         </Right>

         <AnimatedShapes/>


    </Container>
  )
}

export default About
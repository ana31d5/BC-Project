import React from 'react'
import styled from 'styled-components'
import MiniCard from '../MiniCard/MiniCard'
import glasses from '../img/glasses.jpeg'
import phone from '../img/phone.jpeg'
import './service.css'
// import {BsSearch} from 'react-icons/bs'


const Container = styled.div`
display: flex;
height: 100%;

`


const Left = styled.div`
width: 50%;
background-color: rgba(29,29,29,1);
opacity: 0.95;

`

const Image = styled.img`
 position: relative;
 width: 480px;
 height: 680px;

`

const Right = styled.div`
width: 50%;
background-color: #615140;
opacity: 0.98

`

const Wrapper = styled.div`
 padding: 50px;
 display: flex;
 flex-direction: column;

`

const Title = styled.h1`
width: 50%;
color: wheat;

`
const Desc = styled.p`
font-size: 20px;
margin-top: 20px;
color: wheat;


`

const CardContainer = styled.div `
margin-top: 50%;
display: flex;
justify-content: space-around;
width: 500px;

`
const Button = styled.button `
margin-top: 20px;
width: 180px;
border-color: wheat;
padding: 15px 20px;
background-color: darkred;
color: wheat;
font-size: 20px;
border-radius: 20px;
cursor: pointer;
position: relative;
right: 0px;
bottom: 200px;
font-family: 'Montserrat';

`


const service = () => {
  return (
    <Container>

      <Left> 
      
      <div id='img3'> <Image src= {glasses} /> </div>

      </Left>

      <Right>
        <Wrapper>
          <Title> Our Services </Title>
          <Desc>   Click on how you woud like your brand to be promoted


          </Desc>

          <CardContainer>

            <MiniCard/>  


          </CardContainer>

          <Button> Click Here  </Button>
          
          
          </Wrapper> 

      </Right>


    </Container>
   
  )
}

export default service
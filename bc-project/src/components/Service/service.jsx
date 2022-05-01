import React from 'react'
import styled from 'styled-components'
import MiniCard from '../MiniCard/MiniCard'
// import {BsSearch} from 'react-icons/bs'


const Container = styled.div`
display: flex;
height: 100%;

`


const Left = styled.div`
width: 50%;

`

const Image = styled.img`
 height: 100%;

`

const Right = styled.div`
width: 50%;

`

const Wrapper = styled.div`
 padding: 50px;
 display: flex;
 flex-direction: column;

`

const Title = styled.h1`
width: 50%;

`
const Desc = styled.p`
font-size: 20px;
margin-top: 20px;


`

const CardContainer = styled.div `
margin-top: 50%;
display: flex;
justify-content: space-between;

`
const Button = styled.button `
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  margin-top:30px;

`


const service = () => {
  return (
    <Container>

      <Left> </Left>
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
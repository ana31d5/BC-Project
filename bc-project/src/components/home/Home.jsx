import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
height: calc(100vh - 50px);
display: flex;
padding: 20px;

`

const Left = styled.div `
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Title = styled.h1 `
font-size: 60px;
width: 60%;
`

const Desc = styled.p `
width: 60%;
font-size: 20px;
margin-top: 20px;
`

const Info = styled.div `
width: 60%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 50px;


`
const Button = styled.button `
padding: 15px;

`

const Contact = styled.div `
display: flex;
flex-direction: column;


`
const Phone = styled.span `
color: black;

`

const ContactText = styled.span `
color: black;

`


const Right = styled.div `
width: 40%;

`



const Home = () => {
  return (
    <Container>
        <Left> <Title> Promote Your Brand With Us </Title> 
        <Desc>
          Safe and secure platform between Brands and Influencers.
          Our services provides you to send a request to your desired influencer.
          Are you tired of dming influencers, or getting scammed by influencer, sending requests?
          We provide servies that allows you to request how you want your brand to be promoted to your desired influencers 
          and ensures they completed the agreement.

        </Desc>

        <Info>
          <Button> CHECK OUR SERVICES </Button>

          <Contact>
            <Phone> Call Us on +447123123456</Phone>
            <ContactText> For any concerns or extra information</ContactText>


          </Contact>

        </Info>
        
        
        </Left>
        <Right> r </Right>
    </Container>
  )
}

export default Home
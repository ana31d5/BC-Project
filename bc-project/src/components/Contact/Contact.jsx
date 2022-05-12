import React from 'react'
import styled from 'styled-components'
import {BiMap} from 'react-icons/bi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiTwotoneMail} from 'react-icons/ai'


const Container = styled.div `
height: 90%;


`

const Wrapper = styled.div `
height: 100%;
padding: 20px;
display: flex;
align-items: center;
justify-content: center;

`

const FormContainer = styled.div `
width: 50%;

`

const Form = styled.form`
height : 250px;
display: flex;
align-items: center;
justify-content: center;

`
const Title = styled.h1 `
margin: 50px;
margin-top: 0;
`

const LeftForm = styled.div `
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-right:20px;
`

const RightForm = styled.div `
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;

`
const Input = styled.input `
width: 200px;
padding: 20px;

`

const TextArea = styled.textarea `
width: 200px;
height: 60%;
padding: 20px;

`
const Button = styled.button`
border: none;
background-color: darkred;
color: white;
font-size: 16px;
font-weight: bold;
padding: 15px;
border-radius: 10px;
cursor: pointer;

`

const AddressContainer = styled.div `
width: 50%;
display: flex;
flex-direction: column;
align-items: center;


`
const AddressItem = styled.div `
display: flex;
align-items: center;
margin-bottom: 50px;

`
const Icons = styled.div `
width: 20px;
margin-right: 20px;
`
const Text = styled.span `
font-size: 20px;
margin-right: 15px;
`

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
        <Title> Questions? <br/> Let's Get In Touch  </Title>
          <Form>
            
         <LeftForm> 
           
           <Input placeholder='Your Name' /> 
           <Input placeholder='Your Email' /> 
           <Input placeholder='Subject' /> 
           
           
           </LeftForm>
         <RightForm>
           <TextArea placeholder='Message'/>
           <Button> Send </Button>


         </RightForm>
           </Form>


        </FormContainer>

        <AddressContainer>

         <AddressItem>
          <Icons><BiMap/> </Icons>
           <Text> London, England </Text>

         </AddressItem>

         <AddressItem>

           <Icons><BsFillTelephoneFill/> </Icons>
           <Text> +44712345677 </Text>

           </AddressItem>

           <AddressItem>

           <Icons><AiTwotoneMail/> </Icons>
           <Text> contactus@promoteme.co.uk </Text>

         </AddressItem>

        </AddressContainer>


      </Wrapper>



    </Container>
  )
}

export default Contact;
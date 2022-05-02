import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
height: 90%;
background: url(https://static.vecteezy.com/system/resources/thumbnails/001/968/633/small/abstract-seamless-white-and-grey-square-3d-pattern-background-modern-geometric-texture-design-illustration-vector.jpg);
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

`



const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
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
         a
        </AddressContainer>


      </Wrapper>



    </Container>
  )
}

export default Contact;
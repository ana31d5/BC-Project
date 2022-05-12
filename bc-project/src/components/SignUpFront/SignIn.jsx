import React from "react";
import styled from 'styled-components';


const StyledTitle = styled.h1 `
  padding: 15px;
  color: white;

`

const StyledTextInput = styled.input`
width: 280px;
padding: 15px;
padding-left: 50px;
font-size: 17px;
letter-spacing: 1px;
color: white;
border: 0;
display: block;
margin: 5px auto 10px auto;
transition: ease-in-out 0.3s;

`
const StyledFormLabel = styled.p`
text-align: left;
font-size: 13px;
font-weight: bold;


`

const StyledFormArea = styled.div`
background-color: darkred;
text-align: center;
padding: 45px 55px;
`

const StyledFormButton = styled.button`
padding: 10px;
width: 150px;
background-color: transparent;
font-size: 16px;
border-radius: 25px;
border: 3px solid;
color: white;
text-decoration: none;
text-align: center;
transition: ease-in-out 0.3s;

&:hover {
  background-color: darkred;
  color: white;
  cursor: pointer;

}`

const ButtonGroup = styled.div`
display: flex;
justify-content: space-around;
flex-direction: row;
margin-top: 25px;

`






const SignIn = () => {
  return (
    <div>
      <StyledFormArea>
        <StyledTitle> Member Log In  </StyledTitle>


      </StyledFormArea>

    </div>
  )
}

export default SignIn
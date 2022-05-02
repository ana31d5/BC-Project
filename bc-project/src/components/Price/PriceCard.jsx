import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
padding: 20px;
margin-right: 50px;
-webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0,  0.58);
box-shadow: 0px 0px 17px -11px rgba(0, 0, 0,  0.58);
background-color: white;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`
const Price = styled.span`
font-weight: bold;
font-size: 20px;

`
const PriceContainer = styled.div`
display: flex;
align-items: center;

`

const Type = styled.button`
padding: 10px;
margin: 10px 0;
border: 4px solid darkred;
color: darkred;
font-size: 15px;
background-color: white;


`

const Desc = styled.div`
padding: 10px;
margin: 10px 0;
color:black;
`




const List = styled.ul`
list-style: none;


`

const ListItem = styled.li`
margin: 30px 0;


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




const PriceCard = ({price, type, desc}) => {
  return (
    <Container>
        <PriceContainer>
            <Price> {price}</Price>
            
        </PriceContainer>

            <Type> {type} </Type>
            <Desc> {desc} </Desc>
            <List>
                <ListItem>  </ListItem>


            </List>
            <Button> Join Now </Button>
        
    </Container>
  )
}

export default PriceCard
import React from 'react'
import styled from 'styled-components'
import './footer.css'

const Container = styled.div `
height: 10%;
background-color: #615140;
color: lightgrey;

`

const Wrapper = styled.div `
padding: 20px;
display: flex;
justify-content: space-between;

`

const List = styled.ul `
padding: 0;
margin: 0;
list-style: none;
display: flex;

`

const ListItem = styled.li `
margin-right: 20px;



`
const CopyRight = styled.span`


`

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <List>
                <ListItem> Guide </ListItem>
                <ListItem> Support </ListItem>
                <ListItem> API </ListItem>
                <ListItem> Cumunity </ListItem>
            </List>
            <CopyRight>PromoteMe dev © </CopyRight>
        </Wrapper>

    </Container>
  )
}

export default Footer;
import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
height: 50px;

`

const Wrapper = styled.div `
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;

`

const Left = styled.div ` 
width: 60%;
align-items: center;
display: flex;
justify-content: space-between;

`

const Logo = styled.h1 `
font-weight: bold;
text-decoration: underline crimson;


`
const Menu = styled.ul `
display: flex;
list-style: none;


`

const MenuItems = styled.li `
margin-right: 30px;
font-style: 20px;
font-weight: bold;

`

const Button = styled.button `
border: 2px solid white;
padding: 15px 25px;
background-color: darkred;
font-weight: bold;
color: white;
border-radius: 10px;      /* makes it curvy */
cursor: pointer;

`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
           <Left> <Logo> PromoteME </Logo>

           <Menu>
               <MenuItems> Home </MenuItems>
               <MenuItems> About </MenuItems>
               <MenuItems> Services </MenuItems>
               <MenuItems> Pricing </MenuItems>
               <MenuItems> Become A Promoter </MenuItems>
               <MenuItems> Contact Us </MenuItems>
           </Menu>

        </Left>

           <Button> SIGN IN </Button>
           <Button> SIGN UP </Button>
           
        </Wrapper>

           

    </Container>


  )
}

export default Navbar
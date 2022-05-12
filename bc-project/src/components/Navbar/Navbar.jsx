import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'
import {Link} from 'react-router-dom'


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
const Menu = styled.nav `
display: flex;
list-style: none;

@media only screen and (max-width:480px){
  display:none;
  
}

`

const MenuItems = styled.a `
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
const Right = styled.div `
margin-left: 10%;
padding: 20px;
justify-content: space-between;

`

const Navbar = () => {


  // const [activeNav, setActiveNav] = useState('#')

  return (
    <Container>
        <Wrapper>
           <Left> <Logo> PromoteME </Logo>

           
        
           <Menu>
               
              <MenuItems> Home  </MenuItems>
               <MenuItems> About  </MenuItems> 
               <MenuItems > Services </MenuItems>
               <MenuItems> Become A Promoter </MenuItems>
               <MenuItems> Contact Us </MenuItems>
          
           </Menu>

       

        </Left>

        <Right>
           <Button> SignIn </Button>
           <Button> SIGN UP </Button>
        </Right>
   
        </Wrapper>

           

    </Container>


  )
}

export default Navbar


{/* <nav>

<a href='#' onClick={() => setActiveNav ('#')} className={activeNav == '#' ? 'active ' : '' }><AiOutlineHome/></a>
<a href='#about' onClick={() => setActiveNav ('#about')} className={activeNav == '#about' ? 'active ' : '' }><AiOutlineUser/></a>
<a href='#experience' onClick={() => setActiveNav ('#experience')} className={activeNav == '#experience' ? 'active ' : ''}><BiBook/></a>
<a href='#services'onClick={() => setActiveNav ('#service')} className={activeNav == '#services' ? 'active ' : '' }><RiServiceLine/></a>
<a href='#contact'onClick={() => setActiveNav ('#contact')} className={activeNav == '#contact' ? 'active ' : '' }><BiMessageSquareDetail/></a>

</nav> */}
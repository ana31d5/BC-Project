import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import PROMOTEMEcopy from '../img/PROMOTEMEcopy.jpeg'
import {AiOutlineUser} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import Home from '../Home/Home'
import css from '../Navbar/nav.css'
import{MdOutlineEmojiPeople} from 'react-icons/md'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// const Container = styled.div `
// height: 50px;

// `

// const Wrapper = styled.div `
// padding: 10px 20px;
// display: flex;
// justify-content: space-between;
// align-items: center;

// `

// const Left = styled.div ` 
// width: 60%;
// align-items: center;
// display: flex;
// justify-content: space-between;

`

// const Logo = styled.img`
// width: 100%;
// height: 60%;
// `

// font-weight: bold;
// text-decoration: underline crimson;


// const Menu = styled.nav `
// display: flex;
// list-style: none;

// @media only screen and (max-width:480px){
//   display:none;
  
// }

// `

// const MenuItems = styled.a `
// margin-right: 30px;
// font-style: 20px;
// font-weight: bold;

// `

// const Button = styled.button `
// border: 2px solid white;
// padding: 15px 25px;
// background-color: darkred;
// font-weight: bold;
// color: white;
// border-radius: 10px;      /* makes it curvy */
// cursor: pointer;


// `
// const Right = styled.div `
// margin-left: 10%;
// padding: 20px;
// justify-content: space-between;

// `

const Menu = () => { (

  <>
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  <br />
  <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

  <br />
  <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
</>



)
}

export default Menu

/* <nav>

<a href='#' onClick={() => setActiveNav ('#')} className={activeNav == '#' ? 'active ' : '' }><AiOutlineHome/></a>
<a href='#about' onClick={() => setActiveNav ('#about')} className={activeNav == '#about' ? 'active ' : '' }><AiOutlineUser/></a>
<a href='#experience' onClick={() => setActiveNav ('#experience')} className={activeNav == '#experience' ? 'active ' : ''}><BiBook/></a>
<a href='#services'onClick={() => setActiveNav ('#service')} className={activeNav == '#services' ? 'active ' : '' }><RiServiceLine/></a>
<a href='#contact'onClick={() => setActiveNav ('#contact')} className={activeNav == '#contact' ? 'active ' : '' }><BiMessageSquareDetail/></a>
</nav>    */

//  const [activeNav, setActiveNav] = useState('#')

//   return (
//     <Container>
//         <Wrapper>
          
//            <Left> <img className='logo-image' src= {PROMOTEMEcopy} alt />

           
        
//            <Menu className='nav-bar'>
               
//               <MenuItems href={Home} onClick={() => setActiveNav ({Home})} className={activeNav == {Home} ? 'active ' : '' }><AiOutlineHome/> Home  </MenuItems>
//                <MenuItems href='#About.jsx' onClick={() => setActiveNav ('#About.jsx')} className={activeNav == '#About.jsx' ? 'active ' : '' }><AiOutlineUser/> About  </MenuItems> 
//                <MenuItems href='#Services'onClick={() => setActiveNav ('#service')} className={activeNav == '#services' ? 'active ' : '' }><RiServiceLine/> Services </MenuItems>
//                <MenuItems href='#Services'onClick={() => setActiveNav ('#service')} className={activeNav == '#services' ? 'active ' : '' }><MdOutlineEmojiPeople/> Become A Promoter </MenuItems>
//                <MenuItems href='#contact'onClick={() => setActiveNav ('#contact')} className={activeNav == '#contact' ? 'active ' : '' }><BiMessageSquareDetail/> Contact Us </MenuItems>
          
//            </Menu>

       

//         </Left>

//         <Right className='sign'>
//            <Button className='in'> SignIn </Button>
//            <Button className='up'> SIGN UP </Button>
//         </Right>
   
//         </Wrapper>

           

//     </Container>



import React from 'react'
import styled, {css}from 'styled-components'
import AnimatedShapes from './AnimatedShapes'
import Influencers from '../img/Influencers.jpeg'
import ig from '../Home/ig.jpeg'
import './home.css'

const Shape = css`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;

`
const IntoShape = styled.div`
${Shape};
clip-path: polygon(67% 0%, 100% 0%, 100% 100%,60% 100%);
background-color: darkred;

`

const Container = styled.div `
height: calc(100vh - 50px);
display: flex;
padding: 20px;
@media only screen and (max-width:480px){
  flex-direction:column;

  
}
`

const Left = styled.div `
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media only screen and (max-width:480px){
  width:100%;
  height: 100%;

  
}
`

const Title = styled.h1 `
font-size: 56px;
width: 60%;
font-family: 'Montserrat';
`

const Desc = styled.p `
width: 60%;
font-size: 18px;
margin-top: 20px;
font-family: 'Montserrat';
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
background-color: darkred;
color: wheat;
cursor: pointer;
border-radius: 10px;
border: none;
letter-spacing: 2px;
font-family: 'Montserrat';
position: relative;
bottom: 30px;
`

const Contact = styled.div `
display: flex;
flex-direction: column;
position: relative;
left: 50px;
bottom: 30px;

`
const Email = styled.span `
color: darkred;
font-weight: bold;
font-family: 'Montserrat';

`

const ContactText = styled.span `
color: black;
margin-top: 5px;
font-family: 'Montserrat';
`


const Right = styled.div `
width: 40%;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media only screen and (max-width:480px){
  display:none;
  
}`

const Image = styled.img `
width: 100%;
height: 60%;
`




const Home = () => {
  return (
    <div className='home'>
      <IntoShape/>
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
          <Button> CHECK OUT OUR SERVICES </Button>

          <Contact>
            <Email> Contact us on PromoteMe@hotmail.com </Email>
            <ContactText> For any concerns or extra information</ContactText>


          </Contact>

        </Info>
        
        
        </Left>
        <Right> <Image src={Influencers}></Image>  </Right>
        <AnimatedShapes/>
    </Container>
    </div>
  )
}

export default Home; 


// const Container = styled.div `
// height: calc(100vh - 50px);
// display: flex;
// padding: 20px;
// @media only screen and (max-width:480px){
//   flex-direction:column;
  
// }
// `


// const Left = styled.div `
// width: 100%;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
//  @media only screen and (max-width:480px){
//   width:100%;
//   height: 100%; 
// }

// `

// const Title = styled.h1 `
// font-size: 60px;
// width: 60%;
// `

// const Desc = styled.p `
// width: 60%;
// font-size: 25px;
// margin-top: 80px;
// position: relative;
// bottom: 10px;
// font-family: 'Josefin Sans';
// color: wheat;
// left: 300px;
// `

// const Info = styled.div `
// width: 60%;
// display: flex;
// justify-content: space-between;
// align-items: center;
// margin-top: 50px;


// `
// const Button = styled.button `
// padding: 15px;
// background-color: darkred;
// color: wheat;
// cursor: pointer;
// border-radius: 10px;
// font-weight: bold;
// border: none;
// letter-spacing: 2px;
// position: relative;
// top:30px;
// right: 350px;


// `

// const Contact = styled.div `
// display: flex;
// flex-direction: column;
// position: relative;
// right: 400px;
// top: 30px;



// `
// const Email = styled.span `
// color: red;
// font-weight: bold;
// font-size: 25px;

// `

// const ContactText = styled.span `
// color: wheat;
// margin-top: 5px;

// `


// const Right = styled.div `
// width: 100%;
// padding: 20px;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// @media only screen and (max-width:480px){
 
 
 

  
// }`

// const Image = styled.img`
// width: 100%;
// height: 60%;
// position: relative 
// bottom: 50px;
// `
//     {/* <image src='PROMOTEMEcopy.jpeg'> </image>  */}

  
// function Home() {
//   return (

    
//     <div id='Container'>

//         <Desc>
//           Safe and secure platform between Brands and Influencers.
//           Our services provides you to send a request to your desired influencer.
//           Are you tired of dming influencers, or getting scammed by influencer, sending requests?
//           We provide servies that allows you to request how you want your brand to be promoted to your desired influencers
//           and ensures they completed the agreement.

//         </Desc>

    
      
//          <Info>
//         <Button> CHECK OUT OUR SERVICES </Button>


//         <Contact>
//           <Email> Contact us on PromoteMe @hotmail.com </Email>
//          <ContactText> For any concerns or extra information</ContactText>
//         </Contact>

//       </Info>

    
//       <AnimatedShapes />

//     </div>
    
    
    
//   )
// }

// export default Home



/* <div className='body' style={{ backgroundImage:`url(${ig})` , backgroundRepeat: 'no-repeat', backgroundSize: 'auto', 
backgroundPosition: 'center', backgroundSize: 'cover', height: '100%', opacity:'0.83'}}> */
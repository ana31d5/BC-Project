import React from 'react'
import styled from 'styled-components'
import AnimatedShapes from '../Home/AnimatedShapes'
import Blackimage from '../img/blackimage.jpeg'
import './about.css'
import ig from '../Home/ig.jpeg'
import coat from '../img/coat.jpeg'



const Box = styled.div `
display: flex;
min-width: 100hv;
background-color: white;


`
const Color= styled.div`
width: 1200px;
position: relative;
height: 1vh;

`


// const Right = styled.div `
// background-color: rgba(29,29,29,1);
// bottom: 1000px;
// position: relative;
// left: 600px;
// height: 640px;
// width: 756px;

// `
// flex-direction: column;
// justify-content: center;
// display: flex;

const Image = styled.img `
background-repeat: 'no-repeat';


`

// const Left = styled.div `
// width: 50%;
// margin-top: 60px;
// margin-bottom:60px
// background-color: rgba(227,214,195,0.1)

// `

const Title = styled.span `
font-size: 25px;
color: wheat;
position: relative;
bottom: 290px;
left: 100px;
font-family: 'Montserrat';


`
const SubTitle = styled.span `
font-size: 24px;
font-weight: 550;
color: black;
margin-top: 30px;
position: relative;
left: 100px;
bottom: 270px;
font-family: 'Montserrat';

`
const Desc = styled.p `
font-size: 23px;
color: black;
margin-top: 30px;
font-weight: 400;
position: relative;
left: 100px;
bottom: 210px;
font-family: 'Montserrat';


`

const Button = styled.button `
margin-top: 20px;
width: 180px;
border-color: wheat;
padding: 15px 20px;
background-color: darkred;
color: wheat;
font-size: 20px;
border-radius: 20px;
cursor: pointer;
position: relative;
left: 100px;
bottom: 230px;
font-family: 'Montserrat';


`

const About = () => {
  return (
   

    <Box>

      <AnimatedShapes/>

        <div className='color'>
          <div className='left'>
              <div className='sub'>
                 We make an effort to work <br/>
                 Efficiently and in our clients best interest

                </div>

        <div className='img'> <Image src= {ig} /> </div>

         </div>

         <div className='right'>

         <div className='img2'> <Image src= {coat} /> 


         
         
         
         </div>

             <Title> 
                <b>Request</b> <br/> 
                 <b>Accept</b> <br/>
                 <b>Promote</b> <i>Securely</i> <br/>
                 
             </Title>

             <SubTitle>
                 Request for an Influncer to <br/>
                 Promote your Brand Today

             </SubTitle>

             <Desc>
                 We ensure that are clients a securely getting their services they   <br/> 
                 require from the promoter.

                We also ensure that the promoter receives   <br/>  
                the requested payment securely.
             </Desc>

             <Button>
                 Find out About our Services

             </Button>


         </div>
         </div>




    </Box>
  )
}

export default About
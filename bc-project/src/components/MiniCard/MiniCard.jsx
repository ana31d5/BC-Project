import React from 'react'
import styled from 'styled-components'
import ig from '../img/iglogo.png'
import sc from '../img/sclogo.png'
import yt from '../img/ytlogo.jpeg'


const Container1 = styled.div `
display: flex;
width: 120px;
padding: 20px;
flex-direction: column;
align-items: center;
-webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0,  0.58);
box-shadow: 10px 10px 13px -11px rgba(0, 0, 0,  0.58) ;
background-color: #d1b597;
position: relative;
bottom: 200px;
border-color: 1pt solid black;
padding: 15px 20px;


`
const Container2 = styled.div `
display: flex;
width: 120px;
height: 200px;
padding: 20px;
flex-direction: column;
align-items: center;
-webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0,  0.58);
box-shadow: 10px 10px 13px -11px rgba(0, 0, 0,  0.58);
background-color: #e0c9af;
position: relative;
bottom: 200px;
left: 30px;

`

const Container3 = styled.div `
display: flex;
width: 120px;
padding: 20px;
flex-direction: column;
align-items: center;
-webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0,  0.58);
box-shadow: 10px 10px 13px -11px rgba(0, 0, 0,  0.58);
background-color: #d1b597;
position: relative;
bottom: 200px;
left: 60px;

`

const Container4 = styled.div `
display: flex;
width: 120px;
padding: 20px;
flex-direction: column;
align-items: center;
-webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0,  0.58);
box-shadow: 10px 10px 13px -11px rgba(0, 0, 0,  0.58);
background-color: #e0c9af;
position: relative;
bottom: 200px;
left: 100px;


`
const Image1 = styled.img `
  width: 20px;
  margin-top: 30px;
  

`



const Image2 = styled.img `
  width: 20px;
  margin-top: 30px;
  

`



const Image3 = styled.img `
  width: 20px;
  margin-top: 30px;
  

`



const Image4 = styled.img `
  width: 20px;
  margin-top: 30px;
  

`



const Text1 = styled.span `
  width: 100px;
  margin-top: 60px;
  text-align: center;
  font-family: 'Montserrat';
  

`

const Text2 = styled.span `
  width: 100px;
  margin-top: 60px;
  text-align: center;
  font-family: 'Montserrat';
  

`

const Text3 = styled.span `
  width: 100px;
  margin-top: 60px;
  text-align: center;
  font-family: 'Montserrat';
  

`

const Text4 = styled.span `
  width: 100px;
  margin-top: 60px;
  text-align: center;
  font-family: 'Montserrat';
  

`




const MiniCard = () => {
  return (

    <>


      <Container1> 



          <Image1 src= {ig}/> 

          <Text1> 
              
              Instagram Pictures

          </Text1>

       </Container1>



        <Container2>

        <Image2 src= {ig}/> 
        

        
        <Text2> 
            
            Instagram Videos
              
         </Text2>
        
        
        </Container2>



        <Container3>

        <Image3 src= {sc}/> 
         
         <Text3> 
             
             SnapChat Promo

        </Text3>

         </Container3>

         <Container4>

         <Image4 src= {yt}/> 
        
        <Text4> 
            
            Youtube Videos

         </Text4>

        </Container4>
      

   </>

    
  )
};

export default MiniCard;
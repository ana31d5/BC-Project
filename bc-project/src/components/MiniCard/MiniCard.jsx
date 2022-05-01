import React from 'react'
import styled from 'styled-components'


const Container1 = styled.div `
display: flex;
width: 100px;
padding: 20px;
flex-direction: column;
align-items: center;
-webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0,  0.58);
box-shadow: 0px 0px 17px -11px rgba(0, 0, 0,  0.58);

`
const Container2 = styled.div `
display: flex;
width: 100px;
padding: 20px;
flex-direction: column;
align-items: center;
-webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0,  0.58);
box-shadow: 0px 0px 17px -11px rgba(0, 0, 0,  0.58);

`

const Container3 = styled.div `
display: flex;
width: 100px;
padding: 20px;
flex-direction: column;
align-items: center;
-webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0,  0.58);
box-shadow: 0px 0px 17px -11px rgba(0, 0, 0,  0.58);

`

const Container4 = styled.div `
display: flex;
width: 100px;
padding: 20px;
flex-direction: column;
align-items: center;
-webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0,  0.58);
box-shadow: 0px 0px 17px -11px rgba(0, 0, 0,  0.58);

`
const Image1 = styled.img `
  width: 20px;
  

`



const Image2 = styled.img `
  width: 20px;
  

`



const Image3 = styled.img `
  width: 20px;
  

`



const Image4 = styled.img `
  width: 20px;
  

`



const Text1 = styled.span `
  width: 20px;
  margin-top: 10px;
  text-align: center;
  

`

const Text2 = styled.span `
  width: 20px;
  margin-top: 10px;
  text-align: center;
  

`

const Text3 = styled.span `
  width: 20px;
  margin-top: 10px;
  text-align: center;
  

`

const Text4 = styled.span `
  width: 20px;
  margin-top: 10px;
  text-align: center;
  

`




const MiniCard = () => {
  return (

    <>


      <Container1> 

          <Image1/>

          <Text1> 
              
              Instagram Pictures

          </Text1>

       </Container1>



        <Container2>

        
        <Text2> 
            
            Instagram Videos
              
         </Text2>
        
        
        </Container2>

        <Container3>
         
         <Text3> 
             
             SnapChat Promo

        </Text3>

         </Container3>

         <Container4>
        
        <Text4> 
            
            Youtube Videos

         </Text4>

        </Container4>
      

   </>

    
  )
};

export default MiniCard;
import React from 'react'
import styled from 'styled-components'

const Rect = styled.div `
    width: 50px;
    height: 100px;
    background-color: darkgrey;
    opacity: 0.5;
    position: absolute;
    top: 400px;
    left: -50px;
    z-index: -1;
    animation: rect 25s linear alternate infinite;

    @keyframes rect {
        to {
            transform: translate( 100vw, -50vh);
        }
        
    }

`

const Circle = styled.div `
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: lightslategray;
    opacity: 0.7;
    position: absolute;
    top: 200px;
    left: -100px;
    z-index: -1;
    animation: circle 25s linear alternate infinite;

    @keyframes circle {
        to {
            transform: translate( 100vw, -100vh);
        }
        
    }

`;

const Square = styled.div `
    width: 60px;
    height: 60px;
    background-color: grey;
    opacity: 0.7;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
    animation: square 25s linear alternate infinite;

    @keyframes square {
        to {
            transform: translate( 100vw, 100vh);
        }
        
    }

`

const AnimatedShapes = () => {
  return (

    <>

     <Square/>
    
     <Rect/>

     <Circle/>
     
     </>
  )
}

export default AnimatedShapes
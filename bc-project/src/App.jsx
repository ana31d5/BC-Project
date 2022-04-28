import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import styled from 'styled-components';
import Home from './components/home/Home';
import About from './components/about/About';

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`

const IntoShape = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;
clip-path: polygon(67% 0%, 100% 0%, 100% 100%,60% 100%);
background-color: darkred;

`

// const AbShape = styled.div`
// width: 100%;
// height: 100%;
// position: absolute;
// top: 0;
// right: 0;
// clip-path: polygon(5% 66%, 29% 100%, 100% 100%);
// z-index: -1;
// background-color: darkred;

// `


const App =() => {
  return (
    <div className='app'>
      

      <Container>

      <Navbar/>
      <Home/>
      <IntoShape/>


      </Container>

        <Container>
          
          <About/>

          {/* <AbShape/> */}
             
        </Container>



    </div>

  );
}

export default App;

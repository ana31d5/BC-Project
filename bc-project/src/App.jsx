import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import styled, {css} from 'styled-components';
import Home from './components/home/Home';
import About from './components/about/About';
import Service from './components/Service/service';

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`
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

const AbShape = styled.div`
${Shape};
clip-path: polygon(0% 0%, 60% 0%, 33% 100%,0% 100%);
 background-color: #7b2828; /*#904c4c */

`





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

          <AbShape/>
             
        </Container>

        <Container>

             <Service/>

        </Container>



    </div>

  );
}

export default App;

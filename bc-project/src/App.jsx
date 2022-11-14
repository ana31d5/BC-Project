import React from 'react';
import Navcomp from './components/Navbar/Navcomp';
import styled, {css} from 'styled-components';
import Home from './components/Home/Home';
import About from './components/About/About';
import Price from './components/Price/Price';
import Contact from './components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'




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
clip-path: polygon(0% 0%, 45% 0, 45% 54%, 19% 54%, 24% 81%, 6% 60%, 0 53%);
 background-color: #03030393 ;     /*,#904c4c; */

`


const PriceShape = styled.div`
${Shape};
clip-path: polygon(33% 0%, 100% 0%, 100% 100%,67% 100%);
 background-color: darkred; /*#904c4c */

`
const ContactShape = styled.div`
${Shape};

`




const App =() => {
  return (
    <div className='app'>

      <Navcomp/>

     

          <Container>

              <Home/>
              <IntoShape/>

         </Container>




         <Container>
          
              <About/>

         </Container>



        <Container>

           <Price/>


  
        </Container>

        <Container>

          <Contact/>
   

       </Container>

  </div>

  );
}

export default App;

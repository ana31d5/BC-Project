import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import styled from 'styled-components';
import Home from './components/home/Home';

const Container = styled.div`
  height: 100vh;
`

const App =() => {
  return (
    <div className='app'>
      

      <Container>

      <Navbar/>
      <Home/>

      
      </Container>


    </div>

  );
}

export default App;

import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
   height: 100%;
   display: flex;
   justify-content: center;


`

const Price = () => {
  return (
    <Container>
        <PriceCard/>
        <PriceCard/>
        <PriceCard/>
    </Container>
  )
}

export default Price
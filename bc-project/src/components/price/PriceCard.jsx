import React from 'react'
import Price from './Price'


const Container = styled.div`

`

const PriceCard = () => {
  return (
    <Container>
        <PriceCardContainer>
            <Price> £400</Price>/month
        </PriceCardContainer>
    </Container>
  )
}

export default PriceCard
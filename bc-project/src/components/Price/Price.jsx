import React from 'react'
import styled from 'styled-components'
import PriceCard from './PriceCard'



const Container = styled.div`
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;

`

const Price = () => {
  return (
    <Container>
        <PriceCard  price= 'Price Liased with Influencer' type= 'Instagram Pictures' desc='Instagram pictures that you want to be promoted in an allocated timeframe'/>
        <PriceCard  price= 'Price Liased with Influencer' type= 'Instagram Video'desc='Instagram video with influencer promoting your brand'/>
        <PriceCard  price= 'Price Liased with Influencer' type= 'Youtube Video' desc='Youtube video of your brand as an ad or promotion in their video '/>
        <PriceCard  price= 'Price Liased with Influencer' type= 'Tik Tok Video' desc='Tik tok video promoting your brand'/>
    </Container>
  )
}

export default Price
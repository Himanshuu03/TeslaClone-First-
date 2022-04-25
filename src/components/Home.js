import React from 'react'
import styled from"styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
         title="Model S"
         description="Order Online for Touchless Delivery"
         backgroundImg="model-s.jpg"
         leftbuttonText="Custon order"
         rightbuttonText="Existing inventory"
        />
        <Section 
         title="Model Y"
         description="Order Online for Touchless Delivery"
         backgroundImg="model-y.jpg"
         leftbuttonText="Custon order"
         rightbuttonText="Existing inventory"
         />
         <Section 
         title="Model 3"
         description="Order Online for Touchless Delivery"
         backgroundImg="model-3.jpg"
         leftbuttonText="Custon order"
         rightbuttonText="Existing inventory"
         />
         <Section 
         title="Model X"
         description="Order Online for Touchless Delivery"
         backgroundImg="model-x.jpg"
         leftbuttonText="Custon order"
         rightbuttonText="Existing inventory"
         />
         <Section 
         title="Lowest Cost Solor Panels in India"
         description="Money-back Guarantee"
         backgroundImg="solar-panel.jpg"
         leftbuttonText="Order now"
         rightbuttonText="Learn more"
         />
          <Section 
         title="Solar for New Roofs"
         description="Solar Roof Costs Less Than a New Roof"
         backgroundImg="solar-roof.jpg"
         leftbuttonText="Order now"
         rightbuttonText="Learn more"
         />
          <Section 
         title="Accessories"
         description=""
         backgroundImg="accessories.jpg"
         leftbuttonText="Order now"
         />
    </Container>
  )
}

export default Home

const Container = styled.div`
height:100vh;
`
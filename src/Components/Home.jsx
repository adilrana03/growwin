import React from 'react'
import Hero from './Hero'
import Header from './Header'
// import { ClickToComponent } from 'click-to-react-component'
import ForexTrading from './Trading'
import Platforms from './Platform'
import Award from './Award'
import TradeTypes from './TradeType'
import SignupComponent from './Join'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
          <Hero />
          <ForexTrading />
          <TradeTypes />
          <Platforms />
          <Award />
          <SignupComponent />
          <Footer />
    </div>
  )
}

export default Home
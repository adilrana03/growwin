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
import WhyGrowwin from './WhyGrowwin'
import AIBotFeature from './AiBot'
const Home = () => {
  return (
    <div className='max-w-full'>
          <Hero />
          <ForexTrading />
          <TradeTypes />
          <Platforms />
          <WhyGrowwin/>
          <AIBotFeature/>
          <Award />
          <SignupComponent />
          <Footer />
    </div>
  )
}

export default Home
// import Hero from './Components/Hero'
import Header from './Components/Header'
// import { ClickToComponent } from 'click-to-react-component'

import AuthForm from './Components/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import ComingSoonPage from './Components/ComingSoon'

function App() {

  return (
    <div className='w-full overflow-hidden '>
        {/* <ClickToComponent /> */}
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/comingsoon' element={<ComingSoonPage/>}/>
          <Route path='/login' element={<AuthForm />} />
          <Route path='*' element={<ComingSoonPage/>}/>
        </Routes>
    </div>

  )
}

export default App

// import Hero from './Components/Hero'
import Header from './Components/Header'
import { ClickToComponent } from 'click-to-react-component'
import { BrowserRouter } from 'react-router-dom'

import AuthForm from './Components/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import ComingSoonPage from './Components/ComingSoon'

function App() {

  return (
    <div className='w-full overflow-hidden '>
        <ClickToComponent />
        <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/comingsoon' element={<ComingSoonPage/>}/>
          <Route path='/login' element={<AuthForm />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App

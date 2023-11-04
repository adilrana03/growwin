// import Hero from './Components/Hero'
import Header from './Components/Header'
import { ClickToComponent } from 'click-to-react-component'

import AuthForm from './Components/Login'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from './Components/Home'

function App() {

  return (
    <div className='w-full overflow-hidden '>
      <BrowserRouter>
        <ClickToComponent />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<AuthForm />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App

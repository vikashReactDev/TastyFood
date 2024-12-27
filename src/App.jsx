import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Error from './page/Error'
import { Provider } from 'react-redux'
import Store from './page/Store/Store'
import Success from './page/Success'
import ProtectedRoute from './page/ProtectedRoute'

const App = () => {
  return (
    <div>
    <Provider store={Store}>     
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/success" element={<ProtectedRoute element={<Success/>}/>}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>

    </div>
  )
}

export default App

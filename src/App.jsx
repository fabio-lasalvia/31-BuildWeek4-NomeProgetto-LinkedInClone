import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import MainLayout from './components/MainLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

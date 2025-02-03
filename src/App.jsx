
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './components/About'
import Skills from './components/Skills'
import Project from './pages/Project'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skill' element={<Skills/>}/>
      <Route path='/project' element={<Project/>}/>


    </Routes>
  

     
    </>
  )
}

export default App

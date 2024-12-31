import './App.css'
import HomePage from './pages/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <div>
      <NavBar/>
      <main className='main-content'>
        <Routes>
          <Route path="/" element = {<HomePage/>}></Route>
          <Route path="/projects" element = {<HomePage/>}></Route>
          <Route path="/blog" element = {<HomePage/>}></Route>
          <Route path="/contact" element = {<HomePage/>}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App

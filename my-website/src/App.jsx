import './App.css'
import HomePage from './pages/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <main className='main-content'>
      <Routes>
        <Route path="/" element = {<HomePage/>}></Route>
        <Route path="/projects" element = {<HomePage/>}></Route>
        <Route path="/blog" element = {<HomePage/>}></Route>
        <Route path="/contact" element = {<HomePage/>}></Route>
      </Routes>
    </main>
  )
}

export default App

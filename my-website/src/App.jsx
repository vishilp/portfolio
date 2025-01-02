import './App.css'
import HomePage from './pages/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import ContactPage from './pages/ContactPage/ContactPage'

function App() {

  return (
    <div>
      <NavBar/>
      <main className='main-content'>
        <Routes>
          <Route path="/" element = {<HomePage/>}></Route>
          <Route path="/projects" element = {<ProjectPage/>}></Route>
          <Route path="/blog" element = {<HomePage/>}></Route>
          <Route path="/contact" element = {<ContactPage/>}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App

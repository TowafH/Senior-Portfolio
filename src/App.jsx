// Components
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Project from './components/Project.jsx'
import Skills from './components/Skills.jsx';

// CSS
import './App.css'

// NavBar
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/Projects' element={
          <div className='flex flex-wrap gap-2 justify-center'>
            <Project name="Wave Zero" link="https://towafh.github.io/waveZero/"/>
            <Project name="MedPocket" link="https://thomas-a-edison-cte-hs.github.io/iAmsterdam/index.html"/>
          </div>
          } />

        <Route path='/Skills' element={<Skills/>} />
      </Routes>
    </div>
  )
}

export default App
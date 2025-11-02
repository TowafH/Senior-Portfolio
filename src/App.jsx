// Components
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Project from './components/Project.jsx'
import Skills from './components/Skills.jsx';
import Resume from './components/Resume.jsx';
import Portfolio from './components/Portfolio'

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
        <Route path='/Resume' element={<Resume/>} />
        <Route path='/Portfolios' element={
          <div>
            <Portfolio grade="11th Grade Portfolio" link="https://towafh.github.io/Junior-Portfolio/#/Home"/>
            <Portfolio grade="10th Grade Portfolio" link="https://towafh.github.io/Sophomore-Portoflio/"/>
          </div>
          } />
      </Routes>
    </div>
  )
}

export default App
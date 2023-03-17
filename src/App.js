import { Routes, Route } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import MyScore from './components/MyScore'

const App = () => {
  return (
    <div className="app section__padding">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/myScore' element={<MyScore />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
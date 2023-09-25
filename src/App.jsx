import './App.css'
import About from './components/About/About'
import Articles from './components/Articles/Articles'
import Header from './components/UI/Header'
import Slider from './components/UI/Slider'

function App() {

  return (
    <>
      <Header/>  
      <Slider/>
      <About className="h-screen w-screen"/>
      <Articles/>
    </>
  )
}

export default App

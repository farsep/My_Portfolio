import './App.css'
import './styles/globals.css';
import Navbar from './components/Navbar'
import Presentation from './components/Presentation.tsx'

// import StarShowerBackground from './components/StarShowerBackground'

function App() {

    return (
        <div className="App">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <Navbar/>
            <Presentation/>
        </div>
    )
}

export default App

import './App.css'
import './styles/globals.css';
import Navbar from './components/Navbar'
import Presentation from './components/Presentation.tsx'
import {LanguageProvider} from "./context/LanguageContext.tsx";

// import StarShowerBackground from './components/StarShowerBackground'

function App() {

    return (
        <div className="App">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <LanguageProvider>
                <Navbar/>
                <Presentation/>
            </LanguageProvider>
        </div>
    )
}

export default App

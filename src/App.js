import './App.css';
import Header from './Components/Header/Header.js';
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Introduction/Intro";
import Projects from "./Components/Projects/Projects";
import Achievements from "./Components/Achievements/Achievements";
import Contacts from "./Components/Contacts/Contacts";

function App() {
    return (
        <div className="App">
            <Header className="app-header"/>
            <Intro className="intro" />
            <Projects className='projects'/>
            <Achievements className='achievements'/>
            <Contacts className='contacts'/>
            <Footer className='footer'/>
        </div>
    );
}

export default App;

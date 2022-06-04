import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.js';
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Introduction/Intro";

function App() {
    return (
        <div className="App">
            <Header className="App-header"/>
            <Intro />
            {/*<Projects />*/}
            {/*<Achievements />*/}
            {/*<Contacts />*/}
            <Footer />
        </div>
    );
}

export default App;

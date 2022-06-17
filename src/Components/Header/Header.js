import './Header.css';
import logo from './logo.svg';
import resume from './Resume-2.pdf'; 

function Header() {
    return (
        <header className='app-header'>
            <a href='#home'>
                <img className='logo' src={logo} alt='svg logo'/>
            </a>
            <nav role="navigation">
                <ul className="navbar">
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href={resume}>Resume</a></li>
                    <li><a href="https://github.com/eyasuh" target="blanck">GitHub <i
                        className="fa-brands fa-github-square"></i>
                    </a>
                    </li>
                </ul>
            </nav>
            {/* <hr /> */}
        </header>
    );
}

export default Header;
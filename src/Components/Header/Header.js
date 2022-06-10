import './Header.css';

function Header() {
    return (
        <header className='app-header'>
            <nav role="navigation">
                <ul className="navbar">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="https://github.com/eyasuh" target="blanck">GitHub<i
                        className="fa-brands fa-github-square"></i>
                    </a>
                    </li>
                </ul>
            </nav>
            <hr /> 
        </header>
    );
}

export default Header;
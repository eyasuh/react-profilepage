import './Header.css';
import logo from './logo.svg';
import resume from '../utilities/Resume-2.pdf';
import ContainedButton from '../ContainedButton/ContainedButton';
import { MenuOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import { useState } from 'react'

function Header() {
    return (
        <header className='app-header'>
            <a href='#home'>
                <img className='logo' src={logo} alt='svg logo' />
            </a>
            <nav role="navigation" >
                <ul className="navbar" id='navbar-list'>
                    <li><a href="#aboutme-article">About Me</a></li>
                    <li><a href="#project" >Projects</a></li>
                    <li><a href={resume}>Resume</a></li>
                    <li><a href="https://github.com/eyasuh" target="blank">GitHub <i
                        className="fa-brands fa-github-square"></i>
                    </a>
                    </li>
                </ul>
                <MenuOutlined className='humberger' id='humberger-menu' />
            </nav>
            {/* <hr /> */}
        </header>
    );
}

export default Header;
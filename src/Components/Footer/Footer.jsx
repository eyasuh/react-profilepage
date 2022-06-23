import './Footer.css';
import profile from '../utilities/profileportraite.png';

function Footer() {
    return (
        <>
            <footer className='footer' id='footer'>
                <img className='footer-profile-image' src={profile} alt='profile' />

                <div className='footer-links'>
                    <h4>Copyright &copy; 2022 Eyasu Haile</h4>
                    <div className='awsome-fonts'>
                        <i className="fa-brands fa-github-square" />
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-docker"></i>
                    </div>
                    
                </div>

                <div>
                    <h4>Quat of The Day</h4>
                    <p>"Work Hard, Play Hard"</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
import './Intro.css';
import ProfilePic from './profileportraite.png';
import patern from './patern.svg';
import ContainedButton from '../ContainedButton/ContainedButton';
import OutlinedButton from '../OutlinedButton/OutlinedButton';

function Intro() {
    return (
        <>
            <main className='intro-container'>
                <section className='intro-content'>
                    <article>
                        <h4>HELLO,
                            <br /> MY NAME IS
                            <h1>Eyasu Haile</h1></h4>

                        <p>I am a full-stack developer</p>
                        <div className='intro-button-container'>
                            <ContainedButton buttonName='Contact Me' /> 
                            <OutlinedButton buttonName='Check out my resume' /> 
                        </div>
                    </article>
                    <img className='profilePic' src={patern} alt='hero' />
                </section>
            </main>
        </>
    )
}

export default Intro;
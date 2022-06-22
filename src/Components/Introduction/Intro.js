import './Intro.css';
import patern from './patern.svg';
import ContainedButton from '../ContainedButton/ContainedButton';
import OutlinedButton from '../OutlinedButton/OutlinedButton';
import resume from '../utilities/Resume-2.pdf'

function Intro() {
    return (
        <>
            <main className='intro-container'>
                <section className='intro-content'>
                    <article>
                        <h2>Hello, my name is<br />
                            <span>Eyasu Haile</span>
                        </h2>
                        <p>I am a full-stack developer</p>
                        <div className='intro-button-container'>
                            <ContainedButton buttonName='Contact Me' emojis='👋🏽' /> 
                            <OutlinedButton buttonName='Check out my resume' href={resume}/> 
                        </div>
                    </article>
                    <img className='svgPatern' src={patern} alt='hero' />
                </section>
            </main>
        </>
    )
}

export default Intro;
import './Intro.css';
import patern from '../utilities/patern.svg';
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
                            <OutlinedButton buttonName='Check out my resume' href={resume} />
                        </div>
                    </article>
                    <img className='svgPatern' src={patern} alt='hero' />
                </section>
                <section className='intro-about-me'>
                    <article className='paragraph-container' id='aboutme-article'>
                        <h2>About Me</h2>
                        <p className='intro-paragraph'>
                            A self-motivated computer science graduate from University of Maryland with fundamental knowledge of software design, development, and testing. Completed a Full-Stack web development bootcamp at Montgomery College focused on Spring Framework. Seeking an opportunity to utilize my broad educational background with excellent analytical, technical, and programming skills to thrive as an entry-level software engineer. Proven organizational skills, fast learner and adapts easily to new environments.
                        </p>
                    </article>
                </section>
            </main>
        </>
    )
}

export default Intro;
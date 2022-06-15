import './Intro.css';
import ProfilePic from './profileportraite.png';

function Intro() {
    return (
        <>
        <main className='intro'>
            <section>
                <article>
                    <h4>WELLCOME TO MY PAGE, MY NAME IS</h4>
                    <h1>Eyasu Haile</h1>
                    <p>I am a full-stack developer</p>
                    <a className='resume-link' href="#">CHECK OUT MY RESUME</a>
                </article>
            </section>
            <img className='profilePic' src={ProfilePic} alt='hero' /> 
        </main>
        </>
    )
}

export default Intro;
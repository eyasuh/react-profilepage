import './Achievements.css';
import Achievement from '../Achievement/Achievement.js';
import umgcdiploma from '../utilities/UMGCdiploma.png';
import mcJavaBootcamp from '../utilities/Eyasu Haile Java Web Dev Certificate.pdf'

function Achievements() {
    return (
        <>
            <section className='achievements'>
                <h4>Achievements :-: </h4>
                <section>
                    <Achievement 
                        src={umgcdiploma} 
                        header="UMGC"
                        p='Bachelor of Sience in Computer Science'
                    />
                    <Achievement 
                        src={mcJavaBootcamp} 
                        header='Montgomery College'
                        p='Java Web Development 280-hr boot camp'
                    />
                </section>

            </section>
        </>
    )
}

export default Achievements;

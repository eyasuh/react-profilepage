import './Project.css';
import squidward from './squidward.png'; 
function Project(props) {
    return (
        <>
            <section className='project'  >
                <img 
                    className='project-image' 
                    src={squidward} 
                    alt='project' />
                <h1 className='project-h' >Project Name</h1>
                <p className='project-discription'>
                    {props.p} 
                    <a href={props.a} target='blank'>Try it</a>
                </p>
            </section>
        </>
    );
}
export default Project;
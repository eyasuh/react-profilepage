import './Projects.css';
import Project from "../Project/Project";
import { Fragment } from "react";

function Projects() {
    return (
        < >

            <section className='projects'>
                <h4 className='projects-header'>Projects Highlight :-:</h4>
                <section>

                    {/* {projects.map(project => {
                        return (
                            <Project 
                            key={project} 
                            className='project-list' /> 
                        );
                    })} */}
                    <Project className='project-list' />
                    <Project className='project-list' />
                    <Project className='project-list' />
                    <Project className='project-list' />
                    <Project className='project-list' />
                    <Project className='project-list' />
                    <Project className='project-list' />
                    <Project className='project-list' />
                </section>
            </section>
        </>
    );
}

export default Projects;
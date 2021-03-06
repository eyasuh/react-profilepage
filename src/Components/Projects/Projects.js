import './Projects.css';
import Project from "../Project/Project";
import { Fragment, useState } from "react";

function Projects() {
    // const [projects, setProjects] = useState([]);
    // const [project, setProject] = useState('');
    return (
        <>
            <section className='projects' id='project'>
                <h4 className='projects-header'>
                    Projects Highlight :-:
                </h4>

                <section >
                    {/* {projects.map(project => {
                        return (
                            <Project 
                            key={project} 
                            className='project-list' /> 
                        );
                    })} */}
                    <Project className='project-list' 
                    p='Here is the project discription' 
                    a='http://lucycoffee.surge.sh/'
                    />
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
import './Projects.css';
import Project from "../Project/Project";
import {Fragment} from "react";

function Projects() {
    return (
        < >
            <section className='Project'>
                <Project className='project-list'/>
                <Project className='project-list'/>
                <Project className='project-list'/>
                <Project className='project-list'/>
            </section>
        </>
    );
}

export default Projects;
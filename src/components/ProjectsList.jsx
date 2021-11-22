import '../styles/ProjectsList.css'
import Project from './Project';
import {projects} from "../data"

const ProjectsList = () => {
    return ( <div className="projects-list">
        <div className="bgc-projects-list"></div>
        <div className="bgc-projects-list-right"></div>
<div className="projects-list-text">
    <h1 className="projects-list-title">Moje projekty</h1>
    <p className='projects-list-desc'>Niektóre z głównych projektów, które wykonałem głównie przy pomocy Javascriptu i Reacta</p>
</div>
<div className="projects-list-list">

{projects.map((project) =>(
  <Project key={project.id} img={project.img} />
))}
    
  

</div>
    </div> );
}
 
export default ProjectsList;
import '../styles/Project.css'


const Project = ({img, link}) => {
    return ( <div className='project'>
        <div className="project-browser">
            <div className="project-circle"></div>
            <div className="project-circle"></div>
            <div className="project-circle"></div>
        </div>
        
            <img src={img} alt='' className="project-img"></img>
    </div> );
}
 
export default Project;
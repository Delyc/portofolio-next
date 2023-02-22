import fullstackProjects from "../../data/fullStackProjects";
import ProjectsCard from "../ProjectsCard";
import PageWrapper from "../Wrappers/PageWrapper";

const Projects = () => {
    return (
        <PageWrapper>
            {fullstackProjects.map((project, index) => {
                return(<ProjectsCard key={index} index={index} title={project.title} image={project.image}  stacks={project.stacks} description={project.description} />)
            })}
            
         
        </PageWrapper>
    );
}

export default Projects;
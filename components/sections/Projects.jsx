import fullstackProjects from "../../data/fullStackProjects";
import ProjectsCard from "../ProjectsCard";
import PageWrapper from "../Wrappers/PageWrapper";

const Projects = () => {
    return (
        <PageWrapper>
          <h1 className='text-4xl text-[#1d99b3] font-bold mt-28'>Personal projects</h1>

            {fullstackProjects.map((project, index) => {
                return(<ProjectsCard key={index} index={index} code={project.githubLink} title={project.title} deployedLink={project.deployedLink} image={project.image}  stacks={project.stacks} description={project.description} />)
            })}
            
         
        </PageWrapper>
    );
}

export default Projects;
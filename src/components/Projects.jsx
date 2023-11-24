import Project from "./Project";
import projectData from "../data/projectData";
const Projects = () => {
    return (
        <div className="w-[80%] h-full mx-auto">
            <div className="flex flex-col w-full h-full justify-center py-16">

                <div className="flex flex-col items-center">
                    <h2 className="text-primary font-bold sm:text-2xl text-center">~ From Concept to Creation ~</h2>
                    <h1 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-8 uppercase text-center">Discover what I've built</h1>
                </div>

                <div className="grid gap-4 grid-cols-1 xl:grid-cols-2">
                    {projectData.map((project) => (
                        <Project
                            key={project.id}
                            thumbnail={project.thumbnail}
                            title={project.title}
                            group={project.project_group}
                            link={project.project_link}
                            paragraph={project.paragraph}
                            logo={project.logo}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;

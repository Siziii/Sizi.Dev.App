import Project from "./Project";
import projectData from "../data/projectData";
import { useState } from "react";
const Projects = () => {
    const [isActive, setIsActive] = useState('all');

    const filteredProjects = projectData.filter((project) => {
        return isActive === 'all' || project.project_group === isActive;
    })

    const handleCategoryClick = (category) => {
        setIsActive(category);
    }

    return (
        <div className="w-[80%] h-full mx-auto">
            <div className="flex flex-col w-full h-full justify-center py-16">

                <div className="flex flex-col items-center">
                    <h2 className="text-primary font-bold sm:text-2xl text-center">~ From Concept to Creation ~</h2>
                    <h1 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-8 uppercase text-center">Discover what I've built</h1>
                </div>
                <div className="w-full flex justify-center pb-10">
                    <ul className="flex justify-center gap-1 sm:gap-3 text-sm sm:text-base font-bold ">
                        <li
                            className={`cursor-pointer opacity-50 hover:opacity-100 transition-all ${isActive === 'all' ? 'text-primary opacity-100' : ''}`}
                            onClick={() => handleCategoryClick('all')}
                        >
                            All
                        </li>
                        <span className="opacity-50">/</span>
                        <li
                            className={`cursor-pointer opacity-50 hover:opacity-100 transition-all ${isActive === 'Web Development' ? 'text-primary opacity-100' : ''}`}
                            onClick={() => handleCategoryClick('Web Development')}
                        >
                            Web Dev
                        </li>
                        <span className="opacity-50">/</span>
                        <li
                            className={` cursor-pointer opacity-50 hover:opacity-100 transition-all ${isActive === '3D Art' ? 'text-primary opacity-100' : ''}`}
                            onClick={() => handleCategoryClick('3D Art')}
                        >
                            3D Art
                        </li>
                        <span className="opacity-50">/</span>
                        <li
                            className={`cursor-pointer opacity-50 hover:opacity-100 transition-all ${isActive === 'Game Development' ? 'text-primary opacity-100' : ''}`}
                            onClick={() => handleCategoryClick('Game Development')}
                        >
                            Game Dev
                        </li>
                    </ul>
                </div>
                <div className="grid gap-4 grid-cols-1 xl:grid-cols-2">
                    {filteredProjects.map((project) => (
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

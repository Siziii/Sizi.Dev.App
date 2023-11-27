import Project from "./Project";
import projectData from "../data/projectData";
import { useState } from "react";
import OutlinedTitle from "../utils/OutlinedTitle";

const Projects = () => {

    const [isActive, setIsActive] = useState('All');

    //filter projects
    const filteredProjects = projectData.filter((project) => {
        return isActive === 'All' || project.project_group === isActive;
    })

    const handleCategoryClick = (category) => {
        setIsActive(category);
    }

    // Calculate project counts for each category
    const categoryCounts = {
        'All': projectData.length,
        ...projectData.reduce((acc, project) => {
            const category = project.project_group;
            acc[category] = (acc[category] || 0) + 1;
            return acc;
        }, {})
    }

    const groups = [
        { id: 0, label: "All", group: "All" },
        { id: 1, label: "Web Dev", group: "Web Development" },
        { id: 2, label: "3D Art", group: "3D Art" },
        { id: 3, label: "Game Dev", group: "Game Development" },
    ]

    return (
        <div className="w-[90%] sm:w-[80%] h-full mx-auto">
            <div className="flex flex-col w-full h-full justify-center py-4 md:pb-16 md:pt-8">

                <div className="flex flex-col items-center px-2">
                    <h2 className="text-primary font-bold sm:text-2xl text-center">~ From Concept to Creation ~</h2>
                    <OutlinedTitle text={"Discover what I've built"} mt={16} mb={24} justify={"center"}/>
                </div>

                <div className="w-full flex justify-center pb-10">
                    <ul className="flex justify-center gap-1 sm:gap-3 text-sm sm:text-base font-bold ">
                        {groups.map((group, index) => {
                            return (
                                <li key={group.id} className="flex gap-3 sm:gap-4">
                                    <span
                                        className={` cursor-pointer hover:opacity-100 transition-all ${isActive === group.group ? 'text-primary opacity-100' : 'opacity-50'}`}
                                        onClick={() => handleCategoryClick(group.group)}
                                    >
                                        <span className=" text-inherit">{group.label}</span>
                                        <span className="text-inherit text-[12px] absolute translate-x-[2px] -translate-y-1"> {categoryCounts[group.group]}</span>
                                    </span>
                                    {index < groups.length - 1 && <span className="opacity-50">/</span>}
                                </li>
                            )
                        })}
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
                            theme={project.theme}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;

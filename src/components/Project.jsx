import React, { useState } from 'react';
import Reveal from '../utils/Reveal';
import { Link as RouterLink} from 'react-router-dom';

const Project = ({ project_img, project_name, project_group, project_link }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <RouterLink to={project_link}>
                <div
                    className="rounded-md bg-gray01 cursor-pointer group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Reveal>
                        <div className="w-full h-56 bg-black rounded-t-md overflow-hidden">
                            <img
                                src={project_img}
                                alt={project_name}
                                className="group-hover:scale-110 group-hover:opacity-100 opacity-90 object-cover w-full h-full transition-all duration-300 origin-center cursor-pointer"
                            />
                        </div>
                        <div className="h-24 flex flex-col justify-center px-8">
                            <Reveal direction='left'>
                                <h1 className="text-3xl font-bold">{project_name}</h1>
                            </Reveal>
                            <Reveal direction='left' delay={.2}>
                                <span
                                    className="font-bold text-gray02"
                                >
                                    {isHovered ? 'Show project' : project_group}
                                </span>
                            </Reveal>
                        </div>

                    </Reveal>
                </div>
            </RouterLink>
        </>
    );
};

export default Project;

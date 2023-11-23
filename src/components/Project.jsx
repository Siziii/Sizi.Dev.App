import React, { useState } from 'react';
import Tilt from '../utils/Tilt';
import { Link as RouterLink} from 'react-router-dom';
import Reveal from '../utils/Reveal';

const Project = ({ project_img, project_name, project_group, project_link }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <RouterLink to={project_link}>
                <Reveal delay={.2}>
                <Tilt>
                <div
                    className="rounded-md bg-gray01 cursor-pointer group aspect-square"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{transformStyle: "preserve-3d"}}
                >
                        <div
                            className="w-full h-3/4 overflow-hidden p-3 transition-all duration-300"
                            style={{transform: "translateZ(20px)"}}
                        >
                            <div className='bg-[#1d1e1f] w-full h-full rounded-md'>

                            </div>
                            {/* <img
                                src={project_img}
                                alt={project_name}
                                className="object-cover w-full h-full cursor-pointer rounded-md"
                            /> */}
                        </div>
                        <div className="h-1/4  flex flex-col justify-center px-8" style={{transformStyle: "preserve-3d"}}>

                                <h1 className="text-3xl font-bold" style={{transform: "translateZ(40px)"}}>{project_name}</h1>


                                <span
                                    className="font-bold text-gray02"
                                    style={{transform: "translateZ(30px)"}}
                                >
                                    {isHovered ? 'Show project' : project_group}
                                </span>

                        </div>

                </div>
                </Tilt>
                </Reveal>
            </RouterLink>
        </>
    );
};

export default Project;

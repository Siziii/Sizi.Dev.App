// ProjectPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../data/projectData';
import Page404 from './Page404';
import { FiHome, FiMail } from 'react-icons/fi';
import { BsArrowReturnLeft, BsFillForwardFill } from 'react-icons/bs';
import Reveal from '../utils/Reveal';
import Preloader from './Preloader';

const ProjectPage = ({ id }) => {


    // Retrieve project data based on the id
    const project = projectData.find((item) => item.id === id);

    if (!project) {
        return <><Page404 /></>;
    }

    const openNewPage = (link) => {
        window.open(link, '_blank');
    }

    return (

        <Preloader delay={200}>
        <div className="bg-gray01 w-screen min-h-screen md:h-screen overflow-hidden">
            <div className='z-20 absolute h-24 w-full'>
                <div className='flex justify-end items-center h-full mr-3 sm:mr-12'>
                    <Reveal>
                        <Link to={"/"}>
                            <div className="flex group">
                                <div className='h-10 w-10 bg-[#2f3032] rounded-full flex justify-center items-center hover:brightness-110 hover:scale-110 mr-2'>
                                    <FiHome size={20} />
                                </div>
                                <span className="pointer-events-none opacity-0 absolute translate-y-4 group-hover:translate-y-10 group-hover:opacity-100 transition-all">
                                    Home
                                </span>
                            </div>
                        </Link>
                    </Reveal>
                    <Reveal delay={.1}>
                        <Link to={"/#contact"}>
                            <div className="flex group">
                                <div className='h-10 w-10 bg-[#2f3032] rounded-full flex justify-center items-center hover:brightness-110 hover:scale-110 mr-2'>
                                    <FiMail size={20} />
                                </div>
                                <span className="pointer-events-none opacity-0 absolute -translate-x-[6px] translate-y-4 group-hover:translate-y-10 group-hover:opacity-100 transition-all">
                                    Contact
                                </span>
                            </div>
                        </Link>
                    </Reveal>
                    <Reveal delay={.2}>
                        <Link to={"/#projects"}>
                            <div className="flex  group">
                                <div className='h-10 w-10 bg-[#2f3032] rounded-full flex justify-center items-center hover:brightness-110 hover:scale-110 mr-2'>
                                    <BsArrowReturnLeft size={20} />
                                </div>
                                <span className="pointer-events-none opacity-0 absolute -translate-x-[2px] translate-y-4 group-hover:translate-y-10 group-hover:opacity-100 transition-all">
                                    Return
                                </span>
                            </div>
                        </Link>
                    </Reveal>
                </div>
            </div>
            <div className="flex w-full h-full flex-col md:flex-row">

                <div className="w-full md:w-1/2 h-full bg-gray04">

                    <div className='flex items-center justify-center w-full h-full'>
                        <img src={project.image} alt="project_image" className='z-10 w-[80%] aspect-square mb-8 mt-24 md:m-0 max-w-xl rounded-lg md:hover:-translate-y-8 transition-all duration-500' />
                    </div>

                </div>

                <div className="w-full md:w-1/2 h-full flex flex-col justify-center">

                    <div className="flex flex-col xs:flex-row items-center my-6 xs:pl-8">
                        <Reveal delay={0}>
                            <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center' style={{ background: project.theme }}>
                                <img src={project.logo} alt="logo" className='w-8 h-8 sm:w-12 sm:h-12' />
                            </div>
                        </Reveal>
                        <Reveal direction='left' delay={.1}>
                            <div className="flex flex-col items-center xs:items-start xs:ml-8">
                                <h1 className="text-4xl sm:text-5xl font-bold">{project.title}</h1>
                                <h2 className='text-lg font-bold' style={{ color: project.theme }}>{project.subtitle}</h2>
                            </div>
                        </Reveal>
                    </div>

                    <div className='flex flex-col pl-8'>

                        <Reveal direction='left' delay={.3}>
                            <p className="max-w-lg pr-8">{project.paragraph}</p>
                        </Reveal>

                        <div className='mt-2 sm:mt-6 mb-2'>
                            <Reveal direction='left' delay={.4}>
                                <span className='font-bold text-primary' style={{ color: project.theme }}>{project.tech_title}</span>
                            </Reveal>
                        </div>

                        <div className="flex gap-4 flex-wrap mr-4">
                            {project.tech_icons.map((icon, index) => (
                                <Reveal key={index} direction='left' delay={index / 10 + .4}>
                                    <div key={index} className="flex justify-center group">
                                        {icon}
                                        <span className="pointer-events-none opacity-0 absolute translate-y-4 group-hover:translate-y-8 group-hover:opacity-100 transition-all">
                                            {project.tech[index]}
                                        </span>
                                    </div>
                                </Reveal>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row my-8">
                            <button
                                className="group border-2 py-2 w-40 rounded-md hover:bg-white hover:text-gray03 transition-all mb-4 sm:mb-0  mr-4 flex justify-center items-center"
                                onClick={() => openNewPage(project.btn01_link)}
                            >
                                {project.btn01_text}
                                <BsFillForwardFill size={20} className='ml-2 group-hover:fill-gray03 group-hover:ml-4 transition-all' />
                            </button>

                            {project.btn02_text && (
                                <button
                                    className="group border-2 py-2 w-40 rounded-md hover:bg-white hover:text-gray03 transition-all flex justify-center items-center "
                                    onClick={() => openNewPage(project.btn02_link)}
                                >
                                    {project.btn02_text}
                                    <BsFillForwardFill size={20} className='ml-2 group-hover:fill-gray03 group-hover:ml-4 transition-all' />
                                </button>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </Preloader>
    );
};

export default ProjectPage;

import heroImage from '../assets/hero.svg';
import heroImageMobile from '../assets/hero_mobile.svg';
import { useEffect, useState, useRef } from 'react';
import natasha from '../assets/natasha.svg'
import Reveal from '../utils/Reveal';
const HeroImage = () => {
    const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

    const eyeLeft = useRef();
    const eyeRight = useRef();

    const calcAngle = (element) => {
        if (!element.current) return;

        const elX = element.current.getBoundingClientRect().left + element.current.clientWidth / 2;
        const elY = element.current.getBoundingClientRect().top + element.current.clientHeight / 2;

        const rad = Math.atan2(mouseCoordinates.x - elX, mouseCoordinates.y - elY);
        const rot = rad * (180 / Math.PI) * -1;

        return rot;
    };

    const handleMouseMove = (event) => {
        setMouseCoordinates({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const leftEyeStyle = {
        transform: `translateX(5.83rem) translateY(-22.3rem) rotate(${calcAngle(eyeLeft)}deg)`,
    };

    const rightEyeStyle = {
        transform: `translateX(6.25rem) translateY(-22.3rem) rotate(${calcAngle(eyeRight)}deg)`,
    };

    return (
        <div className='flex justify-center items-center h-full pointer-events-none'>
            <div className='hidden xl:block w-[35rem] mt-32'>
                <Reveal delay={1.2}>
                <img src={natasha} alt="natasha" className='absolute w-24 translate-x-32 -translate-y-8 opacity-50' />
                </Reveal>
                <div className=' absolute w-[35rem] h-[23rem] -translate-y-16 dotedbg'/>

                <img src={heroImage} alt="heroimage" className='relative' />

                <div className='flex'>
                    <div className='z-10 w-[7px] h-[7px] flex justify-center items-end' ref={eyeLeft} style={leftEyeStyle}>
                        <div className='w-1 h-1 rounded bg-[#111111]' />
                    </div>
                    <div className='z-10  w-[7px] h-[7px] flex justify-center items-end' ref={eyeRight} style={rightEyeStyle}>
                        <div className='w-1 h-1 rounded bg-[#111111]' />
                    </div>
                </div>
                
            </div>
            <div className='xl:hidden w-full flex justify-center absolute'>
                <div className='absolute w-20 xs:w-24 opacity-50 lg:-translate-x-16 lg:-translate-y-12 -translate-x-8 xs:-translate-x-14 translate-y-12'>
                    <Reveal delay={1.2}>
                    <img src={natasha} alt="natasha" />
                    </Reveal>
                </div>
                <img src={heroImageMobile} alt="heroimage" className='absolute w-full max-w-md mt-24 lg:mt-0' />
            </div>
        </div>

    );
}

export default HeroImage;

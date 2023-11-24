import avatar from '../assets/avatar.png'
import { useEffect, useState, useRef } from 'react';

const HeroAvatar = () => {
    const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

    const catEyeLeft = useRef();
    const catEyeRight = useRef();
    const manEyeLeft = useRef();
    const manEyeRight = useRef();

    const calcAngle = (element) => {
        if (!element.current) return;

        const elX = element.current.getBoundingClientRect().left + element.current.clientWidth / 2;
        const elY = element.current.getBoundingClientRect().top + element.current.clientHeight / 2;

        const rad = Math.atan2(mouseCoordinates.x - elX, mouseCoordinates.y - elY);
        const rot = rad * (180 / Math.PI) * -1;

        return rot;
    }

    const handleMouseMove = (event) => {
        setMouseCoordinates({ x: event.clientX, y: event.clientY })
    }

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);

        return () => { document.removeEventListener("mousemove", handleMouseMove) }
    }, [])

    const catLeftEyeStyle = { transform: `translateX(-9.32rem) translateY(-1.4rem) rotate(${calcAngle(catEyeLeft)}deg)` }

    const catRightEyeStyle = { transform: `translateX(-7.1rem) translateY(-1.4rem) rotate(${calcAngle(catEyeRight)}deg)` }

    const menLeftEyeStyle = { transform: `translateX(-1.45rem) translateY(-2rem) rotate(${calcAngle(manEyeLeft)}deg)` }

    const manRightEyeStyle = { transform: `translateX(3.1rem) translateY(-2rem) rotate(${calcAngle(manEyeRight)}deg)` }


    return (
        <div className='flex justify-center items-center h-full pointer-events-none'>
            <div className='hidden xl:flex justify-center items-center'>
                <img src={avatar} alt="" className='w-[32rem] absolute' />

                <div className='absolute z-10 w-5 h-5 flex justify-center items-end' ref={catEyeLeft} style={catLeftEyeStyle}>
                    <div className='w-3 h-3 rounded-full bg-[#000000]' />
                </div>
                <div className='absolute z-10  w-5 h-5 flex justify-center items-end' ref={catEyeRight} style={catRightEyeStyle}>
                    <div className='w-3 h-3 rounded-full bg-[#000000]' />
                </div>
                <div className='absolute z-10 w-8 h-8 flex justify-center items-end' ref={manEyeLeft} style={menLeftEyeStyle}>
                    <div className='w-6 h-6 rounded-full bg-[#000000]' />
                </div>
                <div className='absolute z-10  w-8 h-8 flex justify-center items-end' ref={manEyeRight} style={manRightEyeStyle}>
                    <div className='w-6 h-6  rounded-full bg-[#000000]' />
                </div>
            </div>

            <div className='flex xl:hidden justify-center items-center'>
                <img src={avatar} alt="" className='w-full max-w-xs' />
            </div>
        </div>
    );
}

export default HeroAvatar;
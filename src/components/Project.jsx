import Tilt from '../utils/Tilt';
import { Link as RouterLink } from 'react-router-dom';
import Reveal from '../utils/Reveal';
import * as s from "../styles/CustomStyles"

const Project = ({ thumbnail, title, group, link, paragraph, logo, theme }) => {
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    }

    return (
        <Reveal><RouterLink to={link}><Tilt>
            <div
                className="rounded-md bg-gray01 cursor-pointer group flex flex-row justify-between p-4 sm:p-8 gap-4 w-full h-full"
                style={s.p3d}
            >

                <div className='flex flex-col justify-between sm:w-1/2 gap-5' style={s.p3d}>

                    <div className='flex gap-4  items-center' style={s.tz40}>
                        <div className='w-10 h-10 sm:w-12 sm:h-12 aspect-square rounded-full flex items-center justify-center' style={{ background: theme }}>
                            <img src={logo} alt="logo" className='w-6 h-6 sm:w-7 sm:h-7' />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-2xl sm:text-3xl'>{title}</h1>
                            <h2 className='font-semibold text-sm sm:text-base md:text-lg opacity-50'>{group}</h2>
                        </div>
                    </div>

                    <p className='opacity-50 md:text-lg' style={{ transform: "translateZ(30px)" }}>{truncateText(paragraph, 95)}</p>
                    <button className="border-2 py-2 w-40 rounded-md hover:bg-white hover:text-gray03 transition-all" style={s.tz20}>Read more..</button>
                </div>

                <div className='hidden sm:flex max-w-[15rem] w-1/2 aspect-square bg-[#212122] rounded-md items-center justify-center' style={{ ...s.p3d, ...s.tz10 }}>
                    <img src={thumbnail} alt="" className='w-full aspect-square rounded-md' style={s.tz40} />
                </div>

            </div>
        </Tilt></RouterLink></Reveal>
    );
};

export default Project;

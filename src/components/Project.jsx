import Tilt from '../utils/Tilt';
import { Link as RouterLink} from 'react-router-dom';
import Reveal from '../utils/Reveal';

const Project = ({thumbnail, title, group, link, paragraph,logo,theme}) => {
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
          return text.slice(0, maxLength) + '...';
        }
        return text;
     }
      
    return (
        <>
            <RouterLink to={link}>
                <Reveal delay={.2}><Tilt>
                
                <div
                    className="rounded-md bg-gray01 cursor-pointer group flex flex-row p-4 gap-4 w-full"
                    style={{transformStyle: "preserve-3d"}}
                >

                <div className='flex flex-col justify-between sm:w-1/2 gap-5' style={{transformStyle: "preserve-3d"}}>

                    <div className='flex gap-4  items-center'  style={{ transform: "translateZ(40px)" }}>
                        <div className='w-10 h-10 sm:w-12 sm:h-12 aspect-square rounded-full flex items-center justify-center' style={{background: theme}}>
                            <img src={logo} alt="logo" className='w-6 h-6 sm:w-7 sm:h-7' />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-2xl sm:text-3xl'>{title}</h1>
                            <h2 className='font-semibold text-sm sm:text-base md:text-lg opacity-50'>{group}</h2>
                        </div>
                    </div>

                    
                    <p className='opacity-50 text-sm md:text-base'  style={{ transform: "translateZ(30px)" }}>{truncateText(paragraph, 100)}</p>
                    <button className="border-2 py-2 w-40 rounded-md hover:bg-white hover:text-gray03 transition-all"  style={{ transform: "translateZ(20px)" }}>Read more..</button>
                </div>
                
                <div className='hidden sm:block w-1/2 aspect-square bg-[#212122] rounded-md'  style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d"}}>
                    <img src={thumbnail} alt="" className='w-full h-full aspect-square rounded-md' style={{ transform: "translateZ(40px)"}}/>
                </div>

                
                </div>
                
                </Tilt></Reveal>
            </RouterLink>
        </>
    );
};

export default Project;

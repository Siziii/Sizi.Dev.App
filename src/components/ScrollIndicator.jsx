import { Link } from "react-scroll";
const ScrollIndicator = ({ activepage }) => {
    return (
        <div className=" pointer-events-none z-50 fixed h-screen w-screen hidden sm:flex justify-end">
            
            <div className="flex flex-col justify-center items-center w-[10%]">

                <hr className="border-l-2 border-gray02 h-full rounded-b-full mb-4"/>

                <Link to="home" smooth={true} duration={500}>
                    <div className={`pointer-events-auto rounded-full border-2  flex items-center justify-center mb-2 transition-all hover:border-white hover:w-4 hover:h-4 ${activepage == 'home' ? 'w-4 h-4 border-white' : 'w-2 h-2 border-gray02'} cursor-pointer`}>
                        <div className={`w-2 h-2 rounded-full bg-primary ${activepage == 'home' ? '' : 'hidden'}`} />
                    </div>
                </Link>
                <Link to="about" smooth={true} duration={500}>
                    <div className={`pointer-events-auto rounded-full border-2 flex items-center justify-center mb-2 transition-all hover:border-white hover:w-4 hover:h-4 ${activepage == 'about' ? 'w-4 h-4 border-white' : 'w-2 h-2 border-gray02'} cursor-pointer`}>
                        <div className={`w-2 h-2 rounded-full bg-primary ${activepage == 'about' ? '' : 'hidden'}`} />
                    </div>
                </Link>
                <Link to="projects" smooth={true} duration={500}>
                    <div className={`pointer-events-auto rounded-full border-2 flex items-center justify-center mb-2 transition-all hover:border-white hover:w-4 hover:h-4 ${activepage == 'projects' ? 'w-4 h-4 border-white' : 'w-2 h-2 border-gray02'} cursor-pointer`}>
                        <div className={`w-2 h-2 rounded-full bg-primary ${activepage == 'projects' ? '' : 'hidden'}`} />
                    </div>
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                    <div className={`pointer-events-auto rounded-full border-2 flex items-center justify-center transition-all hover:border-white hover:w-4 hover:h-4 ${activepage == 'contact' ? 'w-4 h-4 border-white' : 'w-2 h-2 border-gray02'} cursor-pointer`}>
                        <div className={`w-2 h-2 rounded-full bg-primary ${activepage == 'contact' ? '' : 'hidden'}`} />
                    </div>
                </Link>
                <hr className="border-l-2 border-gray02 h-full rounded-t-full mt-4"/>
            </div>
        </div>
    );
}

export default ScrollIndicator;
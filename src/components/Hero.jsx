import HeroImage from "./HeroImage";
import { Link } from "react-scroll";
import Reveal from "../utils/Reveal";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Hero = () => {
    const [text] = useTypewriter({
        words: ['WEB DEVELOPER', '3D ARTIST', 'UX/UI DEISNGER'],
        loop: 0,
        typeSpeed: 80,
        deleteSpeed: 40,
        delaySpeed: 2000
    })
    return (
        <div className=" w-[80%] h-full flex flex-col lg:flex-row mt-32 mx-auto">

            <div className="w-full lg:w-1/2 xl:w-2/5 flex justify-center lg:justify-end">
                <div className="flex flex-col items justify-center">
                    <div className="flex">
                        <div className="flex flex-col -mr-8">
                            <span className="font-bold font-code text-gray02">{`<div>`}</span>
                            <hr className="h-full border-l-2 border-gray02 rounded-full w-[2px]" />
                            <span className="font-bold font-code text-gray02">{`</div>`}</span>
                        </div>

                        <div className="flex flex-col sm:mr-8 py-8">
                            <Reveal direction="left">
                                <span className=" text-2xl -mb-1 ml-1">Hello, I'm</span>
                            </Reveal>
                            <h1 className="font-bold text-4xl xs:text-5xl sm:text-7xl">Ivan Škara</h1>
                            <Reveal direction="right" delay={1}>    
                            <div className="w-full text-right mt-1">
                                <span className="font-bold text-xl text-primary">{text}<Cursor cursorStyle='<' /></span>
                            </div>
                            </Reveal>
                        </div>

                    </div>
                    <div className="mt-8 hidden lg:block">
                        <Reveal>
                            <Link to="about" smooth={true} duration={500}>
                                <button className="border-2 py-2 w-40 rounded-full hover:bg-white hover:text-gray03 transition-all">About</button>
                            </Link>
                        </Reveal>
                    </div>

                </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-3/5">
                <HeroImage />
            </div>
            <div className="lg:hidden absolute left-[50vw] top-[90vh] -translate-x-1/2">
                    <Reveal>
                        <Link to="about" smooth={true} duration={500}>
                            <button className="border-2 py-2 w-40 rounded-full hover:bg-white hover:text-gray03 transition-all">About</button>
                        </Link>
                    </Reveal>
            </div>

        </div>
    );
}

export default Hero;
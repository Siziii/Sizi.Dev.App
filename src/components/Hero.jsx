import { Link } from "react-scroll";
import Reveal from "../utils/Reveal";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import HeroAvatar from "./HeroAvatar";
import OutlinedTitle from "../utils/OutlinedTitle";

const Hero = () => {
    const [text] = useTypewriter({
        words: ['WEB DEVELOPER', '3D ARTIST', 'UX/UI DEISNGER'],
        loop: 0,
        typeSpeed: 80,
        deleteSpeed: 40,
        delaySpeed: 2000
    })
    return (
        <div className=" w-[80%] h-full flex flex-col-reverse xl:flex-row mx-auto gap-8 justify-center py-16">
            <div className="flex flex-col justify-center items-center xl:items-start  w-full xl:w-2/5">
                <div className="flex">
                    <div className="flex flex-col -mr-8">
                        <span className="font-bold font-mono opacity-50">{`<div>`}</span>
                        <hr className="h-full border-l-2 opacity-50 rounded-full w-[2px]" />
                        <span className="font-bold font-mono opacity-50">{`</div>`}</span>
                    </div>

                    <div className="flex flex-col sm:mr-8 py-8">
                        <Reveal direction="left">
                            <span className=" text-2xl -mb-1 ml-1">Hello, I'm</span>
                        </Reveal>
                        <OutlinedTitle text={"Ivan Škara"} mt={10} mb={10} justify={"left"}/>
                        <Reveal direction="right" delay={1}>
                            <div className="w-full text-right mt-1">
                                <span className="font-bold text-xl text-primary">{text}<Cursor cursorStyle='<' /></span>
                            </div>
                        </Reveal>
                    </div>

                </div>
                <div className="mt-8">
                <Reveal>
                    <Link to="about" smooth={true} duration={500}>
                        <button className="border-2 py-2 w-40 rounded-full hover:bg-white hover:text-gray03 transition-all">About</button>
                    </Link>
                </Reveal>
                </div>

            </div>

            <div className="w-full xl:w-3/5">
                <HeroAvatar />
            </div>

        </div>
    );
}

export default Hero;
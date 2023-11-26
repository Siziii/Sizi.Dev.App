import { useState, lazy, Suspense } from "react";
import { FiMail } from "react-icons/fi";
import Reveal from "../utils/Reveal";
import { Link } from "react-scroll";
import OutlinedTitle from "../utils/OutlinedTitle";

//lazy load 3dAnims
const LazyWorld_desktop = lazy(() => import('./Anims/World_desktop'));
const LazyWorld_mobile = lazy(() => import('./Anims/World_mobile'));

const Contact = () => {

    const isMobile = window.innerWidth <= 400;
    const [isMailVisible, setIsMailVisible] = useState(false);

    return (
        <div className="bg-gray0 flex justify-center items-center w-full h-full ">

            <div className="flex flex-col md:flex-row w-[80%] justify-center pt-8 pb-16">

                <div className="flex justify-center items-center h-[300px] xs:h-[400px] md:w-1/2 w-full">
                    <Suspense fallback="Loading Animation...">
                        <div>
                            {isMobile ? <LazyWorld_mobile /> : <LazyWorld_desktop />}
                        </div>
                    </Suspense>
                </div>

                <div className="flex flex-col justify-center md:w-1/2 w-full">
                    <Reveal>
                        <div className="flex items-center mb-4">
                            <div className="h-12 w-12 aspect-square mr-4 bg-primary rounded-full flex justify-center items-center hover:animate-spin">
                                <FiMail size={24} />
                            </div>
                            <OutlinedTitle text={"Say Hello"} justify={"left"}/>
                        </div>
                    </Reveal>
                    <Reveal direction="left" delay={.2}>
                        <p className="text-lg">You can reach out to me by sending message to:</p>
                    </Reveal>
                    {
                        isMailVisible ? (
                            <Reveal direction="left">
                            <a className="text-primary text-lg font-bold" href="mailto:sizi.dev.contact@gmail.com">sizi.dev.contact@gmail.com</a>
                            </Reveal>
                        ):(
                            <Reveal direction="left" delay={.3}>
                            <button className="text-primary text-lg font-bold hover:scale-105" onClick={()=>setIsMailVisible(true)}>{`Reveal mail >`}</button>         
                            </Reveal>
                        )
                    }
                    <Reveal >
                        <div className="w-full flex justify-center sm:justify-start">
                            <Link to="home" smooth={true} duration={500}>
                                <button className="border-2 py-2 w-40 mt-8 rounded-full hover:bg-white hover:text-gray03 transition-all">Back to home</button>
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}

export default Contact;
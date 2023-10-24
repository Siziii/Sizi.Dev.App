import Reveal from "../../utils/Reveal";
import Logo from "../../assets/logo.svg"
const WhoAmI = () => {
    return (
        <div className="bg-gray01 sm:rounded-md flex flex-col px-8 py-4">
            <Reveal direction="right">
                <h1 className=" text-3xl font-semibold">Who am I?</h1>
            </Reveal>
            <hr className="border-t-2 rounded-full border-gray02 mt-2" />

            <div className="flex my-5 h-full">
                <div className="flex flex-col sm:flex-row items-center">
                    <Reveal delay={.1}>
                        <div className="flex">
                            <div className="w-32 h-32 my-4 sm:my-0">
                                <img src={Logo} alt="" />
                            </div>
                        </div>
                    </Reveal>
                    <Reveal delay={.2}>
                        <div className="sm:ml-8">
                            <p className="text-gray02">
                                Recent graduate with a profound passion for web development, game development, and 3D art.  I am communicative, reliable, responsible, and highly ambitious person. Comfortable working independently and in teams. In my free time, I am dedicated to improving my skills through various projects and I also enjoy producing music.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}

export default WhoAmI;
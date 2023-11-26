import Reveal from "../../utils/Reveal";
import Tilt from "../../utils/Tilt";
import Logo from "../../assets/logo.svg"
const WhoAmI = () => {
    return (
        <Reveal><Tilt>
            <div className="bg-gray01 h-full w-full sm:rounded-md flex flex-col px-8 py-4" style={{transformStyle: "preserve-3d"}}>
                <h1 className=" text-3xl font-semibold">Who am I?</h1>
                <hr className="border-t-2 rounded-full border-white opacity-50 mt-2" />

                <div className="flex my-5 h-full flex-col sm:flex-row items-center" style={{transformStyle: "preserve-3d"}}>
                    <img src={Logo} alt="" className="w-32 h-32 mr-8 my-4 sm:my-0" style={{transform: "translateZ(30px)"}}/>
                    <p className="opacity-50" style={{transform: "translateZ(20px)"}}>
                        Recent graduate with a profound passion for web development, game development, and 3D art.  I am communicative, reliable, responsible, and highly ambitious person. Comfortable working independently and in teams. In my free time, I am dedicated to improving my skills through various projects and I also enjoy producing music.
                    </p>
                </div>
            </div>
        </Tilt></Reveal>
    );
}

export default WhoAmI;
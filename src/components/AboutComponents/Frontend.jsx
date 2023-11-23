import { FaCode } from "react-icons/fa";
import Reveal from "../../utils/Reveal";
import techIcons from "../../data/iconsData";
import Tilt from "../../utils/Tilt";

const Frontend = () => {
    const languages = ['Html', 'CSS3', 'Javascript', 'React', 'Django', 'Androidstudio'];

    const devTools = ['Tailwindcss', 'Bootstrap', 'Framer Motion', 'Github', 'Git', 'Vite', 'Vercel', 'Docker', 'Sass', 'Visual Studio'];

    // Function to map tech names to icons using the techIcons data
    function getTechIcons(techNames) {
        return techNames.map((techName) => {
            const iconData = techIcons.find((icon) => icon.name === techName);
            return iconData ? iconData.icon : null;
        });
    }

    const languageIcons = getTechIcons(languages);
    const devToolIcons = getTechIcons(devTools);

    return (
        <Reveal><Tilt>
            <div className="flex flex-col justify-center items-center py-8 bg-gray01 sm:rounded-md" style={{ transformStyle: "preserve-3d" }}>

                <div className="flex flex-col items-center" style={{ transformStyle: "preserve-3d" }}>
                    <div className="rounded-full bg-primary w-12 h-12 mb-2 flex items-center justify-center" style={{ transform: "translateZ(40px)" }}>
                        <FaCode size={20} />
                    </div>
                    <h1 className="font-bold text-2xl" style={{ transform: "translateZ(40px)" }}>Frontend developer</h1>
                    <span className="font-light" style={{ transform: "translateZ(30px)" }}>Crafting Digital Experiences Through Code</span>
                </div>

                <div className="flex h-full flex-col items-center"style={{ transform: "translateZ(20px)" }}>
                    <h2 className="text-primary font-semibold mt-6 mb-2">Languages I Speak:</h2>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                        {languageIcons.map((icon, index) => (
                            <div key={index} className="flex justify-center group">
                                {icon}
                                <span className="pointer-events-none opacity-0 absolute translate-y-4 group-hover:translate-y-8 group-hover:opacity-100 transition-all">
                                    {languages[index]}
                                </span>
                            </div>
                        ))}
                    </div>
                    <h2 className="text-primary font-semibold mt-6 mb-2">Dev tools:</h2>
                    <div className="grid grid-cols-5 gap-4">
                        {devToolIcons.map((icon, index) => (
                            <div key={index} className="flex justify-center group">
                                {icon}
                                <span className="pointer-events-none opacity-0 absolute translate-y-4 group-hover:translate-y-8 group-hover:opacity-100 transition-all">
                                    {devTools[index]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Tilt></Reveal >
    );
}

export default Frontend;

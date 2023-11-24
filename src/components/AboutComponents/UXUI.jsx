
import { FaPalette } from "react-icons/fa";
import Reveal from "../../utils/Reveal";
import techIcons from "../../data/iconsData";
import Tilt from "../../utils/Tilt";

const UXUI = () => {

    const programStack = ['Photoshop', 'Illustrator', 'Adobe XD', 'Figma', 'Pen and paper'];

    function getTechIcons(techNames) {
        return techNames.map((techName) => {
            const iconData = techIcons.find((icon) => icon.name === techName);
            return iconData ? iconData.icon : null;
        });
    }

    const programStackIcons = getTechIcons(programStack);

    return (
        <Reveal><Tilt>
            <div className="bg-gray01 sm:rounded-md h-full flex flex-col justify-center items-center py-8" style={{ transformStyle: "preserve-3d" }}>
                
                <div className="flex flex-col items-center" style={{ transformStyle: "preserve-3d" }}>
                    <div className="rounded-full bg-primary w-12 h-12 mb-2 flex items-center justify-center" style={{ transform: "translateZ(40px)" }}>
                        <FaPalette size={20} />
                    </div>
                    <h1 className=" font-bold text-2xl" style={{ transform: "translateZ(40px)" }}>UX/UI Designer</h1>
                    <span className="w-full h-12 text-center mb-2" style={{ transform: "translateZ(30px)" }}>Designing With a Focus on User-Centered Aesthetics</span>
                </div>

                <div className="flex h-full flex-col items-center" style={{ transform: "translateZ(20px)" }}>
                    <h2 className="text-primary font-semibold mb-2">Things I enjoy designing:</h2>

                    <span className="opacity-50">UX, UI, Web, Apps, Logos</span>

                    <h2 className="text-primary font-semibold mt-6 mb-2">Program Stack:</h2>

                    <div className="grid grid-cols-5 gap-4">
                        {programStackIcons.map((icon, index) => (
                            <div key={index} className="flex justify-center group">
                                {icon}
                                <span className="pointer-events-none opacity-0 absolute translate-y-4 group-hover:translate-y-8 group-hover:opacity-100 transition-all whitespace-nowrap">
                                    {programStack[index]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Tilt></Reveal>
    );
}

export default UXUI;

import { FaPalette } from "react-icons/fa";
import Reveal from "../../utils/Reveal";
import techIcons from "../../data/iconsData";

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
        <div className="bg-gray01 sm:rounded-md">
            <Reveal>
                <div className="flex flex-col justify-center items-center py-8">
                    <div className="rounded-full bg-primary w-12 h-12 mb-2 flex items-center justify-center hover:animate-spin">
                        <FaPalette size={20} />
                    </div>

                    <h1 className=" font-bold text-2xl ">UX/UI Designer</h1>

                    <span className="font-light">Designing With a Focus on User-Centered Aesthetics</span>

                    <h2 className="text-primary font-semibold mt-6 mb-2">Things I enjoy designing:</h2>

                    <span className="text-gray02">UX, UI, Web, Apps, Logos</span>

                    <h2 className="text-primary font-semibold mt-6 mb-2">Program Stack:</h2>

                    <div className="grid grid-cols-5 gap-4">
                    {programStackIcons.map((icon, index) => (
                            <div key={index} className="flex justify-center group">
                                {icon}
                                <span className="pointer-events-none opacity-0 absolute translate-y-4 group-hover:translate-y-8 group-hover:opacity-100 transition-all">
                                    {programStack[index]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>
        </div>
    );
}

export default UXUI;
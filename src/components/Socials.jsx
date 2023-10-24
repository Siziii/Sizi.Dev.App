import { SiArtstation, SiGithub, SiLinkedin } from "react-icons/si";
import Reveal from "../utils/Reveal";
const Socials = () => {
    return (
        <div className="h-full flex items-center">
            <ul className="flex">
                <Reveal direction="left" delay={.2}>
                    <li className="mr-4 md:opacity-30 transition-all hover:opacity-100 pointer-events-auto cursor-pointer">
                        <SiLinkedin size={24} />
                    </li>
                </Reveal>
                <Reveal direction="left" delay={.4}>
                    <li className="mr-4 md:opacity-30 transition-all hover:opacity-100 pointer-events-auto cursor-pointer">
                        <SiGithub size={24} />
                    </li>
                </Reveal>
                <Reveal direction="left" delay={.6}>
                    <li className="mr-4 md:opacity-30 transition-all hover:opacity-100 pointer-events-auto cursor-pointer">
                        <SiArtstation size={24} />
                    </li>
                </Reveal>
            </ul>
        </div>
    );
}

export default Socials;
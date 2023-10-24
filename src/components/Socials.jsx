import { SiArtstation, SiGithub, SiLinkedin } from "react-icons/si";
import Reveal from "../utils/Reveal";
const Socials = () => {
    return (
        <div className="h-full flex items-center">
            <ul className="flex">
                <Reveal direction="left" delay={.2}>
                    <li className="mr-4 md:opacity-30 transition-all hover:opacity-100 pointer-events-auto cursor-pointer">
                        <a href="https://www.linkedin.com/in/ivan-%C5%A1kara-426488247/" target="_blank" rel="noopener noreferrer">
                        <SiLinkedin size={24} />
                        </a>
                    </li>
                </Reveal>
                <Reveal direction="left" delay={.4}>
                    <li className="mr-4 md:opacity-30 transition-all hover:opacity-100 pointer-events-auto cursor-pointer">
                        <a href="https://github.com/Siziii" target="_blank" rel="noopener noreferrer">
                        <SiGithub size={24} /> 
                        </a>
                    </li>
                </Reveal>
                <Reveal direction="left" delay={.6}>
                    <li className="mr-4 md:opacity-30 transition-all hover:opacity-100 pointer-events-auto cursor-pointer">
                        <a href="https://www.artstation.com/artbysizi" target="_blank" rel="noopener noreferrer">
                        <SiArtstation size={24} />
                        </a>
                    </li>
                </Reveal>
            </ul>
        </div>
    );
}

export default Socials;
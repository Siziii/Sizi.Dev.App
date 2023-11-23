import { BiLogoUnity } from "react-icons/bi";
import { BsPenFill } from "react-icons/bs";
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobexd, SiAndroidstudio, SiBlender, SiBootstrap, SiCss3, SiDjango, SiDocker, SiFigma, SiFramer, SiGit, SiGithub, SiHtml5, SiJavascript, SiReact, SiSass, SiTailwindcss, SiVercel, SiVisualstudio, SiVite } from "react-icons/si";
import Quixel from '../assets/quixel.svg';
import Designer from '../assets/substance_d.svg';
import Painter from '../assets/substance_p.svg';

const techIcons = [
        { name: 'Framer Motion', icon: <SiFramer size={32} className="transition-all opacity-50 hover:opacity-100" /> },
        { name: 'Blender', icon: <SiBlender size={32} className="transition-all opacity-50 hover:opacity-100" /> },
        { name: 'Substance Painter', icon: <img src={Painter} alt="Substance Painter" className="w-8 h-8 transition-all opacity-50 hover:opacity-100" /> },
        { name: 'Substance Designer', icon:  <img src={Designer} alt="Substance Designer" className="w-8 h-8 transition-all opacity-50 hover:opacity-100" /> },
        { name: 'Quixel Suite', icon: <img src={Quixel} alt="Quxiel Suite" className="w-8 h-8 transition-all opacity-50 hover:opacity-100" /> },
        { name: 'Unity 3D', icon: <BiLogoUnity size={32} className="transition-all opacity-50 hover:opacity-100" /> },
        { name: 'Tailwindcss', icon: <SiTailwindcss size={32} className="transition-all opacity-50 hover:opacity-100 hover:scale-110" /> },
        { name: 'Bootstrap', icon: <SiBootstrap size={32} className="transition-all opacity-50 hover:opacity-100 hover:scale-110" /> },
        { name: 'Github', icon: <SiGithub size={32} className="transition-all opacity-50 hover:opacity-100 hover:scale-110" /> },
        { name: 'Git', icon: <SiGit size={32} className="transition-all opacity-50 hover:opacity-100 hover:scale-110" /> },
        { name: 'Vite', icon: <SiVite size={32} className="transition-all opacity-50 hover:opacity-100 hover:scale-110" /> },
        { name: 'Vercel', icon: <SiVercel size={32} className="transition-all opacity-50 hover:opacity-100 hover:scale-110" /> },
        { name: 'Docker', icon: <SiDocker size={32} className="transition-all opacity-50 hover:opacity-100 hover:scale-110" /> },
        { name: 'Photoshop', icon: <SiAdobephotoshop size={32} className="transition-all opacity-50 hover:opacity-100" />},
        { name: 'Illustrator',icon: <SiAdobeillustrator size={32} className="transition-all opacity-50 hover:opacity-100" />},
        { name: 'Adobe XD',icon: <SiAdobexd size={32} className="transition-all opacity-50 hover:opacity-100" />},
        { name: 'Figma', icon: <SiFigma size={32} className="transition-all opacity-50 hover:opacity-100" />},
        { name: 'Pen and paper', icon: <BsPenFill size={32} className="transition-all opacity-50 hover:opacity-100" />},
        { name: 'Html', icon: <SiHtml5 size={32} className="transition-all opacity-50 hover:opacity-100 hover:scale-110" /> },
        { name: 'CSS3', icon: <SiCss3 size={32} className="transition-all opacity-50 hover:opacity-100 hover:scale-110" /> },
        { name: 'Javascript', icon: <SiJavascript size={32} className="transition-all opacity-50 hover:opacity-100 hover:scale-110" /> },
        { name: 'React', icon: <SiReact size={32} className="transition-all opacity-50 hover:opacity-100 hover:scale-110" /> },
        { name: 'Django', icon: <SiDjango size={32} className="transition-all opacity-50 hover:opacity-100 hover:scale-110" /> },
        { name: 'Androidstudio', icon: <SiAndroidstudio size={32} className="transition-all opacity-50 hover:opacity-100 hover:scale-110" /> },
        { name: 'Sass', icon: <SiSass size={32} className="transition-all opacity-50 hover:opacity-100 hover:scale-110" /> },
        { name: 'Visual Studio', icon: <SiVisualstudio size={32} className="transition-all opacity-50 hover:opacity-100 hover:scale-110" /> },
];

export default techIcons;

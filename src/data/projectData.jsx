import techIcons from './iconsData';

//Main Images
import ArtstationImage from '../assets/project-images/artstation.png';
import ColorPickerImage from '../assets/project-images/colorpicker.png';
import KickSnareImage from '../assets/project-images/kicksnare.png';
import RustSkinsImage from '../assets/project-images/rustskins.png';
import PortfolioImage from '../assets/project-images/portfolio.png';
import ForecastImage from"../assets/project-images/forecast.png";
import CalendarImage from"../assets/project-images/calendar.png";
//Thumbnails
import ArtStationThumbnail from "../assets/project-images/artstation_thumbnail.png"; 
import ColorPickerThumbnail from "../assets/project-images/colorpicker_thumbnail.png"; 
import KickSnareThumbnail from "../assets/project-images/kicksnare_thumbnail.png";
import RustSkinsThumbnail from "../assets/project-images/rustskins_thumbnail.png"; 
import PortfolioThumbnail from"../assets/project-images/portfolio_thumbnail.png";
import ForecastThumbnail from"../assets/project-images/forecast_thumbnail.png";
import CalendarThumbnail from"../assets/project-images/calendar_thumbnail.png";
//Logos
import ArtstationLogo from '../assets/project-logos/artstation_logo.svg';
import ColorPickerLogo from '../assets/project-logos/colorpicker_logo.svg';
import KickSnareLogo from '../assets/project-logos/kicksnare_logo.svg';
import RustSkinsLogo from '../assets/project-logos/rustskins_logo.svg';
import PortfolioLogo from '../assets/project-logos/portfolio_logo.svg';
import CalendarLogo from '../assets/project-logos/calendar_logo.svg';
import ForecastLogo from '../assets/project-logos/forecast_logo.svg';

const projectData = [
    {
        id: 'SkySync',
        title: 'SkySync',
        subtitle: 'Weather forecast application',
        paragraph: "SkySync is a weather forecast application designed to provide users with a visually appealing and intuitive way to check the weather. I created this project to practice fetching data from APIs, utilizing three different APIs for various functionalities.",
        tech_title: 'Built with:',
        tech: ['React', 'Vite', 'Tailwindcss', 'Vercel', 'Github', 'Figma'],
        btn01_text: 'Visit Site',
        btn01_link: 'https://SkySync-forecast.vercel.app',
        btn02_text: 'View code',
        btn02_link: 'https://github.com/Siziii/SkySync',
        image: ForecastImage,
        logo: ForecastLogo,
        theme:'#ec6e4c',
        thumbnail: ForecastThumbnail,
        project_group:'Web Development',
        project_link:'/projects/SkySync',
    },
    {
        id: 'Git-Calendar',
        title: 'Git Calendar',
        subtitle: 'Github commit calendar',
        paragraph: "GitHub Commit Calendar is a web application that allows you to visualize your GitHub repository's commit history in a calendar format. It provides a user-friendly way to explore commits made on different dates and view commit details.",
        tech_title: 'Built with:',
        tech: ['React', 'Vite', 'Tailwindcss', 'Vercel', 'Github', 'Figma'],
        btn01_text: 'Visit Site',
        btn01_link: 'https://commit-calendar.vercel.app/',
        btn02_text: 'View code',
        btn02_link: 'https://github.com/Siziii/Calendar-Commits-App',
        image: CalendarImage,
        logo: CalendarLogo,
        theme:'#00a6a6',
        thumbnail: CalendarThumbnail,
        project_group:'Web Development',
        project_link:'/projects/Git-Calendar',
    },
    {
        id: 'Portfolio-Website',
        title: 'Portfolio',
        subtitle: 'Personal Website',
        paragraph: "You're currently browsing my portfolio website, which I designed and built using Figma, React, Vite, Tailwind CSS, and Framer Motion. It serves as a platform to showcase my various projects and experiences. If you're curious, it's also open source on GitHub, so feel free to fork, tinker, or even steal a few ideas. This site is hosted on Vercel, adding to its smooth performance and accessibility. Enjoy your visit!",
        tech_title: 'Built with:',
        tech: ['React', 'Vite', 'Tailwindcss', 'Framer Motion', 'Vercel', 'Github', 'Figma'],
        btn01_text: 'Visit Site',
        btn01_link: 'https://ivanskara.dev/',
        btn02_text: 'View code',
        btn02_link: 'https://github.com/Siziii/Sizi.Dev.App/',
        image: PortfolioImage,
        logo: PortfolioLogo,
        theme:'#18d1b0',
        thumbnail: PortfolioThumbnail,
        project_group:'Web Development',
        project_link:'/projects/Portfolio-Website',
    },
    {
        id: 'Color-Picker',
        title: 'Color Picker',
        subtitle: 'Chrome Extension',
        paragraph: 'This is a Chrome extension I developed to simplify color selection in my daily workflow. Simple Color Picker is free and intuitive tool that simplifies the process of picking and copying colors from any web page, making it perfect for web designers, graphic artists, and developers.',
        tech_title: 'Built with:',
        tech: ['Javascript', 'Html', 'CSS3'],
        btn01_text: 'Download',
        btn01_link: 'https://chrome.google.com/webstore/detail/simple-color-picker/ocllcbfmpihajnjjobfglcgdfbcalddb',
        btn02_text: 'View code',
        btn02_link: 'https://github.com/Siziii/ColorPicker',
        image: ColorPickerImage,
        logo: ColorPickerLogo,
        theme:'#1570e5',
        thumbnail: ColorPickerThumbnail,
        project_group:'Web Development',
        project_link:'/projects/Color-Picker',
    },
    {
        id: 'Rust-Skins',
        title: 'Rust Skins',
        subtitle: 'Virtual Assets for games',
        paragraph: "In 2016, I worked on skins (virtual assets) for the popular game Rust. This process involved uploading the skins to the Steam Workshop, and a total of seven of my skins gained approval and were officially incorporated into the game by Facepunch, the game's developer.",
        tech_title: 'Tools used:',
        tech: ['Quixel Suite','Photoshop','Unity 3D'],
        btn01_text: 'Visit Workshop',
        btn01_link: 'https://steamcommunity.com/id/JohnCisors/myworkshopfiles',
        image: RustSkinsImage,
        logo: RustSkinsLogo,
        theme:'#b93a26',
        thumbnail: RustSkinsThumbnail,
        project_group:'3D Art',
        project_link:'/projects/Rust-Skins',
    },
    {
        id: 'KickSnare',
        title: 'KickSnare',
        subtitle: 'PC Game',
        paragraph: "In 2021, as part of a Game Development class and drawing inspiration from my passion for music production, I created an arcade game called 'Kick Snare'. It is a game that tests player's ability to synchronise rhythm and gameplay. Game is made in Unity Engine (C#).",
        tech_title: 'Built with:',
        tech: ['Unity 3D', 'Photoshop', 'Illustrator'],
        btn01_text: 'Download Game',
        btn01_link: 'https://siziii.itch.io/kick-snare',
        image: KickSnareImage,
        logo: KickSnareLogo,
        theme:'#cb2c2c',
        thumbnail: KickSnareThumbnail,
        project_group:'Game Development',
        project_link:'/projects/KickSnare',
    },
    {
        id: 'Artstation-Portfolio',
        title: 'Artstation',
        subtitle: '3D Art Showcase',
        paragraph: "Here, I showcase my passion for creating 3D art. I specialize in hard surface modeling using Blender, the creation of seamless procedural textures with Substance Designer and procedural texturing in Substance Painter. If you're curious about my process, feel free to reach out with any questions or collaborations.",
        tech_title: 'Tools used:',
        tech: ['Blender', 'Substance Designer','Substance Painter'],
        btn01_text: 'Explore',
        btn01_link: 'https://www.artstation.com/artbysizi',
        image: ArtstationImage,
        logo: ArtstationLogo,
        theme:'#13aff0',
        thumbnail: ArtStationThumbnail,
        project_group:'3D Art',
        project_link:'/projects/Artstation-Portfolio',
    },

];
// Function to map tech names to icons
function getTechIcons(techNames) {
    return techNames.map((techName) => {
        const iconData = techIcons.find((icon) => icon.name === techName);
        return iconData ? iconData.icon : null;
    });
}

// Map tech names to icons for each project
projectData.forEach((project) => {
    project.tech_icons = getTechIcons(project.tech);
});
export default projectData;
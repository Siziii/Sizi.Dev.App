import Project from "./Project";
import PlantpulseThumbnail from "../assets/project-images/plantpulse_thumbnail.jpg"; 
import ArtStationThumbnail from "../assets/project-images/artstation_thumbnail.jpg"; 
import ColorPickerThumbnail from "../assets/project-images/colorpicker_thumbnail.jpg"; 
import KickSnareThumbnail from "../assets/project-images/kicksnare_thumbnail.jpg";
import RustSkinsThumbnail from "../assets/project-images/rustskins_thumbnail.jpg"; 
import PortfolioThumbnail from"../assets/project-images/portfolio_thumbnail.jpg"; 
const Projects = () => {

    const webDevProjects = [
        { id: 1, project_img: PlantpulseThumbnail, project_name: "Plantpulse", project_group:"Web Development", project_link:'/projects/Plant-Pulse'},
        { id: 2, project_img: ColorPickerThumbnail, project_name: "ColorPicker", project_group:"Web Development", project_link:'/projects/Color-Picker'},
        { id: 3, project_img: PortfolioThumbnail, project_name: "Portfolio Website", project_group:"Web Development", project_link:'/projects/Portfolio-Website'},
        { id: 4, project_img: KickSnareThumbnail, project_name: "KickSnare", project_group:"Game Development", project_link:'/projects/KickSnare'},
        { id: 5, project_img: RustSkinsThumbnail, project_name: "Rust Skins", project_group:"3D Art", project_link:'/projects/Rust-Skins'},
        { id: 6, project_img: ArtStationThumbnail, project_name: "Artstation Portfolio", project_group:"3D Art", project_link:'/projects/Artstation-Portfolio'},
    ];
    
    return (
        <div className="w-[80%] h-full mx-auto">
            <div className="flex flex-col w-full h-full justify-center py-16">
                <div className="flex flex-col items-center">
                    <h2 className="text-primary font-bold text-1xl sm:text-2xl">~ From Concept to Creation ~</h2>
                    <h1 className="font-bold text-2xl sm:text-7xl mb-8 uppercase">Discover what I've built</h1>
                </div>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {webDevProjects.map((project) => (
                        <Project key={project.id} project_img={project.project_img} project_name={project.project_name} project_group={project.project_group} project_link={project.project_link}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;

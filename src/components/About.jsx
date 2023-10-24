import Reveal from "../utils/Reveal";
import Artist from "./AboutComponents/Artist";
import Education from "./AboutComponents/Education";
import Frontend from "./AboutComponents/Frontend";
import UXUI from "./AboutComponents/UXUI";
import WhoAmI from "./AboutComponents/WhoAmI";

const About = () => {
    return (
        <div className="sm:w-[80%] h-full mx-auto py-4 sm:py-8">
            <div className="grid gap-4">
                <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                    <WhoAmI />
                    <Education />
                </div>
                <div className="grid gap-4 grid-cols-1 xl:grid-cols-3">
                    <Frontend />
                    <Artist />
                    <UXUI />
                </div>
            </div>
        </div>
    );
}

export default About;
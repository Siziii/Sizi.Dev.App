import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ScrollIndicator from "./ScrollIndicator";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Socials from "./Socials";
import ContactButton from "./ContactButton";
import Contact from "./Contact";
import Navbar from "./Navbar";
const MainPage = () => {
    const initialActivePage = localStorage.getItem('activepage') || 'home';
    const [activepage, setActivePage] = useState(initialActivePage);

    const HomeRef = useRef(null);
    const AboutRef = useRef(null);
    const ProjectsRef = useRef(null);
    const ContactRef = useRef(null);

    const isHomeInView = useInView(HomeRef, { margin: "-50% 0% -50% 0%" });
    const isAboutInView = useInView(AboutRef, { margin: "-50% 0% -50% 0%" });
    const isProjectsInView = useInView(ProjectsRef, { margin: "-50% 0% -50% 0%" });
    const isContactInView = useInView(ContactRef, { margin: "-50% 0% -50% 0%" });

    useEffect(() => {
        if (isHomeInView) {
            setActivePage('home')
        }
        else if (isAboutInView) {
            setActivePage('about')
        }
        else if (isProjectsInView) {
            setActivePage('projects')
        }
        else if (isContactInView) {
            setActivePage('contact')
        }
    }, [isHomeInView, isAboutInView, isProjectsInView, isContactInView]);


    // Save the active page in local storage whenever it changes.
    useEffect(() => {
        localStorage.setItem('activepage', activepage);
    }, [activepage]);


    return (
        <div className="scroll-smooth bg-gray01 overflow-hidden">
            <div className="hidden md:block">
                <ScrollIndicator activepage={activepage} />
                <ContactButton activepage={activepage} />
                <div className="pointer-events-none h-32 w-full absolute flex justify-center">
                    <hr className="z-50 border-t-2 w-[8%] rounded-r-full border-gray02 absolute top-[63px] left-0" />
                    <div className="w-[80%] flex justify-between ">
                        <Socials />
                    </div>
                </div>
            </div>

            <div className="md:hidden">
                <Navbar />
            </div>

            <section ref={HomeRef} id="home" className="min-h-[calc(100vh-8rem)] bg-gray01">
                <Hero />
            </section>
            <section ref={AboutRef} id="about" className="bg-gray03">
                <About />
            </section>
            <section ref={ProjectsRef} id="projects" className="bg-gray03">
                <Projects />
            </section>
            <section ref={ContactRef} id="contact" className="bg-gray01">
                <Contact />
            </section>
        </div>
    );
}
export default MainPage;
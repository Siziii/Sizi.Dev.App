import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from 'framer-motion';
import { FiMail } from "react-icons/fi";
import Reveal from "../utils/Reveal";

const ContactButton = ({ activepage }) => {

    const [buttonType, setButtonType] = useState(activepage === 'home' ? 'large' : 'small')
    const transitionDelay = activepage === "home" ? 0 : .5;

    const buttonVariations = {
        home: { x: 0, y: 0, opacity: 1 },
        about: { x: "-82vw", y: "40vh", opacity: 1, padding_top: '0.5rem' },
        projects: { x: "-82vw", y: "40vh", opacity: 1 },
        contact: { x: "-82vw", y: "40vh", opacity: 0 },
    };

    useEffect(() => {
        let timer;
        if (activepage === 'home') {
            timer = setTimeout(() => {
                setButtonType('large');
            }, 700);
        } else {
            setButtonType('small');
        }
        return ()=>{
            clearTimeout(timer);
        }
    }, [activepage])

    return (
        <div className="pointer-events-none h-32 w-full fixed z-50 hidden md:block">
            <div className="h-full w-[80%] mx-auto">
                <div className="h-full flex items-center justify-end">
                    <Reveal delay={.7}>
                    <Link to="contact" smooth={true} duration={1500}>
                        <motion.button
                            className={`pointer-events-auto group rounded-full border-2 transition-all hover:bg-white ${buttonType === 'large' ? 'py-2 px-12' : 'p-3'}`}
                            initial={buttonVariations[activepage]}
                            animate={buttonVariations[activepage]}
                            transition={{ duration: 0.2, ease: "easeInOut",delay: transitionDelay }}
                            disabled={activepage === "contact"}
                        >
                        {
                            buttonType === 'large' ? (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.1, ease: "easeOut" }}
                                >
                                    <span className="text-white group-hover:text-gray03 transition-all">Hire me</span>
                                </motion.div>
                            ) : (
                                <Reveal>
                                    <FiMail size={20} className="group-hover:fill-gray03 group-hover:scale-125" />
                                </Reveal>
                            )
                        }
                        </motion.button>
                    </Link>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}

export default ContactButton;
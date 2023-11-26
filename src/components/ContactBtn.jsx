import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from 'framer-motion';
import { FiMail } from "react-icons/fi";

const ContactButton_new = ({ activepage }) => {
    const [buttonType, setButtonType] = useState('large')
    const [animationState, setAnimationState] = useState('home')

    const scrollDelays = [
        { id: "home", delay: 3000 },
        { id: "about", delay: 2000 },
        { id: "projects", delay: 1000 },
        { id: "contact", delay: 0 }
    ]
    const buttonVariations = {
        home: { x: 0, y: 0, opacity: 1, width: "160px" },
        about: { x: "-82vw", y: "40vh", opacity: 1, width: "44px" },
        projects: { x: "-82vw", y: "40vh", opacity: 1, width: "44px" },
        contact: { x: "-82vw", y: "40vh", opacity: 0, width: "44px" },
    };
    const contentVariants = {
        exit: { opacity: 0, scale: 0, transition: { duration: 0 }},
        enter: { opacity: 1, scale: 1, transition: { type: 'spring', delay: 0.5,stiffness: 100, damping: 8}},
    };
    useEffect(() => {
        if (activepage === 'home') {
            setAnimationState('home')
            setButtonType('large')
        } else {
            setButtonType('small')
            setAnimationState(activepage)
        }
    }, [activepage])

    return (
        <div className="pointer-events-none h-32 w-full fixed z-50 hidden md:block">
            <div className="h-full w-[80%] mx-auto">
                <div className="h-full flex items-center justify-end">
                    <Link to="contact" smooth={true} duration={scrollDelays.find(page => page.id === activepage)?.delay || 0}>
                        <AnimatePresence mode="wait">
                            <motion.button
                                key={'buttonKey'}
                                className=" pointer-events-auto h-11 border-2 rounded-full hover:bg-white transition-colors flex items-center justify-center group"
                                initial={buttonVariations[activepage]}
                                animate={buttonVariations[animationState]}
                                transition={{type: 'spring',stiffness: 100, damping: 14 }}
                                disabled={activepage === "contact"}
                            >
                                <AnimatePresence mode="wait">
                                    {buttonType === 'large' ? (
                                        <motion.div
                                            key="hire-me"
                                            variants={contentVariants}
                                            initial="exit"
                                            animate="enter"
                                            exit="exit"
                                            className="group-hover:text-gray03 transition-colors"
                                        >
                                            Hire me
                                        </motion.div>

                                    ) : (
                                        <motion.div
                                            key="fi-mail"
                                            variants={contentVariants}
                                            initial="exit"
                                            animate="enter"
                                            exit="exit"
                                        >
                                            <FiMail size={24} className="fill-gray03 group-hover:scale-125 transition-transform" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </AnimatePresence>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ContactButton_new;
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from 'framer-motion';
import { FiMail } from "react-icons/fi";

const ContactButton_new = ({ activepage, prevActivepage }) => {
    const [buttonType, setButtonType] = useState('large')
    const [animationState, setAnimationState] = useState('home')
    const transitionDelay = activepage === "home" ? 0 : .5;

    const buttonVariations = {
        home: { x: 0, y: 0, opacity: 1, width: "160px" },
        home2: { x: 0, y: 0, opacity: 1, width: "44px" },
        about: { x: "-82vw", y: "40vh", opacity: 1, width: "44px" },
        projects: { x: "-82vw", y: "40vh", opacity: 1, width: "44px" },
        contact: { x: "-82vw", y: "40vh", opacity: 0, width: "44px" },
    };
    const contentVariants = {
        exit: { opacity: 0, scale: 0, transition: { duration: 0.15, ease: 'easeOut' } },
        enter: { opacity: 1, scale: 1, transition: { duration: 0.15, ease: 'easeIn' } },
    };

    useEffect(() => {
        let timer;
        let timer2;

        if (activepage === 'about' && prevActivepage === 'home') {
            //from home to about  
            setAnimationState('home2')
            setButtonType('small')

            timer = setTimeout(() => {
                setAnimationState('about')
            }, 500);

        } else if (activepage === 'home' && prevActivepage === 'about') {
            //from about to home
            setAnimationState('home2')
            timer = setTimeout(() => {

                setAnimationState('home')
            }, 500);
            timer2 = setTimeout(() => {
                setButtonType('large')
            }, 800);
        } else if (activepage === 'home') {
            setAnimationState(activepage)
            setButtonType('large')
        } else {
            setAnimationState(activepage)
            setButtonType('small')
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
            if (timer2) {
                clearTimeout(timer2);
            }
        };
    }, [activepage,prevActivepage])
    
    return (
        <div className="pointer-events-none h-32 w-full fixed z-50 hidden md:block">
            <div className="h-full w-[80%] mx-auto">
                <div className="h-full flex items-center justify-end">
                    <Link to="contact" smooth={true} duration={1500}>
                    <AnimatePresence mode="wait">
                        <motion.button
                            key={'buttonKey'}
                            className=" pointer-events-auto h-11 border-2 rounded-full hover:bg-white transition-colors flex items-center justify-center group"
                            initial={buttonVariations[activepage]}
                            animate={buttonVariations[animationState]}
                            transition={{ duration: .5, type: 'spring', delay: transitionDelay }}
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
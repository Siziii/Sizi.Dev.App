import { useState } from "react";
import { isMobile } from "../styles/CustomStyles";
import { motion } from "framer-motion";

const OutlinedTitle = ({ text, mt, mb, justify }) => {
    const wordArray = text.split(' ');
    const [isHovered, setIsHovered] = useState(false);

    const calculateRotation = (index) => {
        const pattern = [-10, 0, 10, 0];
        return pattern[index % pattern.length];
    }
    const calculateY = (index) => {
        return (index % 2) * 10 - 5;
    }
    const spanVariants = {
        initial: { y: 0, rotate: 0 },
        hover: (index) => ({ y: calculateY(index), rotate: calculateRotation(index) }),
    }

    return ( 
        <div
            className="w-full flex"
            style={{ marginTop: mt, marginBottom: mb, justifyContent: justify }}
        >
            {isMobile ? (
                <h1 className='text-center font-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl cursor-default uppercase'>{text}</h1>
            ) : (
                <motion.h1
                    className={`flex flex-wrap items-center justify-center gap-x-4 py-1 font-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl cursor-default uppercase 
                    ${isHovered ? ('text-gray03 outlinetext') : ('')}`}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                >
                    {wordArray.map((word, wordIndex) => (
                        <div
                            key={wordIndex}
                            className="text-inherit flex"
                        >
                            {word.split('').map((letter, letterIndex) => (
                                <motion.div
                                    key={letterIndex}
                                    variants={spanVariants}
                                    animate={isHovered ? 'hover' : 'initial'}
                                    initial="initial"
                                    custom={letterIndex}
                                    className='text-inherit'
                                    transition={{ type: "spring", stiffness: 200, damping: 9 }}
                                >
                                    {letter}
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </motion.h1>
            )}
        </div>
    );
};

export default OutlinedTitle;

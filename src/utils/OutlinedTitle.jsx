import { motion } from 'framer-motion';
import { useState } from 'react';

const OutlinedTitle = ({ text,mt,mb,justify }) => {
    const titleArray = text.split('');
    const [isHovered, setIsHovered] = useState(false)

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
        style={{marginTop:mt,marginBottom:mb,justifyContent:justify}}
        >
            <motion.h1
                className="flex whitespace-pre items-center justify-center font-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl outlinetext cursor-default hover:text-gray03 uppercase"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                {titleArray.map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={spanVariants}
                        animate={isHovered ? ("hover") : ("initial")}
                        initial="initial"
                        custom={index}
                        className='text-inherit'
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    )
}

export default OutlinedTitle;

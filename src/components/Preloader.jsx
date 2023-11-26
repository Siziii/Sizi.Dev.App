import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.svg';
import { useState, useEffect } from 'react';

const Preloader = ({ children, delay }) => {
    const [isLoading, setIsLoading] = useState(true);

    //handle preloader
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [])

    return (
        <>
            <AnimatePresence
                initial={false}
                mode="wait">
                {isLoading && (
                    <motion.div
                        initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
                        animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                        exit={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
                        transition={{ duration: .5, type: 'tween' }}
                        className="bg-gray03 w-screen h-screen fixed z-[9999] flex justify-center items-center overflow-hidden"
                    >
                        <img src={logo} alt="logo" className="h-20 w-20" />
                    </motion.div>
                )}
            </AnimatePresence>

            {children}

        </>
    )
};

export default Preloader;
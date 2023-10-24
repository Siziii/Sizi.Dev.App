import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, direction = "bottom", delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {});
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView]);

    const getVariants = () => {
        if (direction === "left") {
            return {
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { delay } },
            };
        } else if (direction === "right") {
            return {
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { delay } },
            };
        } else {
            return {
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { delay } },
            };
        }
    };

    return (
        <div ref={ref}>
            <motion.div
                variants={getVariants()}
                initial="hidden"
                animate={controls}
                transition={{
                    duration: 0.3
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;

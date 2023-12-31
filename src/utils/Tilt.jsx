import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { isMobile } from "../styles/CustomStyles";
const Tilt = ({ children }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 100 };

    const mouseXSpring = useSpring(x, springConfig);
    const mouseYSpring = useSpring(y, springConfig);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const w = rect.width;
        const h = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = (mouseX / w - 0.5) * 2;
        const yPct = (mouseY / h - 0.5) * 2;
        x.set(xPct);
        y.set(yPct);
    };

    return isMobile ? (
        <div className="w-full h-full">
            { children }
        </div>
    ) : (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                willChange: "transform",
            }}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    )
};

export default Tilt;

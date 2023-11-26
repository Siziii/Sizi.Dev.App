import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';
import Socials from './Socials';

//Navbar links
const navLinks = [
    { to: "home", text: "Home" },
    { to: "about", text: "About" },
    { to: "projects", text: "Projects" },
    { to: "contact", text: "Contact" },
]

//Navbar item template
const NavItem = ({ to, text }) => (
    <Link to={to} smooth={true} offset={-63} duration={500}>
        <li className='p-4 border-b-2 border-gray01 cursor-pointer'>
            {text}
        </li>
    </Link>
)

const Navbar = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const handleNav = () => {
        setIsNavVisible(!isNavVisible);
    };
    const navDropIn = {
        hidden: {
            x: "-100vw",
            y: "4rem",
            transition: {
                type: "easeIn",
                duration: .5,
            }
        },
        visible: {
            x: "0",
            y: "4rem",
            transition: {
                type: "ease",
                duration: .5,
            }
        },
    }

    return (
        <>
            <div className='fixed z-50'>
                <div className="fixed w-full h-16 dotted-bg flex items-center justify-center border-b-2 border-white">
                    <div className='h-full flex items-center justify-between w-[80%]'>
                        <Socials/>
                        <div onClick={handleNav} className='block md:hidden cursor-pointer'>
                            {isNavVisible ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                        </div>
                    </div>

                </div>
                <div>

                </div>

                <div className='z-30 fixed left-0 top-0 w-full'>
                    <AnimatePresence
                        initial={false}
                        mode="wait"
                    >
                        {isNavVisible && (
                            <motion.div
                                initial="hidden"
                                animate={isNavVisible ? "visible" : "hidden"}
                                exit="hidden"
                                variants={navDropIn}
                            >
                                <ul className='fixed bg-gray03 h-screen w-2/3'>
                                    {navLinks.map((link, index) => (
                                        <NavItem key={index} to={link.to} text={link.text} />
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <div className={`z-20 fixed w-screen h-screen bg-black-overlay ${isNavVisible ? 'visible' : 'hidden'}`} onClick={handleNav}/>
        </>
    );
}

export default Navbar;
import { useState, lazy, Suspense } from "react";
import { FiMail } from "react-icons/fi";
import { useForm, ValidationError } from '@formspree/react';
import Reveal from "../utils/Reveal";
import { Link } from "react-scroll";

//lazy load 3dAnims
const LazyWorld_desktop = lazy(() => import('./Anims/World_desktop'));
const LazyWorld_mobile = lazy(() => import('./Anims/World_mobile'));

const Contact = () => {

    const [state, handleSubmit] = useForm("xpzgblqn");
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };
    const rows = message.split('\n').length;

    const isMobile = window.innerWidth <= 400;

    console.log('isMobile' + isMobile)
    return (
        <div className="bg-gray0 sm:rounded-lg flex justify-center items-center w-full h-full ">
            <div className="flex flex-col lg:flex-row w-[80%] justify-center pb-16 lg:pt-16">
                <div className="flex justify-center items-center w-full lg:w-1/3 xl:w-1/2 h-[300px] xs:h-[400px]">
                    <Suspense fallback="Loading Animation...">
                        <div>
                            {isMobile ? <LazyWorld_mobile /> : <LazyWorld_desktop />}
                        </div>
                    </Suspense>
                </div>
                <div className="flex flex-col lg:w-2/3 xl:w-1/2">
                    <Reveal>
                        <div className="flex items-center mb-4">
                            <div className="h-12 w-12 bg-primary rounded-full flex justify-center items-center hover:animate-spin">
                                <FiMail size={24} />
                            </div>
                            <h1 className="text-5xl font-semibold ml-4">Say hello</h1>
                        </div>
                    </Reveal>
                    <Reveal direction="left" delay={.2}>
                        <p className="text-lg">You can reach out to me by sending message to:</p>
                        <a className="text-primary text-lg font-bold mb-8" href="mailto:ivanskara2@gmail.com">sizi.dev.contact@gmail.com</a>
                    </Reveal>
                    <Reveal>
                        <p className="mb-4 text-gray02">Alternatively, you can use the contact form below</p>
                    </Reveal>
                    <Reveal >
                        <form onSubmit={handleSubmit} className="flex flex-col">
                            <input
                                className="mb-2 h-12 px-6  rounded-md bg-gray01 outline-none border-none"
                                placeholder="example@gmail.com"
                                id="email"
                                type="email"
                                name="email"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <textarea
                                className="mb-2 px-6 py-3 min-h-[3rem] h-fit rounded-md bg-gray01 outline-none border-none resize-none"
                                type="text "
                                placeholder="Your message..."
                                value={message}
                                onChange={handleInputChange}
                                rows={rows}
                                id="message"
                                name="message"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <button
                                className="flex w-full items-center justify-center bg-gray01 h-12 rounded-lg hover:brightness-110"
                                type="submit"
                                disabled={state.submitting}
                            >
                                Send Message
                            </button>
                            <div className="w-full flex justify-center sm:justify-start">
                                <Link to="home" smooth={true} duration={500}>
                                    <button className="border-2 py-2 w-40 mt-8 rounded-full hover:bg-white hover:text-gray03 transition-all">Back to home</button>
                                </Link>
                            </div>
                        </form>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}

export default Contact;
import Reveal from "../../utils/Reveal";
const Education = () => {
    return (
        <div className="bg-gray01 sm:rounded-md px-8 py-4">
            <Reveal direction="right">
            <h1 className=" text-3xl font-semibold">Education</h1>
            </Reveal>

            <hr className="border-t-2 rounded-full border-gray02 mt-2" />
            <Reveal direction="right" delay={.1}>
            <div className="mt-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-primary text-lg font-bold ">univ. bacc. inf.</h2>
                    <span className="text-primary text-sm font-bold">2018. - 2023.</span>
                </div>
                <h2 className="font-semibold">Faculty of Informatics and Digital Technologies Rijeka</h2>
                <p className="text-gray02 text">I completed my undergraduate studies at the Faculty of Informatics and Digital Technologies in Rijeka and thereby obtained the bachelor's degree in informatics.</p>
            </div>
            </Reveal>
            <Reveal direction="right" delay={.2}>
            <div className="mt-3">
                <div className="flex justify-between items-center">
                    <h2 className="text-primary text-lg font-bold ">High school education</h2>
                    <span className="text-primary text-sm font-bold">2014. - 2018.</span>
                </div>
                <h2 className="font-semibold">Computer Engineering Tehnician (programmer)</h2>
                <p className="text-gray02 text-">I graduated from Vice Vlatković Vocational School in Zadar, Croatia. In my second year, I chose to specialize in programming, which provided me with a solid foundation for further education in the field.</p>
            </div>
            </Reveal>
        </div>
    );
}

export default Education;
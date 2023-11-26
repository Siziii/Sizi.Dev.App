import Reveal from "../../utils/Reveal";
import Tilt from "../../utils/Tilt";
const Education = () => {
    return (
        <Reveal><Tilt>
        <div className="bg-gray01 sm:rounded-md px-8 py-4" style={{transformStyle: "preserve-3d"}}>

            <h1 className=" text-3xl font-semibold">Education</h1>
            <hr className="border-t-2 rounded-full border-whize opacity-50 mt-2" />

            <div className="flex justify-between items-center mt-2 " style={{transform: "translateZ(40px)"}}>
                <h2 className="text-primary text-lg font-bold ">univ. bacc. inf.</h2>
                <span className="text-primary text-sm font-bold">2018. - 2023.</span>
            </div>

            <h2 className="font-bold" style={{transform: "translateZ(30px)"}}>Faculty of Informatics and Digital Technologies Rijeka</h2>
            <p className="opacity-50" style={{transform: "translateZ(20px)"}}>I completed my undergraduate studies at the Faculty of Informatics and Digital Technologies in Rijeka and thereby obtained the bachelor's degree in informatics.</p>

            <div className="flex justify-between items-center mt-3" style={{transform: "translateZ(40px)"}}>
                <h2 className="text-primary text-lg font-bold ">High school education</h2>
                <span className="text-primary text-sm font-bold">2014. - 2018.</span>
            </div>

            <h2 className="font-bold" style={{transform: "translateZ(30px)"}}>Computer Engineering Tehnician (programmer)</h2>
            <p className="opacity-50" style={{transform: "translateZ(20px)"}}> I graduated from Vice Vlatković Vocational School in Zadar, Croatia. In my second year, I chose to specialize in programming, which provided me with a solid foundation for further education in the field.</p>


        </div>
        </Tilt></Reveal>
    );
}

export default Education;
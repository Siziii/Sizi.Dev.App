import { BiDownload } from "react-icons/bi";
import { FaFilePdf } from "react-icons/fa6";

const CvItems = ({ language }) => {

    const pdfLink = language === 'English' ? ("/pdf/Ivan_Skara_CV_eng.pdf") : ("/pdf/Ivan_Skara_CV_hrv.pdf");

    return (
        <a href={pdfLink} download className="cursor-pointer w-28 sm:w-36 h-44 sm:h-48 bg-[#282828] rounded-lg flex flex-col group relative ">

            <div className="absolute w-full h-full flex justify-center items-end">
                <div className="w-full h-3 bg-[#1aad91] rounded-lg group-hover:h-full transition-all duration-200" />
            </div>
            <div className="z-20 h-full w-full flex justify-center items-center">
                <FaFilePdf size={80} fill="WHITE" className="ml-2 opacity-20 group-hover:scale-110 group-hover:opacity-100 transition-all" />
            </div>
            <div className="z-20 w-full rounded-b-lg py-2 flex items-center justify-center bg-primary">
                <span className="font-bold sm:text-lg flex gap-2">{language} <BiDownload size={24} /></span>
            </div>
        </a>
    );
}

export default CvItems;
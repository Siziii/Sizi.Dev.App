import CvItems from "./CvItems";

const CvDownload = () => {
    return ( 
        <div className="w-screen h-screen bg-gray01 flex items-center justify-center overflow-hidden">
            <div className="w-fit">
                <h1 className="text-center font-light text-3xl sm:text-4xl">CURRICULUM VITAE</h1>
                <h1 className="text-center font-bold text-4xl sm:text-5xl mb-5 text-primary">DOWNLOAD</h1>
                <div className="flex gap-4 w-full justify-center">
                    <CvItems language={"English"} />
                    <CvItems language={"Croatian"}/>
                </div>
                <div className="text-center w-full p-4">
                    <span className="text-gray02 font-bold">Download CV in Your Preferred Language</span>
                </div>
                
            </div>
        </div>
     );
}
 
export default CvDownload;
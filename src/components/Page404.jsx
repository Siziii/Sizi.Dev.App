import { Link as RouterLink } from "react-router-dom";
const Page404 = () => {
    return (
        <div className="bg-gray01 w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col items-center">
                <h1 className="text-[15rem] text-primary font-bold -mt-32"> 404 </h1>
                <h2 className=" text-5xl font-bold -mt-20 mb-8">PAGE NOT FOUND</h2>

                <RouterLink to={'/'}>
                    <button className="border-2 py-2 px-12 rounded-md hover:bg-white hover:text-gray03 transition-all">Return to Main Page</button>
                </RouterLink>
            </div>
        </div>
    );
}

export default Page404;
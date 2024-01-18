import React from "react";
import Header from "../header";
import {TbLetterA as A} from "react-icons/tb";
import {Sidebar} from "../../Sidebar";
import useWindowLocation from "../../../hooks/useWindowLocation";

const Layout = ({children}) => {
    const pathName = useWindowLocation();
    return (
        <div className="flex flex-row min-h-screen text-black">
            <Sidebar currentPath={pathName}/>
            <React.Suspense
                fallback={
                    <div
                        className="absolute flex text-black w-screen h-screen justify-center items-center text-3xl font-extrabold">
                    <span>
                        Loading...
                    </span>
                    </div>}
            >
                <div className="lg:ml-[300px] md:ml-[300px] mt-10 lg:w-[calc(100%-300px)] md:w-[calc(100%-300px)] w-full">{children}</div>
            </React.Suspense>
        </div>);
};

export default Layout;

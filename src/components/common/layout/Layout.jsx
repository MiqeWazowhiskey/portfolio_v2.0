import React from "react";
import Header from "../header";
import {TbLetterA as A} from "react-icons/tb";

const Layout = ({children}) => {
    const [child,setChild] = React.useState("");
    const urlChild = window.location.pathname;
    React.useEffect(() => {
        setChild(urlChild)
    }, [])
    return (
        <div className="flex min-h-[100vh] flex-col text-[#FFFFFF]  bg-gradient-to-r from-amber-200 to-amber-900">
            <div className="fixed h-full w-full flex justify-center  rotate-12 opacity-50 lg:pt-3">
        <span className="text-[#F95738]">
          <A size={800}/>
        </span>
            </div>
            <div className="fixed h-full w-full flex justify-center rotate-12 opacity-50 lg:pt-3">
        <span className="mb-10 mr-10 text-[#F4D35E]">
          <A size={800}/>
        </span>
            </div>
            {child.length>1 && <div className="fixed z-40 w-full h-fit">
                <Header/>
            </div>}
            <React.Suspense
                fallback={
                    <div className="text-black w-full justify-center items-center text-3xl font-extrabold">
                        Loading...
                    </div>
                }
            >
                <div className={child.length>1 ? "pt-20 z-30" : "z-30" }>{children}</div>
            </React.Suspense>
        </div>
    );
};

export default Layout;

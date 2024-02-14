import React from "react";

const Navbar = () => {
    return(
        <>
            <div className="lg:flex lg:items-center lg:justify-between bg-[#F8F4EE]">
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        <img className="h-20 w-40 mx-5" src="https://assets-global.website-files.com/6304f37ec5e0ff0b9beb4b6b/6304f3f51e1ba82f2a01eee6_Asset%201.svg" alt="logo"/>
                    </h2>
                    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex lg:ml-4 lg:mt-0">
                </div>
            </div>
        </>
    );
};

export default Navbar;
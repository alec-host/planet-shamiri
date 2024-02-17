import React from "react";

const Alert = ({ alertMessage, isShown }) => {
    const [showAlert] = React.useState(false);

    const handleClick = (value) => {
        if(isShown){
            isShown(value);
        }
    }

    return (
        <>
            <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500">
                <span className="text-xl inline-block mr-5 align-middle">
                    <i className="fa fa-bell" />
                </span>
                <span className="inline-block align-middle mr-8">
                    <b className="capitalize"></b> {alertMessage}
                </span>
                <button 
                    className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                    onClick={()=>{handleClick(showAlert)}}>
                    <span>×</span>
                </button>
            </div>
        </>
    );
};

export default Alert;
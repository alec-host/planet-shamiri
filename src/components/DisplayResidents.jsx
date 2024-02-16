import generateUUID from "../pages/utils/uuidHelper";

const DisplayResidents = ({residentData}) => {
    if(Array.isArray){
        residentData = [residentData];
    }
    return(
        <>
            <div className="bg-white">
                <div key={generateUUID()} className="mx-auto max-w-2xl">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 xl:gap-x-8">
                        {residentData?.map((result) => (
                            <>
                            <div key={result.id} className="relative bg-white py-6 px-6 rounded-3xl w-70 my-4 shadow-xl">
                                <div className="px-6 rounded-3xl p-5 bg-[#C6C6C6]">
                                    {
                                    <img
                                        className="inline-block h-25 w-25 rounded-full ring-2 ring-white"
                                        src={result?.image}
                                        alt={result?.name}
                                    />
                                    }
                                </div>

                                <div>
                                    <h3 className="mt-1 text-sm font-bold text-gray-400 text-center">{result?.name}</h3>
                                </div>

                                <hr className="mt-2"/>

                                <div className="p-2">
                                    <div>
                                        <h3 className="mt-1 text-sm text-gray-900 text-start">
                                            {
                                            result?.status === "Alive" ? 
                                            <span className="text-xs font-bold text-[#28A745]">STATUS</span>
                                            :
                                            result?.status === "Dead" ?
                                            <span className="text-xs font-bold text-[#E10000]">STATUS</span>
                                            :
                                            <span className="text-xs font-bold text-[#0F69FF]">STATUS</span>
                                            }
                                            :{result?.status}
                                        </h3>
                                    </div>

                                    <div>
                                        <h3 className="mt-1 text-sm text-gray-700 text-start">
                                            <span className="text-xs font-bold">LOCATION</span>:{result?.location.name ? result?.location.name : "Not provided"}
                                        </h3>
                                    </div>

                                </div>

                            </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DisplayResidents;
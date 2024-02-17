import React, { useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { getCharacter } from 'rickmortyapi';
import Breadcrumb from '../components/Breadcrumbs';

const ResidentInfo = () => {

    const [characterInfo,setCharacterInfo] = React.useState([]);

    useEffect(() => {
        getIndividualCharacterInformation();
    },[]);

    const getIndividualCharacterInformation = () => {
        const characterId = new URLSearchParams(window?.location?.search).get('characterId');
        Promise.resolve(getCharacter(parseInt(characterId))).then((response) => {
            setCharacterInfo(response?.data);
            console.log(response.data);
        }).catch((error =>{
            console.log('ERROR ',error);
        }))
    };

    return(
		<>
            <Navbar/>
                <div className="bg-white py-24 sm:py-15">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <Breadcrumb />
                        <div className="mx-auto max-w-7xl lg:text-center"> 
                            {
                                characterInfo ?
                                <div className="relative bg-white py-6 px-6 rounded-3xl w-70 my-4 shadow-xl">
                                    <div className="px-6 rounded-3xl p-5 bg-[#1C3E5C]">
                                        {
                                        <img
                                            className="inline-block h-25 w-25 rounded-full ring-2 ring-white"
                                            src={characterInfo?.image}
                                            alt={characterInfo?.name}
                                        />
                                        }
                                    </div>

                                    <div>
                                        <h3 className="mt-1 text-xl font-bold text-gray-400 text-center">{characterInfo?.name}</h3>
                                    </div>

                                    <hr className="mt-2"/>

                                    <div className="p-2">

                                        <div>
                                            <h3 className="mt-1 text-sm text-gray-700 text-start">
                                                <span className="text-md font-bold">GENDER</span>: {characterInfo?.gender}
                                            </h3>
                                        </div>

                                        <div>
                                            <h3 className="mt-1 text-sm text-gray-700 text-start">
                                                <span className="text-md font-bold">SPECIES</span>: {characterInfo?.species}
                                            </h3>
                                        </div>                                        

                                        <div>
                                            <h3 className="mt-1 text-sm text-gray-700 text-start">
                                                <span className="text-md font-bold">STATUS</span>: {characterInfo?.status}
                                            </h3>
                                        </div> 

                                        <div>
                                            <h3 className="mt-1 text-sm text-gray-700 text-start">
                                                <span className="text-md font-bold">TYPE</span>: {characterInfo.type ? characterInfo.type : "Not provided"}
                                            </h3>
                                        </div>

                                        <div>
                                            <h3 className="mt-1 text-sm text-gray-700 text-start">
                                                <span className="text-md font-bold">ORIGIN</span>: {characterInfo.origin ? characterInfo.origin.name : null}
                                            </h3>
                                        </div> 

                                        <div>
                                            <h3 className="mt-1 text-sm text-gray-700 text-start">
                                                <span className="text-md font-bold">LOCATION</span>: {characterInfo.location ? characterInfo.location.name : null}
                                            </h3>
                                        </div>                                         

                                        <div>
                                            <h3 className="mt-1 text-sm text-gray-700 text-start">
                                                <span className="text-md font-bold">CREATED</span>: {characterInfo?.created}
                                            </h3>
                                        </div>                                         

                                    </div>
                                </div>
                                :
                                null
                            }
                        </div>
                    </div>
                </div> 
            <Footer/>       
		</>
    );
};

export default ResidentInfo;
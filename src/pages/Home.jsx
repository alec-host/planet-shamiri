import React, { useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { getSession } from '../session/appSession';
import { PROFILE_SESSION } from '../session/constant';
import { useNavigate } from 'react-router-dom';
import { getCharacter, getLocations } from 'rickmortyapi';
import generateUUID from './utils/uuidHelper';
 
const Home = () => {

    const [profileData,setProfileData] = React.useState([]);
    const [rickyMontyLocationData,setRickyMontyLocationData] = React.useState([]);
    //const [rickyMontyCharacterData,setRickyMontyCharacterData] = React.useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const session = getSession(PROFILE_SESSION);
        if(session){
            setProfileData(session);
        }else{
            navigate('/login');
        }
        getLocationList();
    },[navigate]);;

    const getLocationList = () => {
        Promise.resolve(getLocations()).then(response =>{
            setRickyMontyLocationData(response?.data.results);
            console.log(response.data.info);
        }).catch((error) => {
            console.error('Error ',error);
        });
    };

    const getResidentCharacterList = (ids) => {
        Promise.resolve(getCharacter(ids)).then(response => {
            console.log(response);
        }).catch((error) => {
            console.error('Error ',error);
        });
    }

    const extractGetParamFromCharacterURLs = (urls) => {
        const result = urls.map(url => parseInt(url.split('/').pop()));
        if(result && result.length > 0){
            getResidentCharacterList(result);
            console.log(result);
            return result;
        }else{
            return "None";
        }
    };

    return profileData.length > 0 ? (
        <>
            <Navbar/> 
                <div className="bg-white py-24 sm:py-15">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8" style={{background:""}}>
                        <div className="mx-auto max-w-7xl lg:text-center">
                            <input
                                type="text"
                                name="Search"
                                id="Search"
                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                maxLength={80}
                                placeholder="Search"
                            />

                            <div className="bg-white">
                                <div key={generateUUID()} className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-8">
                                        {rickyMontyLocationData?.map((result) => (
                                            <>
                                            <div className="relative bg-white py-6 px-6 rounded-3xl w-70 my-4 shadow-xl">
                                                <div className="px-6 rounded-3xl p-5 bg-[#011D2F]">
                                                    {
                                                    /*
                                                    <img
                                                        className="inline-block h-30 w-30 rounded-full ring-2 ring-white"
                                                        src={result.image}
                                                        alt={result.name}
                                                    />
                                                    */
                                                    }
                                                </div>

                                                <div>
                                                    <h3 className="mt-1 text-sm font-bold text-gray-400 text-center">{result.name}</h3>
                                                </div>

                                                <hr className="mt-2"/>

                                                <div className="p-2">
                                                    {
                                                    /*
                                                    <div>
                                                        <h3 className="mt-1 text-sm text-gray-900 text-start">
                                                            {
                                                            result.status === "Alive" ? 
                                                            <span className="text-xs font-bold text-[#28A745]">STATUS</span>
                                                            :
                                                            result.status === "Dead" ?
                                                            <span className="text-xs font-bold text-[#E10000]">STATUS</span>
                                                            :
                                                            <span className="text-xs font-bold text-[#0F69FF]">STATUS</span>
                                                            }
                                                            :{result.status}
                                                        </h3>
                                                    </div>
                                                    */}

                                                    <div>
                                                        <h3 className="mt-1 text-sm text-gray-700 text-start">
                                                            <span className="text-xs font-bold">TYPE</span>:{result.type ? result.type : "Not provided"}
                                                        </h3>
                                                    </div>

                                                    <div>
                                                        <h3 className="mt-1 text-sm text-gray-700 text-start">
                                                            <span className="text-xs font-bold">ORIGIN</span>:{result.name}
                                                        </h3>
                                                    </div> 

                                                    <div>
                                                        <a key={result?.id} href={result?.url} className="group">
                                                            <h3 className="mt-1 text-sm text-gray-700 text-start">
                                                               <span className="text-xs font-bold">RESIDENTS</span>:{extractGetParamFromCharacterURLs(result.residents)}
                                                            </h3>
                                                        </a>
                                                    </div>

                                                </div>

                                            </div>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>   
            <Footer/>
        </>
    ):<></>;
};

export default Home;
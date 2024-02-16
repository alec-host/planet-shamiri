import React, { useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { getSession } from '../session/appSession';
import { PROFILE_SESSION } from '../session/constant';
import { useNavigate } from 'react-router-dom';
import { getCharacter, getLocations } from 'rickmortyapi';
import generateUUID from './utils/uuidHelper';
import DisplayResidents from '../components/DisplayResidents';
import Pagination from '../components/Pagination';
 
const Home = () => {

    const [profileData,setProfileData] = React.useState([]);
    const [rickyMontyLocationData,setRickyMontyLocationData] = React.useState([]);
    const [rickyMontyResidentData,setRickyMontyResidentData] = React.useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const session = getSession(PROFILE_SESSION);
        if(session){
            setProfileData(session);
        }else{
            navigate('/login');
        }
        getLocationList();
    },[navigate]);

    const getLocationList = () => {
        Promise.resolve(getLocations()).then(response =>{
            setRickyMontyLocationData(response?.data.results);
        }).catch((error) => {
            console.error('Error ',error);
        });
    };

    const fetchResidentList = async(residents,locationId) => {
       
        const ids = extractGetParamFromCharacterURLs(residents);
        
        try{
            const response = await getCharacter(ids);
            if(Array.isArray(response.data)){
                setRickyMontyResidentData((prevState) => ({ ...prevState, [locationId]: response.data}));
            }else{
                setRickyMontyResidentData((prevState) => ({ ...prevState, [locationId]: [response.data]}));
            }
            return response.data;
        }catch(error){
            console.error(error);
            return null;
        }
        
    };

    //-.extract GET param from URL.
    const extractGetParamFromCharacterURLs = (urls) => {
        const params = urls.map(url => parseInt(url.split('/').pop()));
        if(params && params.length > 0){
            return params;
        }else{
            return [];
        }
    };

    useEffect(() => {
        rickyMontyLocationData.forEach((location) => {
          fetchResidentList(location.residents,location.id);
        });
    }, [rickyMontyLocationData]);
    
    
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
                                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                maxLength={80}
                                placeholder="Search"
                            />

                            <div className="bg-white">
                                <Pagination currentPage={1}/>
                                <div key={generateUUID()} className="mx-auto">
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                                        {rickyMontyLocationData?.map((result) => (
                                            <>
                                            <div className="relative bg-white py-6 px-6 rounded-3xl w-70 my-4 shadow-xl">
                                                <div className="px-6 rounded-3xl p-1 bg-[#0474BC]">
                                                </div>

                                                <div>
                                                    <h3 className="mt-1 text-md font-bold text-gray-700 text-center">{result.name}</h3>
                                                </div>

                                                <hr className="mt-2"/>

                                                <div className="p-2">

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
                                                               <span className="text-xs font-bold">RESIDENTS</span>:
                                                            </h3>
                                                        </a>
                                                        
                                                        {
                                                            rickyMontyResidentData[result.id] && rickyMontyResidentData[result.id].map((resident) => (
                                                                <DisplayResidents residentData={resident} />
                                                            ))
                                                        }
                                                       
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
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
import LazyImage from '../components/LazyImage';
 
const Home = () => {

    const inputSearch = React.useRef(null);
    const [profileData,setProfileData] = React.useState([]);
    const [rickyMontyLocationData,setRickyMontyLocationData] = React.useState([]);
    const [rickyMontyResidentData,setRickyMontyResidentData] = React.useState({});
    const [filterRickMontyLocattionData,setFilterRickMontyLocattionData] = React.useState([]);

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
            setFilterRickMontyLocattionData(response?.data.results);
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

    const handlePaginationButtonClick = (locationData) => {
        setRickyMontyLocationData(locationData);
        setFilterRickMontyLocattionData(locationData);
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

    const handleOnChange = () => {
        const search = inputSearch?.current.value; 
        filter(search);
    };

    const filter = (searchWord) => {

        let filteredList = [];

        if(searchWord && searchWord.length > 0){
            filteredList = rickyMontyLocationData?.filter((data) =>
                (data.name && data.name?.trim().toLowerCase().includes(searchWord?.trim().toLowerCase())) || 
                (data.type && data.type?.trim().toLowerCase().includes(searchWord?.trim().toLowerCase())) ||
                (data.dimension && data.dimension?.trim().toLowerCase().includes(searchWord?.trim().toLowerCase()))
            );
        }else{
            filteredList = [];
        }
        setFilterRickMontyLocattionData(filteredList);
    };

    const SearchBar = () => {
        return (
            <>
                <div className="mx-auto">
                    <div className="flex">
                        <div className="w-full rounded-lg bg-gray-200 p-5 w-2/4">
                            <div className="flex">
                            <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                                <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                                </svg>
                            </div>
                                <input 
                                    type="text"                                
                                    id="Search" 
                                    name="Search"
                                    className="w-full bg-white pl-2 text-base font-semibold outline-0"  
                                    maxLength={80} 
                                    ref={inputSearch}
                                />
                                <input 
                                    type="button" 
                                    value="Search" 
                                    className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
                                    onClick={handleOnChange}
                                />
                            </div>
                        </div>
                    </div>                
                </div>    
            </>
        );
    };
    
    return profileData.length > 0 ? (
        <>
            <Navbar/> 
                <div className="bg-white py-24 sm:py-15">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8" style={{background:""}}>
                        <div className="mx-auto max-w-7xl lg:text-center">
                            <SearchBar />
                            <div className="bg-white">
                                <Pagination currentPage={1} locationsDataCallback={handlePaginationButtonClick}/>
                                <div key={generateUUID()} className="mx-auto">
                                    
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
                                        
                                        {filterRickMontyLocattionData?.map((result) => (
                                            <>
                                            <div key={result.id} className="relative bg-white py-6 px-6 rounded-3xl w-70 my-4 shadow-xl">
                                                <div className="px-6 rounded-3xl p-1 bg-[#0474BC]">
                                                </div>

                                                <div>
                                                    <h3 className="mt-1 text-xl font-bold text-gray-700 text-center">{result.name}</h3>
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
                                                        
                                                        {(   
                                                            result.residents && result.residents.length > 0 ?     
                                                            rickyMontyResidentData[result.id] && rickyMontyResidentData[result.id].map((resident) => (
                                                                <DisplayResidents residentData={resident} />
                                                            ))
                                                            :
                                                            <div className="relative bg-white py-6 px-6 rounded-3xl w-70 my-4 shadow-xl">
                                                                <div className="px-6 rounded-3xl p-5 bg-[#DA9558]">
                                                                    {
                                                                    <LazyImage
                                                                        src="../../no_residents.jpg"
                                                                        className="inline-block h-25 w-25 rounded-full ring-2 ring-white"
                                                                        alt={result?.name}
                                                                    />
                                                                    }
                                                                </div>
                                                                <div>
                                                                <h3 className="mt-1 text-sm font-bold text-gray-400 text-center">No Residents</h3>
                                                                </div>
                                                            </div>
                                                        )}
                                                       
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
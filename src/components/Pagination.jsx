import React from "react";
import { getLocations } from "rickmortyapi";

const Pagination = ( {currentPage,locationsDataCallback} ) => { 

    const [maxPageNumber,setMaxPageNumber] = React.useState(null);
    const [_currentPage,_setCurrentPage] = React.useState(currentPage);

    const handleClick = (e) => {
        e.preventDefault();
        const {name} = e.target;
        if(name === "Prev"){
            handlePreviousPage();
        }else{
            handleNextPage();
        }
    };

    const handlePreviousPage = () => {
        if(_currentPage >=2){
            _setCurrentPage(previousPageNumber => previousPageNumber - 1);
        }
        getLocationList();
    };

    const handleNextPage = () => {
        if(_currentPage > 0 && _currentPage < maxPageNumber){
            _setCurrentPage(previousPageNumber => previousPageNumber + 1);
        }
        getLocationList();
    };

    const getLocationList = () => {
        Promise.resolve(getLocations( {page: _currentPage} ))?.then(response => {
            if(locationsDataCallback){
                extractPageInfo(response?.data.info);
                locationsDataCallback(response?.data.results);
            }
        }).catch((error) => {
            console.error('Error ',error);
        });
    };

    const extractPageInfo = (resource) => { const {pages} = resource; setMaxPageNumber(pages);};

    return(
        <>
            <nav className="mt-10" aria-label="Pagination">
                <ul className="inline-flex -space-x-px">
                    <li>
                        <button 
                            name="Prev"
                            className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            onClick={handleClick}
                            disabled={_currentPage === 0}
                            >Previous
                        </button>
                    </li>
                    <li>
                        <button 
                            className="bg-blue-50 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700  py-1.5 px-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                            >
                            {_currentPage}
                        </button>
                    </li>
                    <li>
                        <button
                            name="Next"
                            className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-6 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            onClick={handleClick}
                            disabled={_currentPage === 8}
                            >Next
                        </button>
                    </li>
                </ul>
            </nav>        
        </>
    );

};

export default Pagination;
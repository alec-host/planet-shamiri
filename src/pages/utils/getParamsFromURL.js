    //-.extract GET param from URL.
    const extractGetParamFromURLs = (urls) => {
        const params = urls.map(url => parseInt(url.split('/').pop()));
        if(params && params.length > 0){
            return params;
        }else{
            return [];
        }
    };

    export default extractGetParamFromURLs;
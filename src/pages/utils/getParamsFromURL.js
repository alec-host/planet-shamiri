    //-.extract GET param from URL.
    const extractGetParamFromURLs = (urls) => {
        if(urls){
            const params = urls?.map(url => parseInt(url.split('/').pop()));
            if(params && params.length > 0){
                return params;
            }else{
                return [];
            }
        }else{
            return [];
        }
    };

    export default extractGetParamFromURLs;
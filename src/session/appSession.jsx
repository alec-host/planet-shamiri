import Cookies from 'js-cookie';

const setSession = (session_name,value) => {
    if(session_name){
        Cookies.set(session_name,JSON.stringify(value));
    }
};

const getSession = (session_name) => {
    const session = Cookies?.get(session_name);
    if(session){
        return JSON.parse(session);
    }else{
        return null;
    }
};

const deleteSession = (session_name) => {
    if(session_name){
        Cookies.remove(session_name);
    }
};


export {setSession,getSession,deleteSession};
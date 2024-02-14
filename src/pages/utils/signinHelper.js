const authenticateUser = (credentials) => {
    console.log(credentials.email,credentials.password);
    if(credentials){
        if(credentials.email === "supadmin@net.com" && credentials.password === "12345678"){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
};

export default authenticateUser;
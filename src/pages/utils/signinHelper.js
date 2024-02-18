const authenticateUser = (credentials) => {
    console.log(credentials.email,credentials.password);
    if(credentials){
        if(credentials.email === "admin@admin.com" && credentials.password === "admin"){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
};

export default authenticateUser;
import React from 'react';
import { Link } from 'react-router-dom';

const LoginTemplate = () => {

    const inputEmail = React.useRef('');
    const inputPassword = React.useRef('');
    const [errors,setErrors] = React.useState({});

    const handleInputValidatation = (newErrors) => {
        if(!inputEmail?.current.value.trim()) {
            newErrors.email = "Email is required";
        }

        if(!inputPassword?.current.value.trim()) {
            newErrors.password = "Password is required";
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {};
        const newErrors = {};

        handleInputValidatation(newErrors);
        
        if(Object.keys(newErrors).length === 0) {
            setErrors({});
            formData.email = inputEmail?.current.value;
            formData.password = inputPassword?.current.value;

            
            console.log(formData);

        }else{
            setErrors(newErrors);
        }
    };

    return(
		<>
		</>
    );
};

const Login = () => {

    return(<LoginTemplate />);

};

export default Login;
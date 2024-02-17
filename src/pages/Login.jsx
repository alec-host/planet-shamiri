import React from 'react';
import { useNavigate } from 'react-router-dom';
import authenticateUser from './utils/signinHelper';
import { setSession } from '../session/appSession';
import { PROFILE_SESSION } from '../session/constant';
import Alert from '../components/Alert';

const LoginTemplate = () => {

    const inputEmail = React.useRef('');
    const inputPassword = React.useRef('');
    const [errors,setErrors] = React.useState({});
    const [showAlert,setShowAlert] = React.useState(false);

    const navigation = useNavigate();

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

            const isLoggedIn = authenticateUser(formData);

            if(isLoggedIn){
                inputEmail.current.value = '';
                inputPassword.current.value = '';
                setSession(PROFILE_SESSION,JSON.stringify(formData));
                navigation('/');
            }else{
                setShowAlert(true);
            }
        }else{
            setErrors(newErrors);
        }
    };

    return(
		<>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {showAlert && <Alert alertMessage={"Invalid credentials"} isShown={setShowAlert}/>}
                    <img className="mx-auto h-6 w-auto" src="https://assets-global.website-files.com/6304f37ec5e0ff0b9beb4b6b/6304f3f51e1ba82f2a01eee6_Asset%201.svg" alt="code challenge"/>
                    <h2 className="mt-5 text-center text-sm font-bold leading-9 tracking-tight text-gray-400">Code challenge: Rick & Morty API</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                {errors.email && <span className="text-[#E10000] text-sm">{errors.email}</span>}
                                <input 
                                    id="Email" 
                                    name="Email" 
                                    type="Email"
                                    ref={inputEmail}
                                    className="block w-full rounded-md border-0 py-1.5 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            </div>
                            <div className="mt-2">
                                {errors.email && <span className="text-[#E10000] text-sm">{errors.email}</span>}
                                <input 
                                    id="Password" 
                                    name="Password" 
                                    type="password"
                                    ref={inputPassword}
                                    className="block w-full rounded-md border-0 py-1.5 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="text-right">
                            <button type="submit" className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>        
		</>
    );
};

const Login = () => {

    return(<LoginTemplate />);

};

export default Login;
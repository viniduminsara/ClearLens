import StyledInput from "../components/StyledInput.tsx";
import {IoIosMail, IoMdPerson} from "react-icons/io";
import {FaKey} from "react-icons/fa";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useApp} from "../context/AppContext.tsx";
import {useToast} from "../context/ToastContext.tsx";
import {signupService} from "../api/apiServices.ts";


const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const {login} = useApp();
    const {showToast} = useToast();
    const navigate = useNavigate();

    const handleSignUp = async () => {
        if (username && email && password && !usernameError && !emailError && !passwordError) {
            try {
                const response = await signupService(username, email, password);
                if (response.ok) {
                    const data = await response.json();
                    login(data.token);
                    navigate('/');
                    console.log(data);
                } else if (response.status === 409) {
                    const errorData = await response.json();
                    showToast({ type: 'warning', message: errorData.message });
                } else {
                    console.error('Error while signing', response.statusText);
                }
            } catch (error) {
                console.error('Error while signing', error.message);
            }
        } else {
            showToast({ type: 'error', message: 'Please enter valid data.' });
        }
    }


    return (
        <div className="bg-base-200 min-h-screen flex">
            <div className="flex-1">
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='w-full mx-16 md:mx-32'>
                        <div className='w-full flex justify-center items-center'>
                            <img src='/logo.png' className='w-48' alt='logo'/>
                        </div>
                        <div className='w-full flex justify-center items-center mb-8'>
                            <h3 className='text-xl'>Sign up with ClearLens</h3>
                        </div>
                        <div className='mb-4'>
                            <StyledInput icon={<IoMdPerson/>} placeholder='username' value={username} type='text'
                                         changeHandler={(e) => setUsername(e.target.value)}
                                         blurHandler={() => {
                                             if (username.length < 6) {
                                                 setUsernameError("Username cannot be shorter than 6 characters");
                                             } else {
                                                 setUsernameError("");
                                             }
                                         }}
                            />
                            {usernameError &&
                                <div className='text-error'>
                                    {usernameError}
                                </div>
                            }
                        </div>
                        <div className='mb-4'>
                            <StyledInput icon={<IoIosMail/>} placeholder='email' value={email} type='text'
                                         changeHandler={(e) => setEmail(e.target.value)}
                                         blurHandler={() => {
                                             const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

                                             if (email.length === 0) {
                                                 setEmailError("Email address cannot be blank");
                                             } else if (!regex.test(email)) {
                                                 setEmailError("Please enter a valid email address");
                                             } else {
                                                 setEmailError("");
                                             }
                                         }}
                            />
                            {emailError &&
                                <div className="text-error">
                                    {emailError}
                                </div>
                            }
                        </div>
                        <div className='mb-4'>
                            <StyledInput icon={<FaKey/>} placeholder='password' value={password} type='password'
                                         changeHandler={(e) => setPassword(e.target.value)}
                                         blurHandler={() => {
                                             if (password.length < 8) {
                                                 setPasswordError("Password cannot be shorter than 8 characters");
                                             } else {
                                                 setPasswordError("");
                                             }
                                         }}
                            />
                            {passwordError &&
                                <div className='text-error'>
                                    {passwordError}
                                </div>
                            }
                        </div>
                        <button className='btn btn-primary w-full mb-2' onClick={handleSignUp}>Signup</button>
                        <h5>Already have an account? <Link to='/signin' className='link link-primary'>SignIn</Link></h5>
                    </div>
                </div>
            </div>
            <div className="flex-1 hidden md:flex">
                <div
                    className="hero"
                    style={{
                        backgroundImage: "url('/prescription_glasses.jpg')",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello There</h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                                exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;

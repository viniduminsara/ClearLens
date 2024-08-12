import StyledInput from "../components/StyledInput.tsx";
import {IoIosMail, IoMdPerson} from "react-icons/io";
import {FaKey} from "react-icons/fa";
import {useState} from "react";
import {Link} from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="bg-base-200 min-h-screen flex">
            <div className="flex-1">
                <div className='w-full h-full flex justify-center items-center'>
                    <form className='w-full mx-16 md:mx-32'>
                        <div className='w-full flex justify-center items-center'>
                            <img src='/logo.png' className='w-48' alt='logo'/>
                        </div>
                        <div className='w-full flex justify-center items-center mb-8'>
                            <h3 className='text-xl'>Sign up to your account</h3>
                        </div>
                        <StyledInput icon={<IoMdPerson/>} placeholder='username' value={username} type='text'
                                     changeHandler={(e) => setUsername(e.target.value)}/>
                        <StyledInput icon={<IoIosMail/>} placeholder='email' value={email} type='text'
                                     changeHandler={(e) => setEmail(e.target.value)}/>
                        <StyledInput icon={<FaKey/>} placeholder='password' value={password} type='password'
                                     changeHandler={(e) => setPassword(e.target.value)}/>
                        <button className='btn btn-primary w-full mb-2'>Sign in</button>
                        <h5>Already have an account? <Link to='/signin' className='link link-primary'>SignIn</Link></h5>
                    </form>
                </div>
            </div>
            <div className="flex-1 hidden md:flex">
                <div
                    className="hero"
                    style={{
                        backgroundImage: "url('/public/prescription_glasses.jpg')",
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

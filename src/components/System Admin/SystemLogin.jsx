// import './Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

const SystemLogin = () => {
    const [email, setEmail] = useState(''); // State for email input
    const [password, setPassword] = useState(''); // State for password input
    const navigate = useNavigate(); // Hook to navigate programmatically

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'ante@gmail.com' && password === '123456789') {
            navigate('/users');
        } else {
            alert('Invalid credentials! Please try again.');
        }
    };

    return (
        <div className="container flex h-screen w-full justify-center items-center bg-[#D9D9D9] gap-10 font-nunito mb-1">
            <div className="logo-section flex justify-center items-center bg-[#D9D9D9] p-8 ml-36 h-32">
                <img src="/softnet.jpg" alt="Softnet Logo" className="logo w-4/6 h-auto" />
            </div>
            <div className="login-section flex-1 w-1/2 bg-white p-5 rounded-3xl shadow-lg mr-52 mb-5">
                <h2 className="text-xl mb-2 ml-8 mt-8 font-bold">Welcome System Admin</h2>
                <p className="text-xs ml-8 text-gray-500 mb-4">Login to your account</p>
                <form className="flex flex-col" onSubmit={handleLogin}>
                    <label className="mb-5 text-gray-800 font-bold text-xs ml-8">Email</label>
                    <input 
                        type="email" 
                        required 
                        className="w-10/12 ml-8 p-2 mb-4 border border-gray-300 rounded-xl bg-[#D9D9D9]" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="mb-5 text-gray-800 font-bold text-xs ml-8">Password</label>
                    <input 
                        type="password" 
                        required 
                        className="w-10/12 ml-8 p-2 mb-4 border border-gray-300 rounded-xl bg-[#D9D9D9]" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="forgot-password flex justify-end mb-5 text-xs mr-9">
                        <a href="#" className="text-gray-500 underline">Forget password?</a>
                    </div>
                    <button type="submit" className="p-3 bg-[#755BB4] text-white rounded-2xl cursor-pointer ml-8 w-10/12 text-xs">Login</button>
                </form>
                <div className="sign-up flex flex-col items-center mt-4">
                    <div className="social-buttons flex items-center gap-2">
                        <p className="text-gray-500 text-xs mb-2">Sign in with</p>
                        <a href="https://www.google.com" className="flex justify-center items-center w-8 h-8 border border-gray-300 rounded-full">
                            <img src="/download.png" alt="Google Logo" className="google w-6 h-6" />
                        </a>
                        <a href="https://www.facebook.com" className="flex justify-center items-center w-8 h-8 border border-gray-300 rounded-full">
                            <img src="/facebook.png" alt="Facebook Logo" className="facebook w-6 h-6" />
                        </a>
                    </div>
                </div>
                <div className="footer mt-10 text-xs text-center text-gray-500">Copyright @ softnet 2024</div>
            </div>
        </div>
    );
}

export default SystemLogin;

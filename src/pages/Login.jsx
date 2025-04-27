import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const [currentState, setCurrentState] = useState('Login');
    const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (currentState === 'Sign Up') {
                const res = await axios.post(backendUrl + '/user/register', { name, email, password });
                if (res.data.success) {
                    toast.success('Đăng ký thành công!');
                    setCurrentState('Login');
                } else {
                    toast.error(res.data.message);
                }
            } else {
                const res = await axios.post(backendUrl + '/user/login', { email, password });
                if (res.data.success) {
                    setToken(res.data.token);
                    localStorage.setItem('token', res.data.token);
                    toast.success('Đăng nhập thành công!');
                } else {
                    toast.error(res.data.message);
                }
            }
        } catch (error) {
            console.error(error.response?.data || error.message);
            toast.error(error.response?.data?.message || error.message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token]);

    return (
        <form
            onSubmit={onSubmitHandler}
            className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-red-800"
        >
            <div className="inline-flex items-center gap-2 mb-2 mt-10">
                <p className="prata-regular text-3xl">{currentState}</p>
                <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
            </div>

            {currentState === 'Login' ? null : (
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="w-full px-3 py-2 border border-red-800"
                    placeholder="Tên"
                    required
                />
            )}

            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full px-3 py-2 border border-red-800"
                placeholder="Email"
                required
            />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="w-full px-3 py-2 border border-red-800"
                placeholder="Mật khẩu"
                required
            />

            <div className="w-full flex justify-between text-sm mt-[-8px]">
                <p className="cursor-pointer">Forgot your password</p>
                {currentState === 'Sign Up' ? (
                    <p onClick={() => setCurrentState('Login')} className="cursor-pointer">
                        Login Here
                    </p>
                ) : (
                    <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">
                        Create account
                    </p>
                )}
            </div>

            <button
                type="submit"
                disabled={loading}
                className="bg-black text-white font-light px-8 py-2 mt-4 flex items-center justify-center gap-2"
            >
                {loading && (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                )}
                {currentState}
            </button>
        </form>
    );
};

export default Login;

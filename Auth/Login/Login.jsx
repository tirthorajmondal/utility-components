import GoogleSignInBtn from '../GooleSignInBtn/GoogleSignInBtn';
import UseAuth from '../../../hooks/UseAuth/UseAuth';
import { toast, Zoom } from 'react-toastify';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ResetPassword from '../../../components/ResetPassword/ResetPassword';
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { useState } from 'react';
const Login = () => {
    const { user, setUser, emailSignIn, resetPassword } = UseAuth();
    const location = useLocation()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        const loginInfo = { email, password }
        console.log(loginInfo);
        emailSignIn(email, password)
            .then(result => {
                setUser(result.user)

                // // toast with Sweet alert
                // Swal.mixin({
                //     toast: true,
                //     position: "top-end",
                //     showConfirmButton: false, 
                //     timer: 2000,
                //     timerProgressBar: true,
                // }).fire({
                //     icon: "success",
                //     title: "Signed in successfully"
                // });
                navigate(location?.state || '/')
            })
    }



    if (user) {
        return <Navigate to={location.state || '/'} />
    }
    return (
        <>
            <div className="flex flex-col max-w-md  mx-auto rounded-md p-6 md:p-10 bg-gray-50 text-gray-800 shadow-md mt-6">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm text-gray-600">Sign in to access your account</p>
                </div>
                <form
                    onSubmit={handleLogin}
                    className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" placeholder="john@email.com" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-violet-600" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm">Password</label>
                                {/* modal opener start */}
                                <label htmlFor="forgetPassword" className="text-xs cursor-pointer hover:underline text-gray-600">Forgot password?</label>
                                {/* modal opener end */}
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password" placeholder="*******" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-violet-600" />
                                {
                                    showPassword ? <RiEyeLine onClick={() => { setShowPassword(!showPassword) }} className='absolute right-3 bottom-3 cursor-pointer text-lg' /> : <RiEyeCloseLine onClick={() => { setShowPassword(!showPassword) }} className='absolute right-3 bottom-3 cursor-pointer text-lg' />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50 cursor-pointer active:translate-y-px hover:bg-violet-700">Log In</button>
                        </div>
                        <p className="px-6 text-sm text-center text-gray-600">Don't have an account yet?{' '}
                            <Link to='/signup' className="hover:underline text-violet-600">Sign up</Link>.
                        </p>
                    </div>
                </form>

                {/* modal box start */}
                <input type="checkbox" id="forgetPassword" className="modal-toggle" />

                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <ResetPassword />
                    </div>
                    <label className="modal-backdrop" htmlFor="forgetPassword">Close</label>
                </div>
                {/* modal box end */}
                <div className="divider my-6">OR</div>
                <GoogleSignInBtn />
            </div>
        </>
    );
};



export default Login;
import GoogleSignInBtn from '../GooleSignInBtn/GoogleSignInBtn';
import UseAuth from '../../../hooks/UseAuth/UseAuth';
import { toast, Zoom } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';

const SignUp = () => {
    const { createAcconut, setUser, updateUserProfile, setLoading } = UseAuth()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const errors = {}




    const handleCreate = e => {
        e.preventDefault()
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const name = firstName + ' ' + lastName;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const userData = { displayName: name, photoURL: photo }
        if (password === confirmPassword) {
            createAcconut(email, password)
                .then(result => {
                    setUser(result.user)
                    updateUserProfile(userData)
                        .then(() => {
                            console.log('welcome from signup file');
                            setLoading(false)
                        })

                })
        }
    }



    return (
        // <div className='my-6 p-6 lg:px-10 mx-6 lg:mx-auto border-2 border-gray-300 rounded-xl '>
        //     <h2 className="text-4xl text-center">Create Account</h2>

        //     <form
        //         onSubmit={handleCreate}
        //         className="my-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
        //         <div className="sm:col-span-3">
        //             <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
        //                 First name
        //             </label>
        //             <div className="mt-2">
        //                 <input
        //                     name="firstName"
        //                     type="text"
        //                     autoComplete="given-name"
        //                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        //                 />
        //             </div>
        //         </div>

        //         <div className="sm:col-span-3">
        //             <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
        //                 Last name
        //             </label>
        //             <div className="mt-2">
        //                 <input
        //                     name="lastName"
        //                     type="text"
        //                     autoComplete="family-name"
        //                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        //                 />
        //             </div>
        //         </div>

        //         <div className="sm:col-span-3">
        //             <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
        //                 Email address
        //             </label>
        //             <div className="mt-2">
        //                 <input
        //                     name="email"
        //                     type="email"
        //                     autoComplete="email"
        //                     required
        //                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        //                 />
        //             </div>
        //         </div>
        //         <div className="sm:col-span-3">
        //             <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
        //                 Photo URL
        //             </label>
        //             <div className="mt-2">
        //                 <input
        //                     name="photo"
        //                     type="url"
        //                     autoComplete="email"
        //                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        //                 />
        //             </div>
        //         </div>
        //         <div className="sm:col-span-3">
        //             <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
        //                 Password
        //             </label>
        //             <div className="mt-2">
        //                 <input
        //                     name="password"
        //                     type="password"
        //                     autoComplete="password"
        //                     required
        //                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        //                 />
        //             </div>
        //         </div>

        //         <div className="sm:col-span-3">
        //             <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
        //                 Confirm Password
        //             </label>
        //             <div className="mt-2">
        //                 <input
        //                     name="confirmPassword"
        //                     type="password"
        //                     autoComplete="password"
        //                     required
        //                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        //                 />
        //             </div>
        //         </div>
        //         <div className="sm:col-span-6">
        //             <button className='w-full cursor-pointer rounded-md px-3 py-1.5 text-white font-semibold bg-indigo-600' type='submit'>Create</button>
        //         </div>
        //     </form>
        //     <div className=' bg-red-500 relative sm:col-span-6'>
        //         <hr className='text-gray-300 my-8' />
        //         <p className='absolute translate-x-1/2 right-1/2 top-1/2  -translate-y-1/2 bg-white text-sm/4 border py-1 px-1 rounded-full '>OR</p>
        //     </div>
        //     <div className="mt-6">
        //         <GoogleSignInBtn />
        //     </div>

        // </div>
        <div className="flex flex-col max-w-md mx-auto rounded-md p-6 md:p-10 bg-gray-50 text-gray-800 shadow-md mt-6">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                <p className="text-sm text-gray-600">Create a new account</p>
            </div>

            <form onSubmit={handleCreate} className="space-y-6">
                <div className="space-y-4">
                    <div>
                        <label className="block mb-2 text-sm">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            className={`w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-violet-600`}
                        />
                        {/* {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>} */}
                    </div>

                    <div>
                        <label className="block mb-2 text-sm">Email address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="john@email.com"
                            className={`w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-violet-600`}
                        />
                        {/* {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>} */}
                    </div>

                    <div>
                        <label className="block mb-2 text-sm">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                // value={formData.password}
                                // onChange={handleChange}
                                placeholder="*******"
                                className={`w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-violet-600`}
                            />
                            {showPassword ? (
                                <RiEyeLine
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 bottom-3 cursor-pointer text-lg"
                                />
                            ) : (
                                <RiEyeCloseLine
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 bottom-3 cursor-pointer text-lg"
                                />
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm">Confirm Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="*******"
                            className={`w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-violet-600`}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <div>
                        <button
                            type="submit"
                            className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50 cursor-pointer active:translate-y-px hover:bg-violet-700"
                        >
                            Sign Up
                        </button>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-600">
                        Already have an account?{' '}
                        <Link
                            to="/login"
                            className="hover:underline text-violet-600"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
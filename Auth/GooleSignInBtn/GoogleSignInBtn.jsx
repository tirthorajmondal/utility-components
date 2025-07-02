import { toast, ToastContainer, Zoom } from "react-toastify";
import UseAuth from "../../../hooks/UseAuth/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleSignInBtn = () => {
    const { googleSignIn, setUser, loading, setLoading } = UseAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user);
                console.log('Google login successful');
                navigate(location.state || '/');
                toast.success(`Welcome ${result.user?.displayName.toUpperCase()}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Zoom,
                });
                setLoading(false)
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="flex justify-center items-center mt-4">
            <button
                onClick={handleGoogleSignIn}
                aria-label="Login with Google"
                className="flex items-center justify-center cursor-pointer w-full p-4 space-x-4 border-2 border-t-[#E54335] border-l-[#F6B704] border-b-[#34A353] border-r-[#4280EF] rounded-md focus:border-violet-700 shadow-accent focus:ring-offset-1 focus:border-tr focus:dark:ring-violet-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-4 h-4 fill-current">
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p>{loading ? <span className="loading loading-dots loading-md"></span>
                    : <span> Continue with Google</span>}</p>
            </button>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Zoom}
            />
        </div>
    );
};

export default GoogleSignInBtn;
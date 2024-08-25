import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import googleIcon from '../assets/google.svg';

function Login() {
  const navigate = useNavigate();
  const userToken = localStorage.getItem('token');

  useEffect(() => {
    if (userToken) {
      navigate('/');
    }
  }, [userToken, navigate]);

  const initiateGoogleLogin = () => {
    const googleLoginURL = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reach-in-box-assignment1.vercel.app/";
    window.location.href = googleLoginURL;
  };

  return (
    <div>
      <AppBar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <div className="px-16 py-10 space-y-10 text-center border border-gray-700 bg-gray-900 rounded-2xl">
          <h1 className="text-xl font-semibold">Create a New Account</h1>
          <button 
            className="flex items-center px-5 py-2 text-sm text-gray-300 border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-800"
            onClick={initiateGoogleLogin}
          >
            <img src={googleIcon} alt="Google" className="w-4 mr-3" />
            Sign Up with Google
          </button>
          <Link 
            to="/login"
            className="block mt-5 px-6 py-2 text-white bg-gradient-to-r from-blue-500 to-indigo-700 rounded-lg"
          >
            Already have an account? Sign In
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;

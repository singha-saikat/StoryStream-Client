import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import img1 from "../../src/assets/6310507.jpg";
import useAuth from "../Hook/UseAuth";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
// import { AuthContext } from "../Provider/AuthProvider";
// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// import app from "../../Firebase/Firebase.config";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const { signIn, setLoading } = useAuth();
  const location = useLocation();
  console.log(location);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");

        // toast.success("Logged in successfully", {
        //   position: "top-right",
        //   autoClose: 500,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error.message, {
        //   position: "top-right",
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });
      });
  };
  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="card max-w-7xl mx-auto mt-20 flex items-center lg:card-side bg-base-100 shadow-xl">
      <div className="flex-1">
        <figure>
          <img src={img1} alt="Album" />
        </figure>
      </div>
      <div className=" flex-1 items-center justify-center ">
        <div className="p-10 rounded-lg shadow-lg max-w-lg w-full bg-white">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Welcome Back!
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                New here?{" "}
                <Link
                  to="/signUp"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Create an account
                </Link>
              </p>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg transform transition-all duration-150 ease-in-out"
            >
              Sign in
            </button>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            <div>
              <button
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleGoogleSignIn}
              >
                <FaGoogle className="text-red-500 -ml-1 mr-2 h-5 w-5" />
                <span>Google</span>
              </button>
            </div>
          </div>
        </div>
        {/* <ToastContainer /> */}
      </div>
    </div>
  );
};

export default LoginPage;

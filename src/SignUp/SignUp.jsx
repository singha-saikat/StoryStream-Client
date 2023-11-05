/* eslint-disable no-useless-escape */
// import { useState } from "react";
import { updateProfile } from "firebase/auth";
import img1 from "../../src/assets/Mobile-login.jpg";
import useAuth from "../Hook/UseAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser } = useAuth();
  const [regError, setRegError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const from = new FormData(event.currentTarget);
    const name = from.get("name");
    const email = from.get("email");
    const password = from.get("password");
    const photo = from.get("image");
    console.log(name, email, password, photo);
    if (password.length < 6) {
      setRegError("Password must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setRegError("Password must contain at least one capital letter");
      return;
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      setRegError("Password must contain at least one special character");
      return;
    }
    if (!/\d/.test(password)) {
      setRegError("Password must contain at least one numeric character");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, {
          displayName: name,
          photoURL: photo,
        });
      })
      .then(() => {
        event.target.reset();
        toast.success("Congratulations,  You are now part of Our Platform!");

        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.log(error.massage);
        toast.error("error.message");
      });
  };

  return (
    <div className="card flex flex-col md:flex-row items-center max-w-7xl mx-auto mt-20 card-side bg-base-100 shadow-xl">
      <div className="flex-1">
        <figure>
          <img src={img1} alt="Movie" />
        </figure>
      </div>

      <div className="flex-1">
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                placeholder="***********"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Image URL
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="image"
                placeholder="https://nature.jpg"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/login"
              >
                I am already a member
              </a>
            </div>
          </form>
          <div
            className={`${
              regError ? "block" : "hidden"
            } bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative`}
            role="alert"
          >
            <strong className="font-bold">Oops! </strong>
            <span className="block sm:inline">{regError}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.02 1.02 0 0 0 1.414 0l4.242-4.242a1.01 1.01 0 0 0 0-1.414l-4.242-4.242a1.02 1.02 0 0 0-1.414 0L10 9.656 5.756 5.413a1.01 1.01 0 0 0-1.414 0L.1 9.656a1.01 1.01 0 0 0 0 1.414l4.242 4.242a1.02 1.02 0 0 0 1.414 0L10 14.343l4.348 4.506z" />
              </svg>
            </span>
          </div>

          <p className="text-center text-gray-500 text-xs">
            &copy;2023 StoryStream All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

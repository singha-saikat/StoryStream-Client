// import { useState } from "react";
import img1 from "../../src/assets/Mobile-login.jpg";

const SignUp = () => {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //     terms: false,
  //   });

  const handleSubmit = (event) => {
    event.preventDefault();
    const from = new FormData(event.currentTarget);
    const name = from.get("name");
    const email = from.get("email");
    const password = from.get("password");
    const photo = from.get("image");
    console.log(name, email, password,photo);
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
          <p className="text-center text-gray-500 text-xs">
            &copy;2023 Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

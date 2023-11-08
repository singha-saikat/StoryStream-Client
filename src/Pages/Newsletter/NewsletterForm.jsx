import  { useState } from "react";
import toast from "react-hot-toast";
import image from "../../assets/newsLatter.jpg"

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add your logic for handling the subscription here.
    // For this example, we will just show a toast message.
    toast.success("Thank you for subscribing to our newsletter");
  };

  return (
    <div className="flex max-w-7xl mx-auto p-4 items-center">
        <div className="flex-1">
        <img src={image} alt="" />
        </div>
        <div className=" flex-1 bg-[#F6F6F6]">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
    </div>
    
  );
};

export default NewsletterForm;

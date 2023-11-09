import axios from "axios";
import toast from "react-hot-toast";
import blogImage from "../../src/assets/addBlog.jpg";
import useAuth from "../Hook/UseAuth";

const AddBlogs = () => {
  const {user} = useAuth();
  console.log(user);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const title = form.get("title");
    const imageUrl = form.get("imageUrl");
    const category = form.get("category");
    const shortDescription = form.get("shortDescription");
    const longDescription = form.get("longDescription");
    console.log(title, imageUrl, category, shortDescription, longDescription);
    const bdTimezone = "Asia/Dhaka"; 
    const options = { timeZone: bdTimezone };
    const createdAt = new Date().toLocaleString("en-US", options);

    console.log(title, imageUrl, category, shortDescription, longDescription);
    console.log("Created At (Bangladesh Time Zone):", createdAt);

    try {
      const response = await axios.post(
        "https://story-stream-car-server.vercel.app/api/v1/user/create-blog", { withCredentials: true },
        {
          email:user?.email,
          image:user?.photoURL,
          title,
          imageUrl,
          category,
          shortDescription,
          longDescription,
          
        }
      );

      // If the request is successful, you can do something with the response.
      // For example, showing a success message:
      toast.success("Blog posted successfully!");
      console.log(response.data);
    } catch (error) {
      // If the request fails, the error details will be logged and a toast message will be shown.
      console.error("Error posting blog:", error);
      toast.error(
        `Error posting blog: ${error.response?.data?.message || error.message}`
      );
    }
  };

  return (
    <div className="card max-w-7xl mx-auto mt-4 flex items-center justify-between lg:card-side bg-base-100 shadow-xl">
      <div className="flex-1">
        <figure>
          <img src={blogImage} alt="Album" />
        </figure>
      </div>
      <div className="flex-1">
        <div className="card-body">
          <div className="container mx-auto p-8">
            <form
              onSubmit={handleSubmit}
              className="max-w-xl mx-auto shadow-lg p-6"
            >
              <h1 className="text-2xl font-bold mb-4">Add a New Blog</h1>

              <label className="block mb-2" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />

              <label className="block mb-2" htmlFor="imageUrl">
                Image URL
              </label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />

              <label className="block mb-2" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              >
                <option value="">Select a category</option>
                <option value="technology">Technology</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="business">Business</option>
                {/* Add more categories as needed */}
              </select>

              <label className="block mb-2" htmlFor="shortDescription">
                Short Description
              </label>
              <textarea
                id="shortDescription"
                name="shortDescription"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />

              <label className="block mb-2" htmlFor="longDescription">
                Long Description
              </label>
              <textarea
                id="longDescription"
                name="longDescription"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />

              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlogs;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../../../src/assets/blog.jpg";
import useAuth from "../../Hook/UseAuth";
import toast from "react-hot-toast";

const UpdateBlog = () => {
  const { user } = useAuth();
  const [updateBlog, setUpdateBlog] = useState([]);
  const { _id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/v1/update-blog/${_id}`
        );
        setUpdateBlog(res.data);
      } catch (error) {
        console.error("There was an error fetching the blog details:", error);
      }
    };
    getData();
  }, [_id]);
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const title = form.get("title");
    const imageUrl = form.get("imageUrl");
    const category = form.get("category");
    const shortDescription = form.get("shortDescription");
    const longDescription = form.get("longDescription");
    console.log(title, imageUrl, category, shortDescription, longDescription);
    try {
      const response = await axios.patch(
        
        `http://localhost:4000/api/v1/user/update-blog/${_id}`,
        {
          email: user.email,
          title,
          imageUrl,
          category,
          shortDescription,
          longDescription,
        }
      );

      // If the request is successful, you can do something with the response.
      // For example, showing a success message:
      toast.success("Blog updated successfully!");
      console.log(response.data);
    } catch (error) {
      // If the request fails, the error details will be logged and a toast message will be shown.
      console.error("Error updating blog:", error);
      toast.error(
        `Error updating blog: ${error.response?.data?.message || error.message}`
      );
    }
  };
  return (
    <div className="card max-w-7xl mx-auto mt-4 flex flex-col md:flex-row items-center justify-between bg-base-100 shadow-xl">
      <div className="md:flex-1">
        <figure>
          <img
            src={image}
            alt="Album"
            className="rounded-t-lg md:rounded-none md:rounded-l-lg"
          />
        </figure>
      </div>
      <div className="md:flex-1">
        <div className="card-body">
          <div className="container mx-auto p-8">
            <form
              onSubmit={handleUpdate}
              className="max-w-xl mx-auto shadow-md p-6 bg-gray-100 rounded-lg"
            >
              <h1 className="text-3xl font-bold mb-4 text-gray-700 text-center">
                Update Blog
              </h1>

              <label className="block mb-2 text-gray-600" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                name="title"
                defaultValue={updateBlog.title}
                className="w-full p-2 border border-gray-400 rounded mb-4"
                required
              />

              <label className="block mb-2 text-gray-600" htmlFor="imageUrl">
                Image URL
              </label>
              <input
                type="text"
                id="imageUrl"
                defaultValue={updateBlog.imageUrl}
                name="imageUrl"
                className="w-full p-2 border border-gray-400 rounded mb-4"
                required
              />

              <label className="block mb-2 text-gray-600" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="w-full p-2 border border-gray-400 rounded mb-4"
                required
              >
                <option value="">Select a category</option>
                <option value="technology">Technology</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="business">Business</option>
                {/* Add more categories as needed */}
              </select>

              <label
                className="block mb-2 text-gray-600"
                htmlFor="shortDescription"
              >
                Short Description
              </label>
              <textarea
                id="shortDescription"
                name="shortDescription"
                defaultValue={updateBlog.shortDescription}
                className="w-full p-2 border border-gray-400 rounded mb-4"
                required
              />

              <label
                className="block mb-2 text-gray-600"
                htmlFor="longDescription"
              >
                Long Description
              </label>
              <textarea
                id="longDescription"
                name="longDescription"
                defaultValue={updateBlog.longDescription}
                className="w-full p-2 border border-gray-400 rounded mb-4"
                required
              />

              <button
                type="submit"
                className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-700 transition-colors"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;

import axios from "axios";
import { useEffect, useState } from "react";
import AllBlogsCard from "./AllBlogsCard";

const AllBlogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState(""); // State to store the selected title
  const [selectedCategory, setSelectedCategory] = useState(""); // State to store the selected category

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost:4000/api/v1/allBlogs?category=${selectedCategory}&title=${selectedTitle}`);
      setBlogsData(res.data);
    };
    getData();
  }, [selectedCategory,selectedTitle]);

  // Event handler for the title select
  const handleTitleChange = (event) => {
    
    setSelectedTitle(event.target.value);
  };

  // Event handler for the category select
  const handleCategoryChange = (event) => {
    console.log('Category',event.target.value);
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="mt-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-end gap-5 items-center border-2 border-primary p-4 md:mx-12">
      <div>
        Selected Title: {selectedTitle}
        <br />
        Selected Category: {selectedCategory}
      </div>
        <div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">
              Pick a title
              </span>
            </label>
            <select
              className="select select-bordered"
              value={selectedTitle} // Set the selected value
              onChange={handleTitleChange} // Add onChange event handler
            >
              <option disabled value="">
                Pick one
              </option>
              {blogsData.map((blog) => (
                <option key={blog._id} value={blog.title}>
                  {blog.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">
              Pick a category
              </span>
            </label>
            <select
              className="select select-bordered"
              value={selectedCategory} // Set the selected value
              onChange={handleCategoryChange} // Add onChange event handler
            >
              <option disabled value="">
                Pick one
              </option>
              {blogsData.map((blog) => (
                <option key={blog._id} value={blog.category}>
                  {blog.category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-10">
        {blogsData.map((card) => (
          <AllBlogsCard key={card._id} card={card}></AllBlogsCard>
        ))}
      </div>
      
      
    </div>
  );
};

export default AllBlogs;

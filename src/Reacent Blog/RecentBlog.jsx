import axios from "axios";
import { useEffect, useState } from "react";
import RecentBlogCard from "./RecentBlogCard";

const RecentBlog = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:4000/api/v1/recentBlogs");
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <div className="mt-8">
        <h1 className="text-4xl text-center mb-4">Recent <span className="text-blue-500">Blogs</span></h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((card) => (
          <RecentBlogCard key={card._id} card={card}></RecentBlogCard>
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;

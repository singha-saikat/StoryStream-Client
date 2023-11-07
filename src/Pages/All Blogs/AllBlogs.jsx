import axios from "axios";
import { useEffect, useState } from "react";
import AllBlogsCard from "./AllBlogsCard";

const AllBlogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:4000/api/v1/allBlogs");
      setBlogsData(res.data);
    };
    getData();
  }, []);
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-10">
      {blogsData.map((card) => (
        <AllBlogsCard key={card._id} card={card}></AllBlogsCard>
      ))}
    </div>
  );
};

export default AllBlogs;

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
    <div className="mt-8 max-w-7xl mx-auto ">
      <div className="flex flex-col md:flex-row justify-evenly items-center border-2 border-primary p-4  md:mx-12">
        <div>
        <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">
                Pick the best fantasy franchise
              </span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </div>
        </div>
        <div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">
                Pick the best fantasy franchise
              </span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
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

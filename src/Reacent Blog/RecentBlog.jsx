import axios from "axios";
import { useEffect, useState } from "react";
import RecentBlogCard from "./RecentBlogCard";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const RecentBlog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:4000/api/v1/recentBlogs");
      setData(res.data);
    };
    getData();
  }, []);

  const headingVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="mt-8">
      <motion.h1
        className="text-4xl text-center mb-4"
        initial="hidden" // Initial animation state
        animate="visible" // Animation when component appears
        variants={headingVariants}
      >
        Recent <span className="text-blue-500">Blogs</span>
      </motion.h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((card) => (
          <RecentBlogCard key={card._id} card={card}></RecentBlogCard>
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;

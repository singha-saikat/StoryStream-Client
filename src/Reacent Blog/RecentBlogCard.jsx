import axios from "axios";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { PhotoProvider, PhotoView } from 'react-photo-view'; // Import PhotoProvider and PhotoView
import 'react-photo-view/dist/react-photo-view.css'; // Import default styles for photo view
import { Link } from "react-router-dom";
import useAuth from "../Hook/UseAuth";

const RecentBlogCard = ({ card }) => {
  const { title, imageUrl, category, shortDescription } = card;
  const { user } = useAuth();

  const handleAddWishlist = async () => {
    const data = { ...card };
    data["user"] = user?.email;
    delete data._id; // Assuming you don't want to send the _id property to the server
    console.log(card);
    try {
      const response = await axios.post(
        "https://story-stream-car-server.vercel.app/api/v1/user/wishlist",
        {
          ...data,
        }
      );
      toast.success("Added to wishlist successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      toast.error(
        `Error adding to wishlist: ${error.response?.data?.message || error.message}`
      );
    }
  };

  return (
    <PhotoProvider>
      <motion.div
        className="border-2 border-primary bg-success flex flex-col rounded-[15px] overflow-hidden transition-all hover:scale-105 hover:shadow-2xl group"
        initial={{ opacity: 0, scale: 0.9 }} // Initial animation state
        animate={{ opacity: 1, scale: 1 }} // Animation when component appears
        transition={{ duration: 0.3 }} // Animation duration
      >
        <div className="w-full flex-1 flex justify-center items-center">
          <h1 className="text-2xl font-semibold">{title}</h1>
        </div>
        <div className="flex-[2] flex flex-col justify-between bg-white rounded-[12px] p-[15px] transition-all">
          <PhotoView src={imageUrl}>
            <img className="w-full h-[300px] cursor-pointer" src={imageUrl} alt={title} />
          </PhotoView>
          <div className="mb-2 text-2xl text-center">
            <p>{category}</p>
          </div>
          <p className="text-center text-xl mb-2">{shortDescription}</p>
          <div className="space-y-3">
            <Link to={`/blogDetails/${card._id}`} className="btn btn-primary w-full">
              Details
            </Link>
            <button onClick={handleAddWishlist} className="btn btn-secondary w-full">
              WishList
            </button>
          </div>
        </div>
      </motion.div>
    </PhotoProvider>
  );
};

export default RecentBlogCard;

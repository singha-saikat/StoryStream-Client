
// import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const WishlistCard = ({ item }) => {
  const { _id, title, imageUrl, category, shortDescription } = item;
  

  const handleRemoveWishlist = async () => {
    
    try {
        const response = await axios.delete(`https://story-stream-car-server.vercel.app/api/v1/delete/${item._id}`);
        const data = response.data;
        console.log(data);
        
        // Assuming your API returns the deletedCount in the response data
        if (data.deletedCount > 0) {
          toast.success('Product deleted successfully');
        } else {
          // If the item was not found or not deleted, you might want to show a different message
          toast.error('No items were deleted');
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle error case, possibly a network error or server issue
        toast.error('An error occurred while deleting the product');
      }
  };

  return (
    <div>
      <div className="border-2 border-secondary bg-success flex flex-col rounded-[15px] overflow-hidden transition-all hover:scale-105  hover:shadow-2xl group">
        <div className="w-full flex-1 flex justify-center items-center">
          <h1 className="text-2xl font-semibold">{title}</h1>
        </div>
        <div className="flex-[2] flex flex-col justify-between bg-white rounded-[12px] p-[15px] transition-all">
          <img className="w-full h-[300px] object-cover" src={imageUrl} alt={title} />
          <div className="mb-2 text-2xl text-center">
            <p>{category}</p>
          </div>
          <p className="text-center text-xl mb-2">{shortDescription}</p>
          <div className="space-y-3">
            <Link
              to={`/blogDetails/${_id}`}
              className="btn btn-primary w-full"
            >
              Details
            </Link>
            <button
              onClick={handleRemoveWishlist}
              className="btn btn-secondary w-full"
            >
             Remove from Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;

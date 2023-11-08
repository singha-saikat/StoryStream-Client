import { Link } from "react-router-dom";
import useAuth from "../../Hook/UseAuth";
import axios from "axios";
import toast from "react-hot-toast";

const AllBlogsCard = ({ card }) => {
  const { user } = useAuth();
  const handleAddWishlist = async () => {
    const data = {...card}
    data["user"] = user?.email;
    delete data._id;
    console.log(card);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/wishlist",
        {
          ...data,
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
  const { title, imageUrl, category, shortDescription } = card;
   return (
    <div className="border-2 border-primary bg-success flex flex-col rounded-[15px] overflow-hidden transition-all hover:scale-105  hover:shadow-2xl group">
      <div className="w-full flex-1 flex justify-center items-center">
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      <div className=" flex-[2] flex flex-col justify-between bg-white rounded-[12px] p-[15px] transition-all">
        <img className="w-full h-[300px]" src={imageUrl} alt="hello" />
        <div className="mb-2 text-2xl text-center ">
          <p>{category}</p>
        </div>
        <p className="text-center text-xl mb-2">{shortDescription}</p>
        <div className="space-y-3">
          <Link
            to={`/blogDetails/${card._id}`}
            className="btn btn-primary w-full"
          >
            <button>Details</button>
          </Link>
          <button
            onClick={handleAddWishlist}
            className="btn btn-secondary w-full"
          >
            WishList
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBlogsCard;

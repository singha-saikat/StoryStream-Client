import { Link } from "react-router-dom";

const RecentBlogCard = ({ card }) => {
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
          <Link to={`/booking`} className="btn btn-primary w-full">
            Details
          </Link>
          <button className="btn btn-secondary w-full ">WishList</button>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogCard;

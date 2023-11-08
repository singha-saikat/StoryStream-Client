import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../Hook/UseAuth";
import WishlistCard from "./WishlistCard";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const Wishlist = () => {
    const [wishlistData, setWishlistData] = useState([]);
    const [loading, setLoading] = useState(true); // State to handle loading status
    const { user } = useAuth();
    
    useEffect(() => {
        const getData = async () => {
          try {
            const res = await axios.get(
              `http://localhost:4000/api/v1/wishlist?email=${user?.email}`, { withCredentials: true }
            );
            setWishlistData(res.data);
          } catch (error) {
            console.error("There was an error fetching the blog details:", error);
          } finally {
            setLoading(false); // Set loading to false after data is fetched or in case of an error
          }
        };
        
        if (user?.email) {
          getData();
        }
    }, [user?.email]);

    // Render Skeletons when data is loading
    if (loading) {
        return (
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                {Array.from({ length: 6 }, (_, index) => ( // Assuming you want to display 6 skeletons
                    <div key={index} className="mb-4">
                        <Skeleton height={200} />
                        <Skeleton count={3} />
                    </div>
                ))}
            </div>
        );
    }

    // Render WishlistCards when data is loaded
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
            {wishlistData.map(item => <WishlistCard key={item._id} item={item}></WishlistCard>)}
        </div>
    );
};

export default Wishlist;

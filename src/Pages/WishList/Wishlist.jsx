import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import useAuth from "../../Hook/UseAuth";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
    const { user } = useAuth();

    // Define the fetch function
    const getWishlist = async () => {
        const { data } = await axios.get(
            `https://story-stream-car-server.vercel.app/api/v1/wishlist?email=${user?.email}`, { withCredentials: true }
        );
        return data;
    };

    // Use the useQuery hook
    const { data: wishlistData, isLoading, error } = useQuery({
        queryKey: ['wishlist', user?.email], // Ensure the query key is unique for each user email
        queryFn: getWishlist,
        enabled: !!user?.email, // Only run the query if the email exists
    });

    // Render Skeletons when data is loading
    if (isLoading) {
        return (
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="mb-4">
                        <Skeleton height={200} />
                        <Skeleton count={3} />
                    </div>
                ))}
            </div>
        );
    }

    if (error) return "An error has occurred: " + error.message;

    // Render WishlistCards when data is loaded
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
            {wishlistData.map(item => <WishlistCard key={item._id} item={item}></WishlistCard>)}
        </div>
    );
};

export default Wishlist;

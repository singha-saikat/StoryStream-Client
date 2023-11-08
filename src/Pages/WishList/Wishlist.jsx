import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../Hook/UseAuth";
import WishlistCard from "./WishlistCard";


const Wishlist = () => {
    const [wishlistData,setWishlistData] = useState([]);
    const {user} = useAuth();
    
    useEffect(() => {
        const getData = async () => {
          console.log('object');
          try {
            const res = await axios.get(
                // http://localhost:4000/api/v1/wishlist?email=saikatsingha50@gmail.com
              `http://localhost:4000/api/v1/wishlist?email=${user?.email}`,
            );
            setWishlistData(res.data);
            
          } catch (error) {
            console.error("There was an error fetching the blog details:", error);
          }
        };
        getData();
      },[user?.email]);
      // console.log(user);
      // useEffect(() => {
      //   console.log("wishlist data",wishlistData);
      // },[wishlistData])
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
            
            {
            wishlistData.map(item => <WishlistCard key={item._id} item={item}></WishlistCard>)
            }
        </div>
    );
};

export default Wishlist;
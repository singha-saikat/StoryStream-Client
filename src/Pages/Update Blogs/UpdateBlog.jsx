import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateBlog = () => {
    const[updateBlog,setUpdateBlog] = useState([]);
    const { _id } = useParams();
    useEffect(() => {
        const getData = async () => {
          try {
            const res = await axios.get(
              `http://localhost:4000/api/v1/update-blog/${_id}`
            );
            setUpdateBlog(res.data);
          } catch (error) {
            console.error("There was an error fetching the blog details:", error);
          }
        };
        getData();
      }, [_id]);
    return (
        <div>
            updateData:{updateBlog.title}
        </div>
    );
};

export default UpdateBlog;
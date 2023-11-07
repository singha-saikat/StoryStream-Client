import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hook/UseAuth";
import toast from "react-hot-toast";

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState({});
  const params = useParams();
  const { _id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth(); // Your auth context should provide the current user

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/v1/blogsDetails/${params._id}`
        );
        setBlogDetails(res.data);
      } catch (error) {
        console.error("There was an error fetching the blog details:", error);
      }
    };
    getData();
  }, [params]);
  useEffect(() => {
    // Fetch comments
    // const fetchComments = async () => {
    //   const result = await axios.get(
    //     `http://localhost:4000/api/v1/comments/${_id}`
    //   );
    //   setComments(result.data);
    // };
    // fetchComments();
    const getData = async () => {
        try {
          const res = await axios.get(
            "http://localhost:4000/api/v1/allComments"
          );
          setComments(res.data);
        } catch (error) {
          console.error("There was an error fetching the blog details:", error);
        }
      };
      getData();
  }, [_id]);

  const handleCommentSubmit = async () => {
    console.log(newComment);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/comments",
        {
          blogId: _id,
          userName: user.displayName,
          userProfilePic: user.photoURL,
          comment: newComment,
        }
      );

      toast.success("Comment posted successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error posting blog:", error);
      toast.error(
        `Error posting blog: ${error.response?.data?.message || error.message}`
      );
    }
  };

  console.log(blogDetails.email);
  console.log(user?.email);
  console.log("comment",comments);
  const isBlogOwner = user && blogDetails?.email === user?.email;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="p-4">
        <div className="mb-8">
          <img
            src={blogDetails.imageUrl}
            alt={blogDetails.title}
            className="w-full h-96 object-cover"
          />
          <h1 className="text-3xl font-bold mt-4 text-center">
            Title: {blogDetails.title}
          </h1>
          <p className="text-gray-700 mt-2 bg-slate-300 p-8">
            Short note:{blogDetails.shortDescription}
          </p>
          <div className="mt-4 text-gray-600 bg-slate-100 p-4">
            {blogDetails.longDescription}
          </div>
        </div>

        {isBlogOwner ? (
          <button
            onClick={() => navigate(`/update-blog/${_id}`)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Update Blog
          </button>
        ) : (
          <div className="mt-8">
            {user && !isBlogOwner ? (
              <textarea
                className="border border-gray-300 w-full p-2 rounded"
                rows="4"
                placeholder="Leave a comment..."
                name="comment"
                // value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
            ) : (
              <p className="text-gray-500">Cannot comment on own blog.</p>
            )}
            {user && !isBlogOwner && (
              <button
                onClick={handleCommentSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mt-4"
              >
                Submit Comment
              </button>
            )}
          </div>
        )}

        <div className="mt-8">
          <h2 className="text-2xl font-bold">Comments</h2>
          {comments.map((comment) => (
            <div
              key={comment._id}
              className="border-t border-gray-200 mt-4 pt-4"
            >
              <img
                src={comment.userProfilePic}
                alt={comment.userName}
                className="w-10 h-10 rounded-full"
              />
              <p className="font-semibold">{comment.userName}</p>
              <p className="text-gray-600">{comment.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

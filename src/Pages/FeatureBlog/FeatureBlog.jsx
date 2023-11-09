import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const FeatureBlog = () => {
    const getBlogs = async () => {
        const res = await axios.get("https://story-stream-car-server.vercel.app/api/v1/featureBlogs", );
        return res.data;
    };

    const {
        data: blogs,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["blog"],
        queryFn: getBlogs,
    });

    // If data is loading, return a series of Skeleton components
    if (isLoading) {
        return (
            <div className="w-full lg:w-3/4 mx-auto p-4 space-y-4">
                {Array.from(new Array(10)).map((_, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <Skeleton variant="text" width={40} />
                        <Skeleton variant="rectangular" width={210} height={20} />
                        <Skeleton variant="rectangular" width={210} height={20} />
                        <Skeleton variant="circular" width={50} height={50} />
                    </div>
                ))}
            </div>
        );
    }

    if (error) return "An error has occurred: " + error.message;

    // Assuming longDescription is a string, count the words in it.
    const countWords = (text) => {
        return text.split(/\s+/).filter(Boolean).length;
    };

    // Add a wordCount property to each blog.
    const blogsWithWordCount = blogs.map((blog) => ({
        ...blog,
        wordCount: countWords(blog.longDescription),
    }));

    // Sort blogs by wordCount.
    const sortedBlogs = blogsWithWordCount.sort((a, b) => b.wordCount - a.wordCount);

    // Create data for the MUIDataTable
    const tableData = sortedBlogs.slice(0, 10).map((blog, index) => [
        index + 1, // Serial Number
        blog.title, // Blog Title
        blog?.email, // Blog Owner
        // eslint-disable-next-line react/jsx-key
        <img src={blog?.image} alt="Profile Picture" width="50" height="50" />, // Blog Owner Profile Picture
    ]);

    // Define columns for the table
    const columns = ["Serial Number", "Blog Title", "Blog Owner", "Blog Owner Profile Picture"];

    // Define options for the table
    const options = {
        filter: false,
        download: false,
        print: false,
        selectableRows: "none", // Disable row selection
    };

    return (
        <div className="w-full lg:w-3/4 mx-auto p-4">
            <MUIDataTable
                title={"Top 10 Featured Blogs"}
                data={tableData}
                columns={columns}
                options={options}
            />
        </div>
    );
};

export default FeatureBlog;

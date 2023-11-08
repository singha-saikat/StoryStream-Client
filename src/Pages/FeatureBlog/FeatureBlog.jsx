/* eslint-disable react/jsx-key */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MUIDataTable from "mui-datatables";

const FeatureBlog = () => {
    const getBlogs = async () => {
      const res = await axios.get("http://localhost:4000/api/v1/featureBlogs");
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
  
    if (isLoading) return "Loading...";
  
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
      // eslint-disable-next-line react/jsx-no-undef
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
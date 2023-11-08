import RecentBlog from "../../Reacent Blog/RecentBlog";
import InteractivePolls from "../InteractivePolls/InteractivePolls";
import NewsletterForm from "../Newsletter/NewsletterForm";

const Home = () => {
    return (
        <div>
           <RecentBlog></RecentBlog>
           <NewsletterForm></NewsletterForm>
           <InteractivePolls></InteractivePolls>
        </div>
    );
};

export default Home;
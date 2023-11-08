import RecentBlog from "../../Reacent Blog/RecentBlog";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

import NewsletterForm from "../Newsletter/NewsletterForm";
import Resources from "../Resources/Resources";
import TeamMember from "../TeamMember/TeamMember"

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <RecentBlog></RecentBlog>
           <NewsletterForm></NewsletterForm>
           <TeamMember></TeamMember>
           <Resources></Resources>

           <Footer></Footer>
        </div>
    );
};

export default Home;
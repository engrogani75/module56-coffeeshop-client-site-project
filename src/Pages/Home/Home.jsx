import AddCoffee from "../../Components/AddCoffee";
import Banner from "./Banner";
import Category from "./Category";
import Header from "./Header";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <AddCoffee></AddCoffee>
        </div>
    );
};

export default Home;
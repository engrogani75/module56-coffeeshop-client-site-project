import { useLoaderData } from "react-router-dom";
import AddCoffee from "../../Components/AddCoffee";
import Banner from "./Banner";
import Category from "./Category";
import Header from "./Header";
import Card from "./Card";


const Home = () => {
     
    const coffeeloader = useLoaderData()
    




    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <AddCoffee></AddCoffee>

         <div className="grid grid-cols-2 w-10/12 mx-auto">
         {
            coffeeloader.map(item => <Card key={item._id} item={item}></Card>)
           }
         </div>
         


        </div>
    );
};

export default Home;
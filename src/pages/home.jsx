import { useLoaderData } from "react-router-dom";
import Banner from "../components/banner";
import Cardsection from "../components/cardsection";


const Home = () => {
    
    const volunteer = useLoaderData()
    console.log(volunteer);
    
    return (
        <div>
            <Banner></Banner>
            <Cardsection volunteer={volunteer}></Cardsection>
        </div>
    );
};

export default Home;
import { useLoaderData } from "react-router-dom";
import Banner from "../components/banner";
import Cardsection from "../components/cardsection";
import Gotoall from "../components/gotoall";


const Home = () => {
    
    const volunteer = useLoaderData()
    console.log(volunteer);
    
    return (
        <div>
            <Banner></Banner>
            <Cardsection volunteer={volunteer}></Cardsection>
            <Gotoall></Gotoall>
        </div>
    );
};

export default Home;
import Header from "../../Header/Header";
import Navbar from "../../Navbar/Navbar";
import LeftSideNavbar from "../LeftSideNavbar/LeftSideNavbar";
import RightSideNavbar from "../RightSideNavbar/RightSideNavbar";
import BrakingNews from "./BrakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div><LeftSideNavbar></LeftSideNavbar></div>
                <div className="md:col-span-2 border"><h2>News are comming soon</h2></div>
                <div><RightSideNavbar></RightSideNavbar></div>
            </div>
        </div>
    );
};

export default Home;
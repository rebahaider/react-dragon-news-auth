import { useParams } from "react-router-dom";
import Header from "../../Header/Header";
import Navbar from "../../Navbar/Navbar";
import RightSideNavbar from "../RightSideNavbar/RightSideNavbar";

const News = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-3xl">News Details</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default News;
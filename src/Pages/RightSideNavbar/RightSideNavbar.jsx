import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightSideNavbar = () => {
    return (
        <div className="p-4 space-y-8">
            <div className="space-y-4">
                <h2 className="text-2xl font-bold">Login With</h2>
                <button className="btn btn-outline btn-info w-full">
                    <FaGoogle />
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Login With Github
                </button>
            </div>
            <div className="">
                <h2 className="text-2xl font-bold mb-4">Find Us On</h2>
                <a className="flex items-center gap-4 p-4 border rounded-t-lg" href="">
                    <FaFacebook></FaFacebook>
                    Facebook</a>
                <a className="flex items-center gap-4 p-4 border-x" href="">
                    <FaTwitter></FaTwitter>
                    Twitter</a>
                <a className="flex items-center gap-4 p-4 border rounded-b-lg" href="">
                    <FaInstagram></FaInstagram>
                    Instagram</a>
            </div>
            {/* Q Zone */}
            <div>
                <h2 className="text-2xl font-bold">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNavbar;
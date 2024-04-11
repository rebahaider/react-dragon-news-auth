import Marquee from "react-fast-marquee";

const BrakingNews = () => {
    return (
        <div className="flex bg-base-200 p-4">
            <button className='bg-[#D72050] text-white px-4 py-2'>Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BrakingNews;
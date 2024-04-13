import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNavbar = () => {
    const [categories, setCategory] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div className='border space-y-4'>
            <h2 className="font-bold">All Category</h2>
            {
                categories.map(category =>
                    <NavLink to={`/category/${category.id}`} className="block" key={category.id}>{category.name}</NavLink>
                )
            }
        </div>
    );
};

export default LeftSideNavbar;
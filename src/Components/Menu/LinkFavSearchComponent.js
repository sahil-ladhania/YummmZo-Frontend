import React, {useState} from 'react'
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { MdFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const LinkFavSearchComponent = () => {
    // State Variables.
    const [favourites, setFavorites] = useState(false);
    // Handler Functions.
    const handleFavourite = () => {
        setFavorites(!favourites);
    }
    return (
        <div>
            <>      
                {/* Main Component */}
                <div className='h-80 flex jc-sb ai-c'>
                    {/* Link's Section */}
                    <div className='flex'>
                        <Link className='mr-10 fs-xxs fs-r' to="/">Home</Link>
                        <span className='fs-xxs'>/</span>
                        <a className='ml-10 fs-xxs fs-r' href="#">MOJO Pizza</a>
                    </div>
                    {/* Icon's Section */}
                    <div>
                        <span className='flex ai-c'>
                            <p onClick={handleFavourite}>
                                {
                                    favourites ? 
                                        <p className='h-20 w-a mr-10 pointer'><MdFavorite/></p>
                                        :
                                        <MdOutlineFavoriteBorder className='h-20 w-a mr-10 pointer'/>
                                }
                            </p>
                            <Link className='td-n c-b' to="/searchInRestaurant"><BsSearch className='h-20 w-a ml-10 pointer'/></Link>
                        </span>
                    </div>
                </div>
            </>
        </div>
    )
}

export default LinkFavSearchComponent

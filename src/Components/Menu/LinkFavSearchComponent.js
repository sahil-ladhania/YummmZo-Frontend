import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { MdFavorite } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const LinkFavSearchComponent = ({ restaurantDetails }) => {
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
                <div className='flex items-center justify-between h-16'>
                    {/* Link's Section */}
                    <div className='w-auto flex item-center justify-between'>
                        <Link className='text-xs font-semibold mr-2 font-roboto text-secondary' to="/home">Home</Link>
                        <span className='text-xs font-semibold font-roboto text-secondary'>/</span>
                        <a className='text-xs font-semibold ml-2 font-roboto text-secondary' href="#">{restaurantDetails.restaurantName}</a>
                    </div>
                    {/* Icon's Section */}
                    <div>
                        <span className='flex w-16 justify-between'>
                            <p onClick={handleFavourite}>
                                {
                                    favourites ? 
                                        <p className='text-2xl cursor-pointer text-secondary'><MdFavorite/></p>
                                        :
                                        <CiHeart className='text-2xl cursor-pointer text-secondary'/>
                                }
                            </p>
                            <Link className='' to="/searchInRestaurant"><CiSearch className='text-2xl cursor-pointer text-secondary'/></Link>
                        </span>
                    </div>
                </div>
            </>
        </div>
    )
}

export default LinkFavSearchComponent

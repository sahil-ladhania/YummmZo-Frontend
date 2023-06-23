import React, {useState} from 'react'
import { UilHeart } from '@iconscout/react-unicons'
import { UilSearch } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom';

const LinkFavSearchComponent = () => {
    const [favourites, setFavorites] = useState(false);

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
                        <a className='ml-10 fs-xxs fs-r' href="#">Subway</a>
                    </div>
                    {/* Icon's Section */}
                    <div>
                        <span className='flex ai-c'>
                            <p onClick={handleFavourite}>
                                {
                                            favourites ? 
                                                <p className='h-20 w-a mr-10 pointer'>❤️</p>
                                                :
                                                <UilHeart className='h-20 w-a mr-10 pointer'/>
                                }
                            </p>
                            <UilSearch className='h-20 w-a ml-10 pointer'/>
                        </span>
                    </div>
                </div>
            </>
        </div>
    )
}

export default LinkFavSearchComponent

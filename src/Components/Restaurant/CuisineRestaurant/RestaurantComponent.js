import React from 'react'
import { Link , useNavigate } from 'react-router-dom';
import { HiCurrencyRupee } from "react-icons/hi2";
import { CiStar } from "react-icons/ci";
import '../../../Styles/Card.css'
import LoaderComponent from '../../../Utils/LoaderComponent';

const RestaurantComponent = ({restaurant , loading , setLoading}) => {
    const navigate = useNavigate();
    const { imageURL , restaurantName , cuisine , rating , deliveryTime , priceForTwo } = restaurant;
    // Handler Functions.
    const handleMenuLoader = () => {
        console.log("Loader Clicked")
        setLoading(true);
        document.body.classList.add('blur-background');
        setTimeout(() => {
            navigate(`/menu/${restaurant._id}`);
            setLoading(false);
            document.body.classList.remove('blur-background')
        }, 2000);
    }
    return (
        <div>
            <>
                {
                    loading ? 
                        <LoaderComponent/>
                        :
                        <>
                            {/* Main Component */}
                            <Link onClick={handleMenuLoader} className=''>
                                <div className='restaurant-card bg-neutral-100  cursor-pointer'>
                                    <img className='font-roboto text-secondary' src={imageURL} alt={restaurantName} />
                                    <div className='restaurant-info'>
                                        <div className='mb-5 pt-1 font-semibold font-roboto text-secondary'>{restaurantName}</div>
                                        <div className='mb-5 text-sm font-roboto text-secondary'>{cuisine}</div>
                                        <div className='flex justify-between items-center'>
                                            <span className='flex items-center text-sm font-roboto text-secondary'><CiStar className='text-xl mr-1 text-green-700'/>{rating}</span>
                                            <span className='font-roboto text-secondary'>.</span>
                                            <span className='text-sm font-roboto text-secondary'>{deliveryTime} MINS</span>
                                            <span className='font-roboto text-secondary'>.</span>
                                            <span className='flex items-center text-sm font-roboto text-secondary'><HiCurrencyRupee className='text-xl mr-1 text-secondary'/>{priceForTwo} FOR TWO</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </>
                }
            </>
        </div>
    )
}

export default RestaurantComponent

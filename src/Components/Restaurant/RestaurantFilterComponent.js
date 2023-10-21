import React, { useEffect } from 'react'
import { CiClock2 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiCircleChevDown } from "react-icons/ci";
import { CiCircleChevUp } from "react-icons/ci";
import FastDeliveryAndCrossComponent from './FastDeliveryAndCrossComponent';
import RatingAndCrossComponent from './RatingAndCrossComponent';
import CostLowToHighAndCrossComponent from './CostLowToHighAndCrossComponent';
import CostHighToLowAndCrossComponent from './CostHighToLowAndCrossComponent';
import { getFastDeliveryRestaurants } from '../../Services/FilterRestaurantsService';
import { getHighRatedRestaurants } from '../../Services/FilterRestaurantsService';
import { getCostLTHRestaurants } from '../../Services/FilterRestaurantsService';
import { getCostHTLRestaurants } from '../../Services/FilterRestaurantsService';

const RestaurantFilterComponent = ({ restaurants , setRestaurants , filteredRestaurants , setFilteredRestaurants , isFastDeliveryActive , setIsFastDeliveryActive , isRatingActive , setIsRatingActive , isCostLTHActive , setIsCostLTHActive , isCostHTLActive , setIsCostHTLActive }) => {
    // Handler Functions.
    const handleFastDelivery = () => {
        setIsFastDeliveryActive(!isFastDeliveryActive);
    }
    const handleRating = () => {
        setIsRatingActive(!isRatingActive);
    }
    const handleCostLTH = () => {
        setIsCostLTHActive(!isCostLTHActive);
    }
    const handleCostHTL = () => {
        setIsCostHTLActive(!isCostHTLActive);
    }
    // Calling getFastDeliveryRestaurants API.
    useEffect(() => {
        if(isFastDeliveryActive){
            getFastDeliveryRestaurants()
                .then((filteredFDRestaurants) => {
                    setFilteredRestaurants(filteredFDRestaurants);
                })
                .catch((error) => {
                    console.log(error);
                });
            } 
        else{
            setFilteredRestaurants(restaurants);
        }
    }, [isFastDeliveryActive, restaurants]);
    // Calling getHighRatedRestaurants API.
    useEffect(() => {
        if(isRatingActive){
            getHighRatedRestaurants()
                .then((filteredHRRestaurants) => {
                    setFilteredRestaurants(filteredHRRestaurants)
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        else {
            setFilteredRestaurants(restaurants);
        }
    }, [isRatingActive , restaurants]);
    // Calling getCostLTHRestaurants API.
    useEffect(() => {
        if(isCostLTHActive){
            getCostLTHRestaurants()
                .then((filteredCostLTHRestaurants) => {
                    setFilteredRestaurants(filteredCostLTHRestaurants);
                })
                .catch((error) =>{
                    console.log(error);
                })
            }
        else{
            setFilteredRestaurants(restaurants);
        }
    }, [isCostLTHActive , restaurants]);
    // Calling getCostHTLRestaurants API.
    useEffect(() => {
        if(isCostHTLActive){
            getCostHTLRestaurants()
                .then((filteredCostHTLRestaurants) => {
                    setFilteredRestaurants(filteredCostHTLRestaurants);
                })
                .catch((error) =>{
                    console.log(error);
                })
            }
        else{
            setFilteredRestaurants(restaurants);
        }
    }, [isCostHTLActive , restaurants]);
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-20 flex justify-between items-center'>
                    {/* Left Section */}
                    <div className='w-3/12'>
                        {/* No of Restaurants */}
                        <span className='text-xl font-roboto text-yummmzo-color'>{restaurants.length} Restaurants Online</span>
                    </div>
                    {/* Right Section */}
                    <div className='w-9/12 flex justify-between'>
                        {
                            isFastDeliveryActive ? 
                                <FastDeliveryAndCrossComponent/>
                                :
                                <>
                                    {/* Filter Options Section */}
                                    <div onClick={handleFastDelivery} className='flex items-center bg-secondary  pr-3 pl-3 pt-2 pb-2 rounded-sm cursor-pointer'>
                                        <CiClock2 className='text-xl mr-1 ml-1 text-yummmzo-color'/>
                                        <a className='text-sm font-roboto text-yummmzo-color' href="#">Fast Delivery</a>
                                    </div>
                                </>
                        }
                        {
                            isRatingActive ? 
                                <RatingAndCrossComponent/>
                                :
                                <>
                                    <div onClick={handleRating} className='flex items-center bg-secondary pr-3 pl-3 pt-2 pb-2 rounded-sm cursor-pointer'>
                                        <CiStar className='text-xl mr-1 ml-1 text-yummmzo-color'/>
                                        <a className='text-sm font-roboto text-yummmzo-color' href="#">Rating</a>
                                    </div>
                                </>
                        }
                        {
                            isCostLTHActive ?
                                <CostLowToHighAndCrossComponent/>
                                :
                                <>
                                    <div onClick={handleCostLTH} className='flex items-center bg-secondary pr-3 pl-3 pt-2 pb-2 rounded-sm cursor-pointer'>
                                        <CiCircleChevUp className='text-xl mr-1 ml-1 text-yummmzo-color'/>
                                        <a className='text-sm font-roboto text-yummmzo-color' href="#">Cost : Low to High</a>
                                    </div>
                                </>
                        }
                        {
                            isCostHTLActive ?
                                <CostHighToLowAndCrossComponent/>
                                :
                                <>
                                    <div onClick={handleCostHTL} className='flex items-center bg-secondary pr-3 pl-3 pt-2 pb-2 rounded-sm cursor-pointer'>
                                        <CiCircleChevDown className='text-xl mr-1 ml-1 text-yummmzo-color'/>
                                        <a className='text-sm font-roboto text-yummmzo-color' href="#">Cost : High to Low</a>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </>
        </div>
    )
}

export default RestaurantFilterComponent

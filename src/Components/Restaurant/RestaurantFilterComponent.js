import React, { useContext, useEffect, useState } from 'react'
import { IoTime } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import FastDeliveryAndCrossComponent from './FastDeliveryAndCrossComponent';
import RatingAndCrossComponent from './RatingAndCrossComponent';
import CostLowToHighAndCrossComponent from './CostLowToHighAndCrossComponent';
import CostHighToLowAndCrossComponent from './CostHighToLowAndCrossComponent';
import { getFastDeliveryRestaurants } from '../../Services/FilterRestaurantsService';
import { getHighRatedRestaurants } from '../../Services/FilterRestaurantsService';
import { getCostLTHRestaurants } from '../../Services/FilterRestaurantsService';
import { getCostHTLRestaurants } from '../../Services/FilterRestaurantsService';
import { FilteredRestaurantsContext } from '../../Contexts/FilteredRestaurantsContext';

const RestaurantFilterComponent = ({ restaurants }) => {
    // Accessing Filtered Restaurants From The Context.
    const {
        isFastDeliveryActive,
        setIsFastDeliveryActive,
        isRatingActive,
        setIsRatingActive,
        isCostLTHActive,
        setIsCostLTHActive,
        isCostHTLActive,
        setIsCostHTLActive,
        setFastDeliveryRestaurants,
        setHighRatedRestaurants,
        setCostLTHRestaurants,
        setCostHTLRestaurants
    } = useContext(FilteredRestaurantsContext);
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
        // Fetching Data And Updating The Filtered Restaurants Here.
        if (isFastDeliveryActive) {
            getFastDeliveryRestaurants()
                .then((filteredFDRestaurants) => {
                    setFastDeliveryRestaurants(filteredFDRestaurants);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [isFastDeliveryActive]);
    // Calling getHighRatedRestaurants API.
    useEffect(() => {
        // Fetching Data And Updating The Filtered Restaurants Here.
        if(isRatingActive){
            getHighRatedRestaurants()
                .then((filteredHRRestaurants) => {
                    setHighRatedRestaurants(filteredHRRestaurants);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }, [isRatingActive]);
    // Calling getCostLTHRestaurants API.
    useEffect(() => {
        if(isCostLTHActive){
            getCostLTHRestaurants()
                .then((filteredCostLTHRestaurants) => {
                    setCostLTHRestaurants(filteredCostLTHRestaurants);
                })
                .catch((error) =>{
                    console.log(error);
                })
        }
    }, [isCostLTHActive]);
    // Calling getCostHTLRestaurants API.
    useEffect(() => {
        if(isCostHTLActive){
            getCostHTLRestaurants()
                .then((filteredCostHTLRestaurants) => {
                    setCostHTLRestaurants(filteredCostHTLRestaurants);
                })
                .catch((error) =>{
                    console.log(error);
                })
        }
    }, [isCostHTLActive]);
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-50 flex jc-sb ai-c'>
                    {/* Left Section */}
                    <div>
                        {/* No of Restaurants */}
                        <span className='fs-r fs-xl fw-500'>{restaurants.length} Restaurants</span>
                    </div>
                    {/* Right Section */}
                    <div className='flex'>
                        {
                            isFastDeliveryActive ? 
                                <FastDeliveryAndCrossComponent/>
                                :
                                <>
                                    {/* Filter Options Section */}
                                    <div onClick={handleFastDelivery} className='cursor-pointer flex ai-c ml-10 p-10 b-1-d8d8d8-s br-5'>
                                        <IoTime className='h-15 w-a c-3d3d3d'/>
                                        <a className='fs-r td-n c-3d3d3d fs-s ml-5' href="#">Fast Delivery</a>
                                    </div>
                                </>
                        }
                        {
                            isRatingActive ? 
                                <RatingAndCrossComponent/>
                                :
                                <>
                                    <div onClick={handleRating} className='flex ai-c ml-10 p-10 b-1-d8d8d8-s br-5'>
                                        <AiFillStar className='h-15 w-a c-3d3d3d'/>
                                        <a className='fs-r td-n c-3d3d3d fs-s ml-5' href="#">Rating</a>
                                    </div>
                                </>
                        }
                        {
                            isCostLTHActive ?
                                <CostLowToHighAndCrossComponent/>
                                :
                                <>
                                    <div onClick={handleCostLTH} className='flex ai-c ml-10 p-10 b-1-d8d8d8-s br-5'>
                                        <BsFillArrowDownCircleFill className='h-15 w-a c-3d3d3d'/>
                                        <a className='fs-r td-n c-3d3d3d fs-s ml-5' href="#">Cost : Low to High</a>
                                    </div>
                                </>
                        }
                        {
                            isCostHTLActive ?
                                <CostHighToLowAndCrossComponent/>
                                :
                                <>
                                    <div onClick={handleCostHTL} className='flex ai-c ml-10 p-10 b-1-d8d8d8-s br-5'>
                                        <BsFillArrowUpCircleFill className='h-15 w-a c-3d3d3d'/>
                                        <a className='fs-r td-n c-3d3d3d fs-s ml-5' href="#">Cost : High to Low</a>
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

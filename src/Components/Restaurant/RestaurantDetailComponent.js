import React from 'react'
import '../../Styles/Main.css'
import biryaniRestaurants from '../RestaurantsData/Biryani/BiryaniRestaurantsData'
import BiryaniRestaurantsComponent from './CuisineRestaurant/BiryaniRestaurantsComponent';
import pizzaRestaurants from '../RestaurantsData/Pizzas/PizzaRestaurantsData';
import PizzaRestaurantsComponent from './CuisineRestaurant/PizzaRestaurantsComponent';
import rollRestaurants from '../RestaurantsData/Rolls/RollRestaurantsData';
import RollRestaurantsComponent from './CuisineRestaurant/RollRestaurantsComponent'
import burgerRestaurants from '../RestaurantsData/Burger/BurgerRestaurantsData';
import BurgerRestaurantsComponent from './CuisineRestaurant/BurgerRestaurantsComponent';
import chaapRestaurants from '../RestaurantsData/Chaap/ChaapRestaurantsData';
import ChaapRestaurantsComponent from './CuisineRestaurant/ChaapRestaurantsComponent';
import chineseRestaurants from '../RestaurantsData/Chinese/ChineseRestaurantsData';
import ChineseRestaurantsComponent from './CuisineRestaurant/ChineseRestaurantsComponent';
import pastryRestaurants from '../RestaurantsData/Pastry/PastryRestaurantsData';
import PastryRestaurantsComponent from './CuisineRestaurant/PastryRestaurantsComponent';
import cakeRestaurants from '../RestaurantsData/Cake/CakeRestaurantsData';
import CakeRestaurantsComponent from './CuisineRestaurant/CakeRestaurantsComponent';
import paneerRestaurants from '../RestaurantsData/Paneer/PaneerRestaurantsData';
import PaneerRestaurantsComponent from './CuisineRestaurant/PaneerRestaurantsComponent';
import pastaRestaurants from '../RestaurantsData/Pasta/PastaRestaurantsData';
import PastaRestaurantsComponent from './CuisineRestaurant/PastaRestaurantsComponent';
import sandwichRestaurants from '../RestaurantsData/Sandwich/SandwichRestaurantsData';
import SandwichRestaurantsComponent from './CuisineRestaurant/SandwichRestaurantsComponent';
import bowlRestaurants from '../RestaurantsData/Bowl/BowlRestaurantsData';
import BowlRestaurantsComponent from './CuisineRestaurant/BowlRestaurantsComponent';

const RestaurantDetailComponent = () => {
    return (
        <div>
            <>
                <div className='flex fw-w jc-sb ai-c'>
                    {/* Biryani Cuisine Restaurants */}
                    {
                        biryaniRestaurants.map((biryanirestaurant , index) => (
                            <BiryaniRestaurantsComponent
                            key = {index}
                            imgSrc = {biryanirestaurant.imgSrc}
                            imgAlt = {biryanirestaurant.imgAlt}
                            restaurantName = {biryanirestaurant.restaurantName}
                            cuisine = {biryanirestaurant.cuisine}
                            rating = {biryanirestaurant.rating}
                            deliveryTime = {biryanirestaurant.deliveryTime}
                            priceForTwo = {biryanirestaurant.priceForTwo}
                            />
                        ))
                    }
                    {/* Pizza Cuisine Restaurants */}
                    {
                        pizzaRestaurants.map((pizzarestaurant , index) => (
                            <PizzaRestaurantsComponent
                            key = {index}
                            imgSrc = {pizzarestaurant.imgSrc}
                            imgAlt = {pizzarestaurant.imgAlt}
                            restaurantName = {pizzarestaurant.restaurantName}
                            cuisine = {pizzarestaurant.cuisine}
                            rating = {pizzarestaurant.rating}
                            deliveryTime = {pizzarestaurant.deliveryTime}
                            priceForTwo = {pizzarestaurant.priceForTwo}
                            />
                        ))
                    }
                    {/* Rolls Cuisine Restaurants */}
                    {
                        rollRestaurants.map((rollrestaurant , index) => (
                            <RollRestaurantsComponent
                            key = {index}
                            imgSrc = {rollrestaurant.imgSrc}
                            imgAlt = {rollrestaurant.imgAlt}
                            restaurantName = {rollrestaurant.restaurantName}
                            cuisine = {rollrestaurant.cuisine}
                            rating = {rollrestaurant.rating}
                            deliveryTime = {rollrestaurant.deliveryTime}
                            priceForTwo = {rollrestaurant.priceForTwo}
                            />
                        ))
                    }
                    {/* Burger Cuisine Restaurants */}
                    {
                        burgerRestaurants.map((burgerrestaurant , index) => (
                            <BurgerRestaurantsComponent
                            key = {index}
                            imgSrc = {burgerrestaurant.imgSrc}
                            imgAlt = {burgerrestaurant.imgAlt}
                            restaurantName = {burgerrestaurant.restaurantName}
                            cuisine = {burgerrestaurant.cuisine}
                            rating = {burgerrestaurant.rating}
                            deliveryTime = {burgerrestaurant.deliveryTime}
                            priceForTwo = {burgerrestaurant.priceForTwo}
                            />
                        ))
                    }
                    {/* Chaap Cuisine Restaurants */}
                    {
                        chaapRestaurants.map((chaaprestaurant , index) => (
                            <ChaapRestaurantsComponent
                            key = {index}
                            imgSrc = {chaaprestaurant.imgSrc}
                            imgAlt = {chaaprestaurant.imgAlt}
                            restaurantName = {chaaprestaurant.restaurantName}
                            cuisine = {chaaprestaurant.cuisine}
                            rating = {chaaprestaurant.rating}
                            deliveryTime = {chaaprestaurant.deliveryTime}
                            priceForTwo = {chaaprestaurant.priceForTwo}
                            />
                        ))
                    }
                    {/* Chinese Cuisine Restaurants */}
                    {
                        chineseRestaurants.map((chineserestaurant , index) => (
                            <ChineseRestaurantsComponent
                            key = {index}
                            imgSrc = {chineserestaurant.imgSrc}
                            imgAlt = {chineserestaurant.imgAlt}
                            restaurantName = {chineserestaurant.restaurantName}
                            cuisine = {chineserestaurant.cuisine}
                            rating = {chineserestaurant.rating}
                            deliveryTime = {chineserestaurant.deliveryTime}
                            priceForTwo = {chineserestaurant.priceForTwo}
                            />
                        ))
                    }
                    {/* Pastry Cuisine Restaurants */}
                    {
                        pastryRestaurants.map((pastryrestaurant , index) => (
                            <PastryRestaurantsComponent
                            key = {index}
                            imgSrc = {pastryrestaurant.imgSrc}
                            imgAlt = {pastryrestaurant.imgAlt}
                            restaurantName = {pastryrestaurant.restaurantName}
                            cuisine = {pastryrestaurant.cuisine}
                            rating = {pastryrestaurant.rating}
                            deliveryTime = {pastryrestaurant.deliveryTime}
                            priceForTwo = {pastryrestaurant.priceForTwo}
                            />
                        ))
                    }
                    {/* Cake Cuisine Restaurants */}
                    {
                        cakeRestaurants.map((cakerestaurant , index) => (
                            <CakeRestaurantsComponent
                            key = {index}
                            imgSrc = {cakerestaurant.imgSrc}
                            imgAlt = {cakerestaurant.imgAlt}
                            restaurantName = {cakerestaurant.restaurantName}
                            cuisine = {cakerestaurant.cuisine}
                            rating = {cakerestaurant.rating}
                            deliveryTime = {cakerestaurant.deliveryTime}
                            priceForTwo = {cakerestaurant.priceForTwo}
                            />
                        ))
                    }
                    {/* Paneer Cuisine Restaurants */}
                    {
                        paneerRestaurants.map((paneerrestaurant , index) => (
                            <PaneerRestaurantsComponent
                            key = {index}
                            imgSrc = {paneerrestaurant.imgSrc}
                            imgAlt = {paneerrestaurant.imgAlt}
                            restaurantName = {paneerrestaurant.restaurantName}
                            cuisine = {paneerrestaurant.cuisine}
                            rating = {paneerrestaurant.rating}
                            deliveryTime = {paneerrestaurant.deliveryTime}
                            priceForTwo = {paneerrestaurant.priceForTwo}
                            />
                        ))
                    }
                    {/* Pasta Cuisine Restaurants */}
                    {
                        pastaRestaurants.map((pastarestaurant , index) => (
                            <PastaRestaurantsComponent
                            key = {index}
                            imgSrc = {pastarestaurant.imgSrc}
                            imgAlt = {pastarestaurant.imgAlt}
                            restaurantName = {pastarestaurant.restaurantName}
                            cuisine = {pastarestaurant.cuisine}
                            rating = {pastarestaurant.rating}
                            deliveryTime = {pastarestaurant.deliveryTime}
                            priceForTwo = {pastarestaurant.priceForTwo}
                            />
                        ))
                    }
                    {/* Sandwich Cuisine Restaurants */}
                    {
                        sandwichRestaurants.map((sandwichrestaurant , index) => (
                            <SandwichRestaurantsComponent
                            key = {index}
                            imgSrc = {sandwichrestaurant.imgSrc}
                            imgAlt = {sandwichrestaurant.imgAlt}
                            restaurantName = {sandwichrestaurant.restaurantName}
                            cuisine = {sandwichrestaurant.cuisine}
                            rating = {sandwichrestaurant.rating}
                            deliveryTime = {sandwichrestaurant.deliveryTime}
                            priceForTwo = {sandwichrestaurant.priceForTwo}
                            />
                        ))
                    }
                    {/* Bowl Cuisine Restaurants */}
                    {
                        bowlRestaurants.map((bowlrestaurant , index) => (
                            <BowlRestaurantsComponent
                            key = {index}
                            imgSrc = {bowlrestaurant.imgSrc}
                            imgAlt = {bowlrestaurant.imgAlt}
                            restaurantName = {bowlrestaurant.restaurantName}
                            cuisine = {bowlrestaurant.cuisine}
                            rating = {bowlrestaurant.rating}
                            deliveryTime = {bowlrestaurant.deliveryTime}
                            priceForTwo = {bowlrestaurant.priceForTwo}
                            />
                        ))
                    }
                </div>
            </>
        </div>
    )
}

export default RestaurantDetailComponent

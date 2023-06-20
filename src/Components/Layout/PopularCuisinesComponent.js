import React from 'react'
import '../../Styles/Main.css'

const PopularCuisinesComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex fd-c ai-c mb-20 h-400'>
                    {/* Heading Section */}
                    <div className='mb-40'>
                        <h2 className='fs-r c-3d3d3d ls-1'>Popular Cuisines</h2>
                    </div>
                    {/* Cuisines Section */}
                    <div>
                        {/* First Row */}
                        <div className='flex fd-r fw-w mb-20'>
                            <div className='flex fd-c ai-c m-0-30'>
                                <a href="#"><img className='h-100 w-a shadow br-50' src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png" alt="Biryani-Image" /></a> <br />
                                <a className='fs-r td-n c-b' href="#">Biryani</a>
                            </div>
                            <div className='flex fd-c ai-c m-0-30'>
                                <a href="#"><img className='h-100 w-a shadow br-50 br-50' src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" alt="Pizzas-Image" /></a> <br />
                                <a className='fs-r td-n c-b' href="#">Pizzas</a>
                            </div>
                            <div className='flex fd-c ai-c m-0-30'>
                                <a href="#"><img className='h-100 w-a shadow br-50' src="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png" alt="Rolls-Image" /></a> <br />
                                <a className='fs-r td-n c-b' href="#">Rolls</a>
                            </div>
                            <div className='flex fd-c ai-c m-0-30'>
                                <a href="#"><img className='h-100 w-a shadow br-50' src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" alt="Burger-Image" /></a> <br />
                                <a className='fs-r td-n c-b' href="#">Burger</a>
                            </div>
                            <div className='flex fd-c ai-c m-0-30'>
                                <a href="#"><img className='h-100 w-a shadow br-50 br-50' src="https://b.zmtcdn.com/data/o2_assets/efa0232fa263fd8b97ecf1c009e1b4801632716697.png" alt="Chap-Image" /></a> <br />
                                <a className='fs-r td-n c-b' href="#">Chaap</a>
                            </div>
                            <div className='flex fd-c ai-c m-0-30'>
                                <a href="#"><img className='h-100 w-a shadow br-50 br-50' src="https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png" alt="Chinese-Image" /></a> <br />
                                <a className='fs-r td-n c-b' href="#">Chinese</a>
                            </div>
                        </div>
                        {/* Second Row */}
                        <div className='flex fd-r'>
                            <div className='flex fd-c ai-c m-0-30'>
                                <a href="#"><img className='h-100 w-a shadow br-50' src="https://b.zmtcdn.com/data/dish_images/83b1a4086e98dc584a7ce5d9a844a3191635166040.png" alt="Pastry-Image" /></a> <br />
                                <a className='fs-r td-n c-b' href="#">Pastry</a>
                            </div>
                            <div className='flex fd-c ai-c m-0-30'>
                                <a href="#"><img className='h-100 w-a shadow br-50' src="https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png" alt="Cake-Image" /></a> <br />
                                <a className='fs-r td-n c-b' href="#">Cake</a>
                            </div>
                            <div className='flex fd-c ai-c m-0-30'>
                                <a href="#"><img className='h-100 w-a shadow br-50' src="https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png" alt="Paneer-Image" /></a> <br />
                                <a className='fs-r td-n c-b' href="#">Paneer</a>
                            </div>
                            <div className='flex fd-c ai-c m-0-30'>
                                <a href="#"><img className='h-100 w-a shadow br-50 br-50' src="https://b.zmtcdn.com/data/o2_assets/9cf8166717d81ec3212d0707a06749f91634401116.png" alt="Pasta-Image" /></a> <br />
                                <a className='fs-r td-n c-b' href="#">Pasta</a>
                            </div>
                            <div className='flex fd-c ai-c m-0-30'>
                                <a href="#"><img className='h-100 w-a shadow br-50 br-50' src="https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png" alt="Sandwich-Image" /></a> <br />
                                <a className='fs-r td-n c-b' href="#">Sandwich</a>
                            </div>
                            <div className='flex fd-c ai-c m-0-30'>
                                <a href="#"><img className='h-100 w-a shadow br-50 br-50' src="https://b.zmtcdn.com/data/dish_images/838c7929dcc09479600f118c9088af7b1614910398.png" alt="Bowls-Image" /></a> <br />
                                <a className='fs-r td-n c-b' href="#">Bowl</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default PopularCuisinesComponent

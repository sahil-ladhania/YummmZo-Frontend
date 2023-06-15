import React from 'react'

const AnythingDeliveredComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex fd-c mb-50'>
                    {/* Heading Section */}
                    <div className='flex jc-c mb-20'>
                        <h2>Anything Delivered</h2>
                    </div>
                    {/* Features Section */}
                    <div className='flex fd-r jc-sb'> 
                        {/* First Feature */}
                        <div className='flex fd-c ai-c'>
                            <img className='mb-20' src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,q_auto:low,h_136,w_170/https://glovoapp.com/images/why-glovo/restaurants.svg" alt="Image-1" />
                            <h3 className='mb-20'>Your city's top restaurants</h3>
                            <p className='ta-c'>
                                With a great variety of restaurants you can <br /> order your favourite food or explore new <br /> restaurants nearby!
                            </p>
                        </div>
                        {/* Second Feature */}
                        <div className='flex fd-c ai-c'>
                            <img className='mb-20' src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,q_auto:low,h_136,w_170/https://glovoapp.com/images/why-glovo/delivery.svg" alt="Image-1" />
                            <h3 className='mb-20'>Fast delivery</h3>
                            <p className='ta-c'>
                                We pride ourselves on speed. Order or send <br /> anything in your city and we'll pick it up and <br /> deliver it in minutes.
                            </p>
                        </div>
                        {/* Third Feature */}
                        <div className='flex fd-c ai-c'>
                            <img className='mb-20' src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,q_auto:low,h_136,w_170/https://glovoapp.com/images/why-glovo/groceries.svg" alt="Image-1" />
                            <h3 className='mb-20'>Groceries delivery & more</h3>
                            <p className='ta-c'>
                                Find anything you need! From supermarkets <br /> to shops, pharmacies to florists — if it's in <br /> your city you can count on us to get it.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default AnythingDeliveredComponent

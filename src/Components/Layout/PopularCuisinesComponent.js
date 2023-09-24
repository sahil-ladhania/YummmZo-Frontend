import React from 'react'
import '../../Styles/Main.css'

const PopularCuisinesComponent = ({ cuisines }) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex fd-c ai-c mb-20 h-auto'>
                    {/* Heading Section */}
                    <div className='mb-40'>
                        <h2 className='fs-r c-3d3d3d ls-1'>Popular Cuisines</h2>
                    </div>
                    {/* Cuisines Section */}
                    <div>
                        <div className='flex justify-center fd-r fw-w mb-20'>
                            {cuisines.map((cuisine, index) => (
                                <div key={index} className='flex mb-20 fd-c ai-c m-0-30'>
                                    <img className='h-100 mb-10 w-a shadow br-50' src={cuisine.imageURL} alt="" />
                                    <a className='fs-r td-n c-b' href="#">{cuisine.cuisineName}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default PopularCuisinesComponent

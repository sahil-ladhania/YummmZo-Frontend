import React from 'react'
import { CiCircleChevRight } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";

const InspirationForFirstOrderComponent = ({ cuisines , auth , setAuth , loading , setLoading }) => {
    return (
        <div className='max-w-5xl ml-auto mr-auto'>
            <>
                {/* Main Component */}
                <div className='flex flex-col h-72 items-start justify-evenly'>
                    <div className='flex justify-between w-full mt-10'>
                        {
                            auth.user ?
                                <span className='text-3xl font-medium py-2 mb-2 font-roboto text-secondary'>
                                    {auth.user.firstName}, What's on your mind ?
                                </span>
                                :
                                <span className='text-3xl font-medium py-2 mb-2 font-roboto text-secondary'>
                                    What's on your mind ?
                                </span>
                        }
                        <div className='flex items-center'>
                            <span><CiCircleChevLeft className='text-2xl text-secondary mx-2 cursor-pointer'/></span>
                            <span><CiCircleChevRight className='text-2xl text-secondary mx-2 cursor-pointer'/></span>
                        </div>
                    </div>
                    <div className='flex cursor-pointer w-full bg-white'>
                        <div className='flex overflow-x-auto space-x-5'>
                            <img className='h-40 w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png" alt="" />
                            <img className='h-40 w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png" alt="" />
                            <img className='h-40 w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png" alt="" />
                            <img className='h-40 w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png" alt="" />
                            <img className='h-40 w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png" alt="" />
                            <img className='h-40 w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png" alt="" />
                            <img className='h-40 w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png" alt="" />
                            <img className='h-40 w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png" alt="" />
                            <img className='h-40 w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png" alt="" />
                            <img className='h-40 w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png" alt="" />
                            <img className='h-40 w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png" alt="" />
                            <img className='h-40 w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png" alt="" />
                            <img className='h-40 w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png" alt="" />
                            <img className='h-40 w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png" alt="" />
                            <img className='h-40 w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029849/PC_Creative%20refresh/3D_bau/banners_new/Omelette.png" alt="" />
                            <img className='h-40 w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png" alt="" />
                            <img className='h-40 w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png" alt="" />
                            <img className='h-40 w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Lassi.png" alt="" />
                            <img className='h-40 w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rasgulla.png" alt="" />
                            <img className='h-40 w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Gulab_Jamun.png" alt="" />
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default InspirationForFirstOrderComponent

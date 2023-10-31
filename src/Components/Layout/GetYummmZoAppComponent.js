import React from 'react'

const GetYummmZoAppComponent = () => {
    return (
        <div className='max-w-5xl ml-auto mr-auto py-10'>
            <>
                {/* Main Component */}
                <div className='flex items-center justify-evenly h-80'>
                    {/* Image Section */}
                    <div>
                        <img className='h-60' src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png" alt="" />
                    </div>
                    {/* Content Section */}
                    <div className='flex flex-col'>
                        <span className='text-4xl font-semibold mb-5 font-roboto text-yummmzo-color'>Get the YummmZo App</span>
                        <span className='text-lg mb-2 font-medium font-roboto text-black'>Download app from</span>
                        <div className='flex'>
                            <img className='h-10 mr-2 cursor-pointer' src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
                            <img className='h-10 ml-2 cursor-pointer' src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default GetYummmZoAppComponent

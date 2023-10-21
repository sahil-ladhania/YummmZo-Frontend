import React from 'react'


const HowItWorksCardComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                    <div className="flex justify-between items-center w-full">
                        <div className="card bg-secondary flex items-center justify-between flex-col p-5">
                            <img src="https://b.zmtcdn.com/merchant-onboarding/ecb5e086ee64a4b8b063011537be18171600699886.png" alt="Step 1" className="h-20"/>
                            <div className="text-xl font-medium h-10 font-roboto text-yummmzo-color">Step 1</div>
                            <div className="text-sm font-medium h-10 font-roboto text-yummmzo-color">Create your page on YummmZo</div>
                            <p className="h-20 text-sm font-roboto text-yummmzo-color">Help users discover your place by creating a listing on YummmZo</p>
                        </div>
                        <div className="card bg-secondary flex items-center justify-between flex-col p-5">
                            <img src="https://b.zmtcdn.com/merchant-onboarding/71d998231fdaeb0bffe8ff5872edcde81600699935.png" alt="Step 2" className="h-20"/>
                            <div className="text-xl font-medium h-10 font-roboto text-yummmzo-color">Step 2</div>
                            <div className="text-sm font-medium h-10 font-roboto text-yummmzo-color">Register for online ordering</div>
                            <p className="h-20 text-sm font-roboto text-yummmzo-color">And deliver orders to millions of customers with ease</p>
                        </div>
                        <div className="card bg-secondary flex items-center justify-between flex-col p-5">
                            <img src="https://b.zmtcdn.com/merchant-onboarding/efdd6ac0cd160a46c97ad58d9bbd73fd1600699950.png" alt="Step 3" className="h-20"/>
                            <div className="text-xl font-medium h-10 font-roboto text-yummmzo-color">Step 3</div>
                            <div className="text-sm font-medium h-10 font-roboto text-yummmzo-color">Start receiving orders online</div>
                            <p className="h-20 text-sm font-roboto text-yummmzo-color">Manage orders on our partner app, web dashboard or API partners</p>
                        </div>
                    </div>
            </>
        </div>
    )
}

export default HowItWorksCardComponent

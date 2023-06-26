import React from 'react'

const HowItWorksCardComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    <div class="cards-container">
                        <div class="card flex ai-c jc-c fd-c p-10">
                            <img src="https://b.zmtcdn.com/merchant-onboarding/ecb5e086ee64a4b8b063011537be18171600699886.png" alt="Step 1" class="card-image"/>
                            <div class="card-heading fs-r">Step 1</div>
                            <div class="card-sub-heading fs-r">Create your page on YummmZo</div>
                            <p class="card-paragraph fs-r">Help users discover your place by creating a listing on Zomato</p>
                        </div>
                        <div class="card flex ai-c jc-c fd-c p-10">
                            <img src="https://b.zmtcdn.com/merchant-onboarding/71d998231fdaeb0bffe8ff5872edcde81600699935.png" alt="Step 2" class="card-image"/>
                            <div class="card-heading fs-r">Step 2</div>
                            <div class="card-sub-heading fs-r">Register for online ordering</div>
                            <p class="card-paragraph fs-r">And deliver orders to millions of customers with ease</p>
                        </div>
                        <div class="card flex ai-c jc-c fd-c p-10">
                            <img src="https://b.zmtcdn.com/merchant-onboarding/efdd6ac0cd160a46c97ad58d9bbd73fd1600699950.png" alt="Step 3" class="card-image"/>
                            <div class="card-heading fs-r">Step 3</div>
                            <div class="card-sub-heading fs-r">Start receiving orders online</div>
                            <p class="card-paragraph fs-r">Manage orders on our partner app, web dashboard or API partners</p>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default HowItWorksCardComponent

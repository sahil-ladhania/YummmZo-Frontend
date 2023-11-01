import React from 'react'

const CancellationPolicyComponent = () => {
    return (
        <div className=''>
            <>
                {/* Main Component */}
                <div className='bg-card-gradient w-full p-5 rounded-sm'>
                    {/* Heading Section */}
                    <div className='mb-5'>
                        <p className='text-md font-bold font-roboto text-secondary'>
                            Review your order and address <br /> details to avoid cancellations
                        </p>
                    </div>
                    {/* Note Section */}
                    <div className='mb-5'>
                        <span className='text-sm font-semibold font-roboto text-secondary'>Note :</span>
                        <p className='text-sm font-roboto text-secondary'>
                            If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds.
                        </p>
                    </div>
                    {/* Ending Note Section */}
                    <div className='mb-5'>
                        <p className='text-sm font-roboto text-secondary'>
                            Avoid cancellation as it leads to food wastage.
                        </p>
                    </div>
                    {/* Link Section */}
                    <div>
                        <a className='text-sm font-semibold font-roboto text-secondary' href="#">Read Cancellation Policy</a>
                    </div>
                </div>
            </>
        </div>
    )
}

export default CancellationPolicyComponent

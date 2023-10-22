import React from 'react'

const CancellationPolicyComponent = () => {
    return (
        <div className=''>
            <>
                {/* Main Component */}
                <div className='bg-secondary w-full border-2 border-yummmzo-color p-5 rounded-sm'>
                    {/* Heading Section */}
                    <div className='mb-5'>
                        <p className='text-md font-bold font-roboto text-yummmzo-color'>
                            Review your order and address <br /> details to avoid cancellations
                        </p>
                    </div>
                    {/* Note Section */}
                    <div className='mb-5'>
                        <span className='text-sm font-semibold font-roboto text-yummmzo-color'>Note :</span>
                        <p className='text-sm font-roboto text-yummmzo-color'>
                            If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds.
                        </p>
                    </div>
                    {/* Ending Note Section */}
                    <div className='mb-5'>
                        <p className='text-sm font-roboto text-yummmzo-color'>
                            Avoid cancellation as it leads to food wastage.
                        </p>
                    </div>
                    {/* Link Section */}
                    <div>
                        <a className='text-sm font-semibold font-roboto text-yummmzo-color' href="#">Read Cancellation Policy</a>
                    </div>
                </div>
            </>
        </div>
    )
}

export default CancellationPolicyComponent

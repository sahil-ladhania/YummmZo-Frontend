import React from 'react'

const CancellationPolicyComponent = () => {
    return (
        <div className=''>
            <>
                {/* Main Component */}
                <div className='w-300 p-10-20 b-1-b-s'>
                    {/* Heading Section */}
                    <div className='mb-20'>
                        <p>
                            Review your order and address <br /> details to avoid cancellations
                        </p>
                    </div>
                    {/* Note Section */}
                    <div className='mb-20'>
                        <span>Note :</span>
                        <p>
                            If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds.
                        </p>
                    </div>
                    {/* Ending Note Section */}
                    <div className='mb-20'>
                        <p>
                            Avoid cancellation as it leads to food wastage.
                        </p>
                    </div>
                    {/* Link Section */}
                    <div>
                        <a href="#">Read Cancellation Policy</a>
                    </div>
                </div>
            </>
        </div>
    )
}

export default CancellationPolicyComponent

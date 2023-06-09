import React from 'react'

const CancellationPolicyComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Heading Section */}
                    <div>
                        <p>
                            Review your order and address <br /> details to avoid cancellations
                        </p>
                    </div>
                    {/* Note Section */}
                    <div>
                        <p>
                            Note :
                        </p>
                        <p>
                            If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds.
                        </p>
                    </div>
                    {/* Ending Note Section */}
                    <div>
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

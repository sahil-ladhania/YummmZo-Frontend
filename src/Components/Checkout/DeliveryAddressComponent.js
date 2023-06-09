import React from 'react'

const DeliveryAddressComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Heading Component */}
                    <div>
                        <p>
                            Choose a delivery address
                        </p>
                        <p>
                            Multiple addresses in this location
                        </p>
                    </div>
                    {/* Address Component */}
                    <div>
                        <a href="#">
                            <div>
                                Add New Address
                            </div>
                            <button>Add New</button>
                        </a>
                    </div>
                </div>
            </>
        </div>
    )
}

export default DeliveryAddressComponent

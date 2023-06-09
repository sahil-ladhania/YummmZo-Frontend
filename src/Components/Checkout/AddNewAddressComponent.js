import React from 'react'

const AddNewAddressComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Map Section */}
                    <div>

                    </div>
                    {/* Address Section */}
                    <div>

                    </div>
                    {/* Textfeilds Section */}
                    <div>
                        <input type="text" placeholder='Door / Flat No.'/>
                        <input type="text" placeholder='Landmark'/>
                        <div>
                            <button>Home</button>
                            <button>Work</button>
                            <button>Other</button>
                        </div>
                    </div>
                    {/* Button Section */}
                    <div>
                        <button>Save Address & Proceed</button>
                    </div>
                </div>
            </>
        </div>
    )
}

export default AddNewAddressComponent

import React from 'react'

const UploadMenuComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='ml-100 b-1-b-s br-5 p-10-20 flex fd-c ai-c'>
                    {/* Form Heading Section */}
                    <div className='mb-20 fs-xxl'>
                        Upload Menu
                    </div>
                    {/* Form Section */}
                    <form action="">
                        {/* Add Menu Items */}
                        <div className='mb-20'>
                            <label htmlFor="">Menu Details</label>
                            <div className='fs-s'>
                                Add menu items and details
                            </div>
                        </div>
                        <div className='mb-20 flex fd-c'>
                            <input className='h-40 w-500 p-0-10 mb-20 b-1-t-s br-5 bc-ws' type="text" name="" id="" placeholder='Item Name'/>
                            <input className='h-40 w-500 p-0-10 mb-20 b-1-t-s br-5 bc-ws' type="text" name="" id="" placeholder='Item Price'/>
                            <textarea className='w-500 p-0-10 mb-20 b-1-t-s br-5 bc-ws' name="" id="" cols="20" rows="10" placeholder='Item Description'></textarea>
                            <select className='h-40 w-500 p-0-10 mb-20 b-1-t-s br-5 bc-ws' name="vegNonveg">
                                <option value="veg">Veg</option>
                                <option value="nonveg">Non-veg</option>
                            </select>
                        </div>
                        <div>
                            <button className='h-40 w-500 td-n c-b p-10 br-5 b-1-d8d8d8-s shadow'>Add Item</button>
                        </div>
                    </form>
                </div>
            </>
        </div>
    )
}

export default UploadMenuComponent

import React from 'react'
import { CiHome } from "react-icons/ci";

const UserAddressComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex items-start border-2 border-black rounded-sm w-96 mb-10 p-5'>
                    {/* Icon Section */}
                    <div className='mr-5'>
                        <span><CiHome className='text-xl mt-1 text-yummmzo-color'/></span>
                    </div>
                    {/* Address Section */}
                    <div className='w-96'>
                        <div className='mb-1'>
                            <h1 className='text-lg font-semibold font-roboto text-yummmzo-color'>Home</h1>
                        </div>
                        <div className='mb-1'>
                            <p className='text-sm font-roboto text-yummmzo-color'>
                                khasra no 1074, Arthala, Mohan Nagar, Ghaziabad, Uttar Pradesh 201007, G.T. Road, Kailash Park, Arthala, SH 57, Kaila...
                            </p>
                        </div>
                        <div className='mb-2'>
                            <span className='text-sm font-semibold font-roboto text-yummmzo-color'>32 MINS</span>
                        </div>
                        <div>
                            <button className='pr-5 pl-5 pt-3 pb-3 bg-slate-200 rounded-sm font-roboto'>Deliver Here</button>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default UserAddressComponent

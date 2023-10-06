import React from 'react'

const MenuItemsResultComponent = ({ data }) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex h-auto w-full hover:bg-slate-50 rounded-sm p-2 items-start justify-start cursor-pointer'>
                    {/* Image Container */}
                    <div className='mr-10 mt-1'>
                        <img className='h-28 w-auto rounded-md' src={data.imageURL} alt="" />
                    </div>
                    {/* Item Detail */}
                    <div className='flex flex-col'>
                        <span className='font-medium'>{data.itemName}</span>
                        <span className='text-slate-600 text-md'>Rs.{data.itemPrice}</span>
                        <span className='text-slate-600 text-sm'>
                            {data.itemDescription}
                        </span>
                    </div>
                </div>
            </>
        </div>
    )
}

export default MenuItemsResultComponent

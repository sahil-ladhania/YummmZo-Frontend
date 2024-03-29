import React from 'react'
import ItemDescriptionComponent from './ItemDescriptionComponent';
import ItemAddComponent from './ItemAddComponent';

const MenuSectionComponent = ({ menuItems , cartState , cartDispatch }) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-auto flex-col flex jc-sb ai-c pt-2 pb-2'>
                    {/* Map over the menuItems array */}
                    {menuItems.map((menuItem) => (
                        <div className='flex items-center justify-between mb-10' key={menuItem._id}>
                            <ItemDescriptionComponent className="w-9/12" menuItem={menuItem} cartState={cartState} cartDispatch={cartDispatch}/>
                            {/* Add Item Component */}
                            <ItemAddComponent className="w-3/12" cartState={cartState} cartDispatch={cartDispatch}/>
                        </div>
                    ))}
                </div>
                {/* Item Diivder */}
                <div className='mt-10'>
                    <hr className='bc-g b-n h-1'/>
                </div>
            </>
        </div>
    )
}

export default MenuSectionComponent

import React from 'react'
import ItemDescriptionComponent from './ItemDescriptionComponent';
import ItemAddComponent from './ItemAddComponent';

const MenuSectionComponent = ({ menuItems }) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-auto flex-col flex jc-sb ai-c pt-2 pb-2'>
                    {/* Map over the menuItems array */}
                    {menuItems.map((menuItem) => (
                        <div className='flex items-center justify-between' key={menuItem._id}>
                            <ItemDescriptionComponent className="w-9/12" menuItem={menuItem} />
                            {/* Add Item Component */}
                            <ItemAddComponent className="w-3/12"/>
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

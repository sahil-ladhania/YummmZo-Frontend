import React from 'react'
import ItemDescriptionComponent from './ItemDescriptionComponent';
import ItemAddComponent from './ItemAddComponent';
import '../../Styles/Main.css'

const MenuSectionComponent = ({menuItems}) => {
    if (!menuItems || menuItems.length === 0) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-150 flex jc-sb ai-c'>
                    {/* Item Description Component */}
                    <ItemDescriptionComponent menuItems={menuItems}/>
                    {/* Add Item Component */}
                    <ItemAddComponent/>
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

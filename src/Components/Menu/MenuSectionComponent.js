import React from 'react'
import ItemDescriptionComponent from './ItemDescriptionComponent';
import ItemAddComponent from './ItemAddComponent';

const MenuSectionComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Item Description Component */}
                    <ItemDescriptionComponent/>
                    {/* Add Item Component */}
                    <ItemAddComponent/>
                </div>
            </>
        </div>
    )
}

export default MenuSectionComponent

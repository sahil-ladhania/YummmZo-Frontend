import React from 'react'
import ItemDescriptionComponent from './ItemDescriptionComponent';
import ItemAddComponent from './ItemAddComponent';
import '../../Styles/Main.css'

const MenuSectionComponent = ({menuItems}) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-150 flex jc-sb ai-c'>
                    {/* Item Description Component */}
                    <ItemDescriptionComponent/>
                    {/* Add Item Component */}
                    <ItemAddComponent/>
                    {
                        menuItems && menuItems.map((item) => (
                            <div key={item.itemId}>
                                {/* Item Description Component */}
                                <ItemDescriptionComponent menuItems={item}/>
                                {/* Add Item Component */}
                                <ItemAddComponent itemId = {item.itemId}/>
                            </div>
                        ))
                    }
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

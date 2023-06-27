import React from 'react'

const MenuItemForm = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Heading Section */}
                    <div>
                            Upload Items and Images
                    </div>
                    {/* Restaurant Images */}
                    <div>
                        <span>Restaurant Images(Optional)</span>
                        <span>Please upload atleast one facade shot (picture of the restaurant front)</span>
                        <a href="#">Add Photos</a>
                    </div>
                    {/* Menu Items and Images */}
                    <div class="form-container">
                        <h2>Menu Item Form</h2>
                            <form>
                            <div class="form-group">
                                <label for="itemName">Item Name</label>
                                <input type="text" id="itemName" name="itemName" required/>
                            </div>
                            <div class="form-group">
                                <label for="itemDescription">Item Description</label>
                                <textarea id="itemDescription" name="itemDescription" required></textarea>
                            </div>
                            <div class="form-group">
                                <label for="itemPrice">Item Price</label>
                                <input type="number" id="itemPrice" name="itemPrice" min="0" required/>
                            </div>
                            <div class="form-group">
                                <label for="vegNonveg">Veg/Non-veg</label>
                                <input type="checkbox" id="vegNonveg" name="vegNonveg"/>
                            </div>
                            <button class="btn" type="submit">Add Item</button>
                            </form>
                    </div>
                </div>
            </>
        </div>
    )
}

export default MenuItemForm

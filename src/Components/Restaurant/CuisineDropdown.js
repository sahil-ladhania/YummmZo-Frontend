import React from 'react'

const CuisineDropdown = () => {
    return (
        <div>
            <>
            <div class="cuisine-dropdown">
                <label for="cuisine-select">Cuisine:</label>
                <select id="cuisine-select">
                    <option value="" disabled selected>Select Cuisine</option>
                    <option value="1">Biryani</option>
                    <option value="2">Pizzas</option>
                    <option value="3">Rolls</option>
                    <option value="3">Burger</option>
                    <option value="3">Chaap</option>
                    <option value="3">Chinese</option>
                    <option value="3">Pastry</option>
                    <option value="3">Cake</option>
                    <option value="3">Paneer</option>
                    <option value="3">Pasta</option>
                    <option value="3">Sandwich</option>
                    <option value="3">Bowl</option>
                </select>
            </div>
            </>
        </div>
    )
}

export default CuisineDropdown

// Defining Cart Reducer Function.
export const reducer = (state , action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return ;
        case 'INCREMENT_ITEM':
            return ;
        case 'DECREMENT_ITEM':
            return ;
        case 'CLEAR_CART':
            return [];
        default:
            return ;
    }
}
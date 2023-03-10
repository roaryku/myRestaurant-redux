import { createSlice } from '@reduxjs/toolkit'

/* cartSlice looks the same like dishesSlice 
 HERE COMBINE BUTTON ADD TO CARD WITH PORTIONS */

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCard: (state, action) => {
            const timeId = new Date().getTime()
            state.cartItems.push({
                id: timeId,
                dishId: action.payload.dish.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.dish.price
            })
        },
        removeItemFromCard: (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            )
        }
    }
})

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
    }, 0)
}

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCard, removeItemFromCard} = slice.actions
export default slice.reducer
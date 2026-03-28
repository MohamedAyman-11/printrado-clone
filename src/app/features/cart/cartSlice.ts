import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IProduct } from '../../../interfaces'
import { addItemToCartHandler, removeItemFromCartHandler } from '../../../utils'

// Define a type for the slice state
interface CartState {
 cartProducts: IProduct[]
}

const initialState: CartState = {
 cartProducts: [],
}

const cartSlice = createSlice({
 name: 'cart',
 initialState,
 reducers: {
  addItemToCart: (state, actionPayload: PayloadAction<IProduct>) => {
   state.cartProducts = addItemToCartHandler(state.cartProducts, actionPayload.payload)
  },
  removeItemFromCart: (state, actionPayload: PayloadAction<IProduct>) => {
   state.cartProducts = removeItemFromCartHandler(state.cartProducts, actionPayload.payload)
  },
 },
})

export const { addItemToCart, removeItemFromCart } = cartSlice.actions


export default cartSlice.reducer
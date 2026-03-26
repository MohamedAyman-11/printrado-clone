import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import type { IProduct } from '../../../interfaces'
import { addItemToCartHandler } from '../../../utils'

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
  }
 },
})

export const { addItemToCart } = cartSlice.actions


export default cartSlice.reducer
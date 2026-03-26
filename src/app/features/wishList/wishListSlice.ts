import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import type { IProduct } from '../../../interfaces'
import { addItemToWishListHandler } from '../../../utils'

// Define a type for the slice state
interface wishListState {
 wishListProducts: IProduct[]
}

// Define the initial state using that type
const initialState: wishListState = {
 wishListProducts: [],
}

const wishListSlice = createSlice({
 name: 'wishList',
 initialState,
 reducers: {
  addItemToWishList: (state, actionPayload: PayloadAction<IProduct>) => {
   state.wishListProducts = addItemToWishListHandler(state.wishListProducts, actionPayload.payload)
  }
 },
})

export const { addItemToWishList } = wishListSlice.actions

export default wishListSlice.reducer
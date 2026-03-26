import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { useDispatch } from 'react-redux'
import cartSlice from "./features/cart/cartSlice"
import wishListSlice from "./features/wishList/wishListSlice"
// ...

const cartPersistConfig = {
 key: 'cart',
 storage,
}
const wishlistPersistConfig = {
 key: 'wishList',
 storage,
}
console.log(storage);

const cartPersistedReducer = persistReducer(cartPersistConfig, cartSlice)
const wishlistPersistedReducer = persistReducer(wishlistPersistConfig, wishListSlice)
export const store = configureStore({
 reducer: {
  cart: cartPersistedReducer,
  wishList: wishlistPersistedReducer
 }, middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  serializableCheck: {
   ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"]
  }
 })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const persistor = persistStore(store)
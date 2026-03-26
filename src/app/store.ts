import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from "react-redux";
import wishListSlice from "./features/wishList/wishListSlice"
import cartSlice from "./features/cart/cartSlice"
import { persistReducer, persistStore } from 'redux-persist'

const storage = {
 getItem: (key: string) => Promise.resolve(localStorage.getItem(key)),
 setItem: (key: string, value: string) => {
  localStorage.setItem(key, value);
  return Promise.resolve();
 },
 removeItem: (key: string) => {
  localStorage.removeItem(key);
  return Promise.resolve();
 },
};
// ...
const wishlistPersistConfig = {
 key: 'wishList',
 storage,
}
const cartPersistConfig = {
 key: 'cart',
 storage,
}
const cartPersistedReducer = persistReducer(cartPersistConfig, cartSlice)
const wishListPersistedReducer = persistReducer(wishlistPersistConfig, wishListSlice)
export const store = configureStore({
 reducer: {
  cart: cartPersistedReducer,
  wishList: wishListPersistedReducer,
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
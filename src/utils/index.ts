import { Bounce, toast } from "react-toastify";
import type { IProduct } from "../interfaces";

// Add Items To Cart Handler
export const addItemToCartHandler = (cartProducts: IProduct[], product: IProduct,) => {
 const isAlreadyExist = cartProducts.find((item) => item.slug === product.slug);

 if (isAlreadyExist) {
  toast.success("✔ Product quantity updated", {
   position: "top-center",
   autoClose: 2500,
   theme: "light",
   transition: Bounce,
  });

  return cartProducts.map((item) =>
   item.slug === product.slug ? { ...item, quantity: item.quantity + (product.quantity || 1) } : item
  );
 }

 toast.success("✔ Product added at cart", {
  position: "top-center",
  autoClose: 2500,
  theme: "light",
  transition: Bounce,
 });

 return [...cartProducts, { ...product, quantity: product.quantity || 1 }];
};

// Add Items To Wish List Handler

export const addItemToWishListHandler = (wishListProducts: IProduct[], product: IProduct,) => {
 const isAlreadyExist = wishListProducts.find((item) => item.slug === product.slug);
 if (isAlreadyExist) {
  return wishListProducts.filter((item) => item.slug !== product.slug)
 }
 return [product, ...wishListProducts]
}
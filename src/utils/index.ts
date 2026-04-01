import { toast } from "react-hot-toast";
import type { IProduct } from "../interfaces";

// Add Items To Cart Handler
export const addItemToCartHandler = (cartProducts: IProduct[], product: IProduct,) => {
  const isAlreadyExist = cartProducts.find((item) => item.slug === product.slug);

  if (isAlreadyExist) {
    toast.success("✔ Product quantity updated", {
      position: "top-center",
      style: {
        fontWeight: 500,
        color: "#333 !important",
      }
    });

    return cartProducts.map((item) =>
      item.slug === product.slug ? { ...item, quantity: item.quantity + (product.quantity || 1), } : item
    );
  }

  toast.success("✔ Product added at cart", {
    position: "top-center",
    style: {
      fontWeight: 500,
      color: "#333 !important",
    }
  });
  return [{
    ...product, quantity: product.quantity || 1, price:
      product.hasDiscount && product.discountRate
        ? Math.trunc(
          product.price -
          (product.discountRate * product.price) / 100,
        )
        : Math.trunc(product.price),
  }, ...cartProducts];
};

// Add Items To Cart Handler
export const removeItemFromCartHandler = (cartProducts: IProduct[], product: IProduct,) => {

  toast.success("✔ Product removed successfully", {
    position: "top-center",
    style: {
      fontWeight: 500,
      color: "#333 !important",
    }
  })
  return cartProducts.filter((item) => item.slug !== product.slug);

};
// Products Quantity Handler
export const updateItemQuantityHandler = (cartProducts: IProduct[], product: IProduct) => {
  toast.success("✔ Product quantity updated")
  return cartProducts.map((item) => item.slug === product.slug ? { ...item, quantity: product.quantity } : item)
}
// Add Items To Wish List Handler

export const addItemToWishListHandler = (wishListProducts: IProduct[], product: IProduct,) => {
  const isAlreadyExist = wishListProducts.find((item) => item.slug === product.slug);
  if (isAlreadyExist) {
    toast.error("Product removed from wishlist 💔", {
      position: "top-center",
      style: {
        fontWeight: 600,
        color: "#333 !important",
      }
    });
    return wishListProducts.filter((item) => item.slug !== product.slug)
  }
  toast.success("Product added to wishlist ❤️", {
    position: "top-center",
    style: {
      fontWeight: 600,
      color: "#333 !important",
    }
  })
  return [product, ...wishListProducts]
}
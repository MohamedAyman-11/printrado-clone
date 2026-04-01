import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import type { IProduct } from "../interfaces";
import { updateItemQuantity } from "../app/features/cart/cartSlice";
import { useAppDispatch } from "../app/store";
interface IProps {
  product: IProduct;
}
const QuantityBox = ({ product }: IProps) => {
  const [inputValue, setInputValue] = useState(`${product.quantity}`);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (inputValue === "") return;

    const newValue = Number(inputValue);

    if (newValue === product.quantity) return;

    const timeout = setTimeout(() => {
      dispatch(
        updateItemQuantity({
          ...product,
          quantity: newValue,
        }),
      );
    }, 300);

    return () => clearTimeout(timeout);
  }, [dispatch, inputValue, product]);
  const onClickToDecreaseHandler = () => {
    setInputValue((prev) => String(Math.max(1, Number(prev) - 1)));
  };
  const onClickToIncreaseHandler = () => {
    setInputValue((prev) => String(Number(prev) + 1));
  };
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        sx={{
          width: "fit-content",
        }}
      >
        <input
          className="qty-btn qty-box"
          type="button"
          disabled={Number(inputValue) <= 1}
          value={"-"}
          onClick={onClickToDecreaseHandler}
        />
        <input
          min={1}
          className="qty-inp qty-box"
          type="number"
          value={inputValue}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown" && Number(inputValue) <= 1) {
              e.preventDefault();
            }
          }}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              setInputValue("");
              return;
            }
            const num = Number(value);
            if (num < 1) {
              setInputValue("1");
              return;
            }
            setInputValue(String(num));
          }}
        />
        <input
          type="button"
          value={"+"}
          onClick={onClickToIncreaseHandler}
          className="qty-btn qty-box"
        />
      </Stack>
    </>
  );
};
export default QuantityBox;

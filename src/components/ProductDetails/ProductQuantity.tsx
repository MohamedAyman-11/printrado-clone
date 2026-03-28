import { Stack } from "@mui/material";
import { memo } from "react";

interface IProps {
  inputValue: string;
  setInputValue: (inputValue: string | ((prev: string) => string)) => void;
}
const ProductQuantity = ({ inputValue, setInputValue }: IProps) => {
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
          className="qty-btn"
          type="button"
          disabled={Number(inputValue) <= 1}
          value={"-"}
          onClick={() =>
            setInputValue((prev) => {
              const num = Number(prev);
              return num > 1 ? String(num - 1) : "1";
            })
          }
        />
        <input
          min={1}
          className="qty-inp"
          type="number"
          value={inputValue}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown" && Number(inputValue) <= 1) {
              e.preventDefault();
            }
          }}
          onChange={(e) => {
            let value = e.target.value;
            if (value === "") {
              setInputValue("");
              return;
            }
            let num = Number(value);
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
          onClick={() =>
            setInputValue((v) => {
              const value = Number(v);
              return String(value + 1);
            })
          }
          className="qty-btn"
        />
      </Stack>
    </>
  );
};
export default memo(ProductQuantity);

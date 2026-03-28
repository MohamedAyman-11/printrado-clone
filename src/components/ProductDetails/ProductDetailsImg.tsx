import { Box } from "@mui/material";
import { memo } from "react";

const ProductDetailsImg = ({ img }: { img: string }) => {
  return (
    <>
      <Box
        component={"img"}
        src={img}
        sx={{
          maxWidth: "392px",
          height: "518px",
          borderRadius: "10px",
          width: {
            xs: "90%",
            sm: "100%",
            md: "50%",
          },
          mx: {
            xs: "auto",
          },
        }}
      />
    </>
  );
};
export default memo(ProductDetailsImg);

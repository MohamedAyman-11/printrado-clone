import { Box, Stack, Typography } from "@mui/material";
import { memo } from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const WishlistHeader = () => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={"15px 15px"}
        mb={"20px"}
        sx={{
          borderBottom: "1px solid #0000001b",
        }}
      >
        <Typography fontWeight={700} color="#424242" fontSize={"18px"}>
          My wishlist
        </Typography>
        <Box display={"flex"} alignItems={"center"}>
          <Typography
            display={"flex"}
            alignItems={"center"}
            variant="body1"
            component={"p"}
            sx={{
              color: "#333",
              fontWeight: 600,
              fontSize: "16px",
              mr: "3px",
              lineHeight: 0,
            }}
          >
            Share:{" "}
          </Typography>
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <FaFacebookF className="soc" size={16} />
            <FaXTwitter className="soc" size={16} />
            <FaLinkedinIn className="soc" size={16} />
            <FaWhatsapp className="soc" size={16} />
          </Box>
        </Box>
      </Stack>
    </>
  );
};
export default memo(WishlistHeader);

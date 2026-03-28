import { Check, FavoriteBorderOutlined } from "@mui/icons-material";
import {
  Badge,
  badgeClasses,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { memo } from "react";

interface IProps {
  inWishList: boolean;
  onAddItemToWishList: () => void;
}
const FavBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -6px;
    right: 0px;
  }
`;
const AddToWishListButton = ({ inWishList, onAddItemToWishList }: IProps) => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        onClick={onAddItemToWishList}
        sx={{
          cursor: "pointer",
          width: "fit-content",
          color: "#333333",
          transition: "all 0.3s ease",
          textTransform: "none",
          bgcolor: "transparent",
          fontSize: "15px",
          fontWeight: 600,
          userSelect: "none",
          mx: {
            xs: "auto",
            md: 0,
          },
          "&:hover": {
            bgcolor: "transparent",
            color: "#767676",
          },
          "&:hover svg": {
            bgcolor: "transparent",
            color: "#767676",
          },
          "&:hover .MuiBadge-badge svg.MuiSvgIcon-root ": {
            color: "#fff",
          },
        }}
      >
        <IconButton
          sx={{
            mr: inWishList ? "5px" : "0px",
            color: "#333333",
            transition: "all 0.3s ease",
          }}
          disableRipple
        >
          <FavoriteBorderOutlined
            sx={{ fontSize: "25px", transition: "all 0.3s ease" }}
          />
          {inWishList && (
            <FavBadge
              badgeContent={
                <Check
                  sx={{
                    fontSize: "10px",
                    transition: "all 0.3s ease",
                  }}
                />
              }
              overlap="circular"
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "primary.main",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "bold",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                },
              }}
            />
          )}
        </IconButton>
        <Typography fontWeight={600}>
          {inWishList ? "Remove from wishlist" : "Add to wishlist"}
        </Typography>
      </Stack>
    </>
  );
};
export default memo(AddToWishListButton);

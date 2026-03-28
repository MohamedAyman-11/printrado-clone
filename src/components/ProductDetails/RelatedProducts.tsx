import { Box, Button, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { HomeData } from "../../data/homePageData";
import type { IProduct } from "../../interfaces";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { memo } from "react";
import ProductCard from "../ProductCard";

interface IProps {
  product: IProduct;
}
const RelatedProducts = ({ product }: IProps) => {
  const relatedProducts = HomeData.filter(
    (item) => item.category === product.category && item.slug !== product.slug,
  ).slice(0, 10);
  return (
    <>
      <Box component={"section"} className="related-products">
        <Typography
          variant="h2"
          color="h2"
          fontSize={"22px"}
          fontWeight={"700"}
          mb={"20px"}
          sx={{ color: "#242424" }}
        >
          Related products
        </Typography>
        <Stack
          ml={"auto"}
          direction={"row"}
          alignItems={"center"}
          gap={"20px"}
          justifyContent={"end"}
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <Button
            className="previous-slide-btn "
            sx={{
              bgcolor: "primary.main",
              color: "#fff",
              padding: "8px 16px",
              width: "fit-content",
              minWidth: "fit-content",
              "&:hover": {
                bgcolor: "#d8832e",
              },
              "&:disabled": {
                bgcolor: "#999",
                color: "#fff",
                cursor: "not-allowed",
              },
            }}
          >
            <KeyboardArrowLeft fontSize="medium" />
          </Button>
          <Button
            className="next-slide-btn"
            sx={{
              bgcolor: "primary.main",
              color: "#fff",
              padding: "8px 16px",
              width: "fit-content",
              minWidth: "fit-content",
              "&:hover": {
                bgcolor: "#d8832e",
              },
              "&:disabled": {
                bgcolor: "#999",
                color: "#fff",
                cursor: "not-allowed",
              },
            }}
          >
            <KeyboardArrowRight fontSize="medium" />
          </Button>
        </Stack>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.6}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          navigation={{
            nextEl: ".next-slide-btn ",
            prevEl: ".previous-slide-btn",
          }}
          className="mySwiper"
          breakpoints={{
            530: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 3.7,
            },
            1200: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 5,
            },
          }}
        >
          {relatedProducts.map((product) => (
            <SwiperSlide
              style={{
                height: "454px",
              }}
            >
              <ProductCard product={product} key={product.slug} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};
export default memo(RelatedProducts);

import { Box, Pagination, PaginationItem } from "@mui/material";

interface IProps {
  count: number;
  setPage: (value: number) => void;
  page: number;
}
const CustomPagination = ({ count, setPage, page }: IProps) => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={"40px"}
      >
        <Pagination
          count={count}
          page={page}
          onChange={(_, value) => setPage(value)}
          shape="rounded"
          sx={(theme) => ({
            transition: "all 0.3s ease",
            "& .MuiButtonBase-root": {
              fontSize: "14px",
              color: "#242424",
              fontWeight: 700,
              margin: "2px",
            },
            "& .MuiPaginationItem-root ": {
              color: "#242424",
              fontWeight: 700,
            },
            "& .Mui-selected": {
              bgcolor: `${theme.palette.text.primary} !important`,
              color: "#fff !important",
            },
            "& .Mui-selected:hover": {
              bgcolor: `${theme.palette.text.primary} !important`,
              color: "#fff !important",
            },
            "& .MuiTouchRipple-root": {
              display: "none",
            },
            "& .Mui-disabled": {
              display: "none",
            },
          })}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: "26px",
                },
              }}
            />
          )}
        />
      </Box>
    </>
  );
};
export default CustomPagination;

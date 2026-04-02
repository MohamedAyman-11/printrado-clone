import { Box, Typography } from "@mui/material";
interface IProps {
  text: string;
}
const Separator = ({ text }: IProps) => {
  return (
    <>
      <Box display="flex" alignItems="center" gap={2} mb={"20px"}>
        <Box flex={1} height="1px" bgcolor="#0000001b" />
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: 600,
            textTransform: "uppercase",
            color: "#242424",
          }}
        >
          {text}
        </Typography>
        <Box flex={1} height="1px" bgcolor="#0000001b" />
      </Box>
    </>
  );
};
export default Separator;

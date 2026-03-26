import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

interface IProps {
  category: string;
  title: string;
  categoryPath: string;
}
const BreadCrumb = ({ category, title, categoryPath }: IProps) => {
  return (
    <div role="presentation">
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          "& .MuiBreadcrumbs-separator": {
            color: "#767676",
            mx: "10px",
          },
        }}
      >
        <NavLink className="break-crumb-link" to={"/"}>
          Home
        </NavLink>
        <NavLink className="break-crumb-link" to={categoryPath}>
          {category}
        </NavLink>
        <Typography
          textTransform={"capitalize"}
          color="#242424"
          fontWeight={600}
        >
          {title}
        </Typography>
      </Breadcrumbs>
    </div>
  );
};
export default BreadCrumb;

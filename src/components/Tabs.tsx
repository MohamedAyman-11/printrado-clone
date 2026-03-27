import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CustomTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        pt: "20px",
      }}
    >
      <Box sx={{ borderTop: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Book Specification" {...a11yProps(0)} disableRipple />
          <Tab label="Quality" {...a11yProps(1)} disableRipple />
          <Tab label="Delivery" {...a11yProps(2)} disableRipple />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box>
          <Typography variant="body1" color="#777" mb={"20px"}>
            <strong>Length:</strong> 672 pages
          </Typography>
          <Typography variant="body1" color="#777" mb={"20px"}>
            <strong>Width (mm):</strong> 180 (close to original)
          </Typography>
          <Typography variant="body1" color="#777" mb={"20px"}>
            <strong>Heitght (mm):s</strong> 240 (close to original)
          </Typography>
          <Typography variant="body1" color="#777" mb={"20px"}>
            <strong>Paper:</strong> 75 gsm (white)
          </Typography>
          <Typography variant="body1" color="#777" mb={"20px"}>
            <strong>Cover: </strong>Paperback 300 gsm (luminated)
          </Typography>
          <Typography variant="body1" color="#777" mb={"20px"}>
            <strong>Color:</strong> All books are Colored (except for original
            black books)
          </Typography>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant="body1" color="#777" mb={"20px"}>
          Quality guranteed. We provide free replacement if the received book
          has any issues.
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography variant="body1" color="#777" mb={"20px"}>
          After confirmation, books are delivered within 2-3 working days.
        </Typography>
      </CustomTabPanel>
    </Box>
  );
}

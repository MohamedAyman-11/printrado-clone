import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import type { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
  type AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function ProductDetailsAccordion() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        sx={{
          border: "1px solid #0000001b",
          borderInline: "none",
          borderTop: "none",
          bgcolor: "transparent",
          "& .MuiButtonBase-root": {
            flexDirection: "row !important",
            bgcolor: "transparent",
          },
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          className="accordion-header"
          id="panel1d-header"
          sx={{
            my: 0,
            py: "20px",
            px: 0,
          }}
        >
          <Typography component="span">Book Specification</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          border: "1px solid #0000001b",
          borderInline: "none",
          bgcolor: "transparent",
          "& .MuiButtonBase-root": {
            flexDirection: "row !important",
            bgcolor: "transparent",
          },
        }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          className="accordion-header"
          id="panel2d-header"
          sx={{
            my: 0,
            py: "20px",
            px: 0,
          }}
        >
          <Typography component="span">Quality</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="#777" mb={"20px"}>
            Quality guranteed. We provide free replacement if the received book
            has any issues.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          border: "1px solid #0000001b",
          borderInline: "none",

          bgcolor: "transparent",
          "& .MuiButtonBase-root": {
            flexDirection: "row !important",
            bgcolor: "transparent",
          },
        }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          className="accordion-header"
          id="panel3d-header"
          sx={{
            my: 0,
            py: "20px",
            px: 0,
          }}
        >
          <Typography component="span">Delivery</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="#777" mb={"20px"}>
            After confirmation, books are delivered within 2-3 working days.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

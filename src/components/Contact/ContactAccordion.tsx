import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import type { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
  type AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, List, ListItem } from "@mui/material";
import { memo, useState, type SyntheticEvent } from "react";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";

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
    expandIcon={
      <KeyboardArrowDownOutlined sx={{ fontSize: "20px", color: "#bbb" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(180deg)",
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

const ContactAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>("");

  const handleChange =
    (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
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
            alignItems: "center",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: {
                xs: "16px !important",
                lg: "18px !important",
              },
            }}
            fontWeight={700}
          >
            Do you deliver?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography
              variant="body1"
              color="#777"
              mb={"20px"}
              fontSize={"15px"}
            >
              Yes, we deliver to all over Egypt, except North Sinai
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
            alignItems: "center",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: {
                xs: "16px !important",
                lg: "18px !important",
              },
            }}
            fontWeight={700}
          >
            Which payment methods are accepted in the Online Shop?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="body1"
            color="#777"
            mb={"20px"}
            fontSize={"15px"}
          >
            We accept Visa/MasterCard. You can pay using cash on delivery. Also,
            payment through Mobile wallets, valU, InstaPay, Fawry are available.
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
          aria-controls="panel2d-content"
          className="accordion-header"
          id="panel2d-header"
          sx={{
            my: 0,
            py: "20px",
            px: 0,
            alignItems: "center",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: {
                xs: "16px !important",
                lg: "18px !important",
              },
            }}
            fontWeight={700}
          >
            What exactly happens after ordering?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem disablePadding alignItems="flex-start">
              <Box
                component={"span"}
                sx={{
                  width: 6,
                  height: 6,
                  bgcolor: "#777",
                  borderRadius: "50%",
                  mt: "8px",
                  mr: 1,
                  flexShrink: 0,
                }}
              />
              <Typography
                variant="body1"
                color="#777"
                mb={"20px"}
                fontSize={"15px"}
              >
                We’ll call you (or send WhatsApp message) to confirm your order
              </Typography>
            </ListItem>
            <ListItem disablePadding alignItems="flex-start">
              <Box
                component={"span"}
                sx={{
                  width: 6,
                  height: 6,
                  bgcolor: "#777",
                  borderRadius: "50%",
                  mt: "8px",
                  mr: 1,
                  flexShrink: 0,
                }}
              />
              <Typography
                variant="body1"
                color="#777"
                mb={"20px"}
                fontSize={"15px"}
              >
                We’ll call you (or send WhatsApp message) to confirm your order
              </Typography>
            </ListItem>
            <ListItem disablePadding alignItems="flex-start">
              <Box
                component={"span"}
                sx={{
                  width: 6,
                  height: 6,
                  bgcolor: "#777",
                  borderRadius: "50%",
                  mt: "8px",
                  mr: 1,
                  flexShrink: 0,
                }}
              />
              <Typography
                variant="body1"
                color="#777"
                mb={"20px"}
                fontSize={"15px"}
              >
                The shipping company will send an SMS to you that includes the
                tracking number
              </Typography>
            </ListItem>
            <ListItem disablePadding alignItems="flex-start">
              <Box
                component={"span"}
                sx={{
                  width: 6,
                  height: 6,
                  bgcolor: "#777",
                  borderRadius: "50%",
                  mt: "8px",
                  mr: 1,
                  flexShrink: 0,
                }}
              />
              <Typography
                variant="body1"
                color="#777"
                mb={"20px"}
                fontSize={"15px"}
              >
                You’ll get a call from the delivery man to deliver your order
                within 2-4 days depending on your location.
              </Typography>
            </ListItem>
          </List>
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
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          className="accordion-header"
          id="panel1d-header"
          sx={{
            my: 0,
            py: "20px",
            px: 0,
            alignItems: "center",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: {
                xs: "16px !important",
                lg: "18px !important",
              },
            }}
            fontWeight={700}
          >
            Can I visit your store to see/buy the books myself?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography
              variant="body1"
              color="#777"
              mb={"20px"}
              fontSize={"15px"}
            >
              Yes you can, but prior reservation is required. Call us on
              01101160177 to arrange the visit and making sure your requested
              books are available in the showroom.
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
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          className="accordion-header"
          id="panel1d-header"
          sx={{
            my: 0,
            py: "20px",
            px: 0,
            alignItems: "center",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: {
                xs: "16px !important",
                lg: "18px !important",
              },
            }}
            fontWeight={700}
          >
            Do you deliver on public holidays or weekends?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography
              variant="body1"
              color="#777"
              mb={"20px"}
              fontSize={"15px"}
            >
              In most cases, we don't deliver on public holidays or weekends.
              But, sometimes you might receive your shipments on such days.
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
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          className="accordion-header"
          id="panel1d-header"
          sx={{
            my: 0,
            py: "20px",
            px: 0,
            alignItems: "center",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: {
                xs: "16px !important",
                lg: "18px !important",
              },
            }}
            fontWeight={700}
          >
            Is same-day or next-day delivery available?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography
              variant="body1"
              color="#777"
              mb={"20px"}
              fontSize={"15px"}
            >
              Well. That depends on your address and whether the ordered books
              are in stock or not. Contact us and we'll sort your request out.
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
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          className="accordion-header"
          id="panel1d-header"
          sx={{
            my: 0,
            py: "20px",
            px: 0,
            alignItems: "center",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: {
                xs: "16px !important",
                lg: "18px !important",
              },
            }}
            fontWeight={700}
          >
            My order hasn't arrived yet. Where is it?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography
              variant="body1"
              color="#777"
              mb={"20px"}
              fontSize={"15px"}
            >
              If you received a tracking message from Bosta, you can track you
              order through this link
              (https://bosta.co/en-eg/tracking-shipments). If you don't know
              your tracking number, reach out to us on 01101160177
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
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          className="accordion-header"
          id="panel1d-header"
          sx={{
            my: 0,
            py: "20px",
            px: 0,
            alignItems: "center",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: {
                xs: "16px !important",
                lg: "18px !important",
              },
            }}
            fontWeight={700}
          >
            What time on the day shall I receive my order?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography
              variant="body1"
              color="#777"
              mb={"20px"}
              fontSize={"15px"}
            >
              We usually deliver during the day (not night). Delivery happens
              between 10:00 AM and 6:00 PM
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
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          className="accordion-header"
          id="panel1d-header"
          sx={{
            my: 0,
            py: "20px",
            px: 0,
            alignItems: "center",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: {
                xs: "16px !important",
                lg: "18px !important",
              },
            }}
            fontWeight={700}
          >
            How long will delivery take?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography
              variant="body1"
              color="#777"
              mb={"20px"}
              fontSize={"15px"}
            >
              Cairo & Giza: 2-3 working days
            </Typography>
            <Typography
              variant="body1"
              color="#777"
              mb={"20px"}
              fontSize={"15px"}
            >
              Other areas: 3-5 working days
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
        expanded={expanded === "panel10"}
        onChange={handleChange("panel10")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          className="accordion-header"
          id="panel1d-header"
          sx={{
            my: 0,
            py: "20px",
            px: 0,
            alignItems: "center",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: {
                xs: "16px !important",
                lg: "18px !important",
              },
            }}
            fontWeight={700}
          >
            How secure is shopping in the Online Shop? Is my data protected?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography
              variant="body1"
              color="#777"
              mb={"20px"}
              fontSize={"15px"}
            >
              Totally secure. Your data security and privacy is our top concern
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          border: "1px solid #0000001b",
          borderBottom: "none",
          borderInline: "none",
          bgcolor: "transparent",
          "& .MuiButtonBase-root": {
            flexDirection: "row !important",
            bgcolor: "transparent",
          },
        }}
        expanded={expanded === "panel11"}
        onChange={handleChange("panel11")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          className="accordion-header"
          id="panel1d-header"
          sx={{
            my: 0,
            py: "20px",
            px: 0,
            alignItems: "center",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: {
                xs: "16px !important",
                lg: "18px !important",
              },
            }}
            fontWeight={700}
          >
            What are the delivery charges for orders from the Online Shop?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography
              variant="body1"
              color="#777"
              mb={"20px"}
              fontSize={"15px"}
            >
              Cairo & Giza: 60 EGP
            </Typography>
            <Typography
              variant="body1"
              color="#777"
              mb={"20px"}
              fontSize={"15px"}
            >
              Alexandria: 65 EGP
            </Typography>
            <Typography
              variant="body1"
              color="#777"
              mb={"20px"}
              fontSize={"15px"}
            >
              Delta & Canal: 70 EGP
            </Typography>
            <Typography
              variant="body1"
              color="#777"
              mb={"20px"}
              fontSize={"15px"}
            >
              Upper Egypt: 90 EGP
            </Typography>
            <Typography
              variant="body1"
              color="#777"
              mb={"20px"}
              fontSize={"15px"}
            >
              Borders: 100 EGP
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default memo(ContactAccordion);

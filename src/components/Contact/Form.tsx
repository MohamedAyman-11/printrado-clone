import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm, type SubmitHandler } from "react-hook-form";
import type z from "zod";
import { contactSchema } from "../../utils/ZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = () => {
  type TContact = z.infer<typeof contactSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContact>({
    mode: "onChange",
    resolver: zodResolver(contactSchema),
  });
  const onSubmit: SubmitHandler<TContact> = () => {};

  return (
    <>
      <Box component={"div"} className="form-wrapper" my={"25px"}>
        <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
          <Box component={"div"} className="input-group" py={"15px"}>
            <Typography
              component={"label"}
              htmlFor="name"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "16px",
                fontWeight: 700,
                mb: "12px",
              }}
            >
              Name{" "}
              <Typography
                component={"span"}
                color="error.light"
                fontSize={"20px"}
                fontWeight={400}
              >
                *
              </Typography>
            </Typography>
            <TextField
              type="text"
              {...register("name")}
              error={Boolean(errors.name)}
              helperText={errors?.name?.message}
              id="name"
              variant="outlined"
              sx={{
                width: {
                  xs: "100%",
                  xl: "70%",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline ": {
                  border: "1px solid #00000040",
                  borderRadius: "3px",
                  transition: "all 0.3s ease",
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline ":
                  {
                    border: "1px solid #00000040",
                    borderRadius: "3px",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ":
                  {
                    border: "1px solid #066aab",
                    boxShadow:
                      "0 0 0 1px #066aab, 0px 1px 2px rgba(0, 0, 0, 0.15)",
                    borderRadius: "3px",
                  },
                "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "error.main",
                    boxShadow: "none",
                  },
                "& .MuiOutlinedInput-root.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "error.main",
                  },
              }}
              slotProps={{
                input: {
                  autoComplete: "off",
                  sx: {
                    height: "43px",
                    color: "#000000b3",
                    fontSize: "16px",
                    bgcolor: "#fff",
                    border: "1px solid #0000001a",
                    width: {
                      xs: "100%",
                      xl: "70%",
                    },
                  },
                },
                formHelperText: {
                  sx: {
                    ml: 0,
                    fontSize: "13px",
                  },
                },
              }}
            />
          </Box>
          <Box component={"div"} className="input-group" py={"15px"}>
            <Typography
              component={"label"}
              htmlFor="email"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "16px",
                fontWeight: 700,
                mb: "12px",
              }}
            >
              Email{" "}
              <Typography
                component={"span"}
                color="error.light"
                fontSize={"20px"}
                fontWeight={400}
              >
                *
              </Typography>
            </Typography>
            <TextField
              type="email"
              {...register("email")}
              error={Boolean(errors.email)}
              helperText={errors?.email?.message}
              id="email"
              variant="outlined"
              sx={{
                width: {
                  xs: "100%",
                  xl: "70%",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline ": {
                  border: "1px solid #00000040",
                  borderRadius: "3px",
                  transition: "all 0.3s ease",
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline ":
                  {
                    border: "1px solid #00000040",
                    borderRadius: "3px",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ":
                  {
                    border: "1px solid #066aab",
                    boxShadow:
                      "0 0 0 1px #066aab, 0px 1px 2px rgba(0, 0, 0, 0.15)",
                    borderRadius: "3px",
                  },
                "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "error.main",
                    boxShadow: "none",
                  },
                "& .MuiOutlinedInput-root.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "error.main",
                  },
              }}
              slotProps={{
                input: {
                  autoComplete: "off",
                  sx: {
                    height: "43px",
                    color: "#000000b3",
                    fontSize: "16px",
                    bgcolor: "#fff",
                    border: "1px solid #0000001a",
                    width: {
                      xs: "100%",
                      xl: "70%",
                    },
                  },
                },
                formHelperText: {
                  sx: {
                    ml: 0,
                    fontSize: "13px",
                  },
                },
              }}
            />
          </Box>
          <Box component={"div"} className="input-group" py={"15px"}>
            <Typography
              component={"label"}
              htmlFor="phone"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "16px",
                fontWeight: 700,
                mb: "12px",
              }}
            >
              Phone{" "}
              <Typography
                component={"span"}
                color="error.light"
                fontSize={"20px"}
                fontWeight={400}
              >
                *
              </Typography>
            </Typography>
            <TextField
              type="number"
              {...register("phone")}
              error={Boolean(errors.phone)}
              helperText={errors?.phone?.message}
              id="phone"
              variant="outlined"
              sx={{
                width: {
                  xs: "100%",
                  xl: "70%",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline ": {
                  border: "1px solid #00000040",
                  borderRadius: "3px",
                  transition: "all 0.3s ease",
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline ":
                  {
                    border: "1px solid #00000040",
                    borderRadius: "3px",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ":
                  {
                    border: "1px solid #066aab",
                    boxShadow:
                      "0 0 0 1px #066aab, 0px 1px 2px rgba(0, 0, 0, 0.15)",
                    borderRadius: "3px",
                  },
                "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "error.main",
                    boxShadow: "none",
                  },
                "& .MuiOutlinedInput-root.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "error.main",
                  },
              }}
              slotProps={{
                input: {
                  autoComplete: "off",
                  sx: {
                    height: "43px",
                    color: "#000000b3",
                    fontSize: "16px",
                    bgcolor: "#fff",
                    border: "1px solid #0000001a",
                    width: {
                      xs: "100%",
                      xl: "70%",
                    },
                  },
                },
                formHelperText: {
                  sx: {
                    ml: 0,
                    fontSize: "13px",
                  },
                },
              }}
            />
          </Box>
          <Box component={"div"} className="input-group" py={"15px"}>
            <Typography
              component={"label"}
              htmlFor="message"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "16px",
                fontWeight: 700,
                mb: "12px",
              }}
            >
              Message{" "}
              <Typography
                component={"span"}
                color="error.light"
                fontSize={"20px"}
                fontWeight={400}
              >
                *
              </Typography>
            </Typography>
            <TextField
              {...register("message")}
              error={Boolean(errors.message)}
              helperText={errors?.message?.message}
              multiline
              id="message"
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  minHeight: "160px",
                },
                "& .MuiInputBase-input ": {
                  minHeight: "160px",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline ": {
                  border: "1px solid #00000040",
                  borderRadius: "3px",
                  transition: "all 0.3s ease",
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline ":
                  {
                    border: "1px solid #00000040",
                    borderRadius: "3px",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ":
                  {
                    border: "1px solid #066aab",
                    boxShadow:
                      "0 0 0 1px #066aab, 0px 1px 2px rgba(0, 0, 0, 0.15)",
                    borderRadius: "3px",
                  },
                "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "error.main",
                    boxShadow: "none",
                  },
                "& .MuiOutlinedInput-root.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "error.main",
                  },
              }}
              slotProps={{
                input: {
                  sx: {
                    fontSize: "16px",
                    bgcolor: "#fff",
                    color: "#777",
                  },
                },
                formHelperText: {
                  sx: {
                    ml: 0,
                    fontSize: "13px",
                  },
                },
              }}
            />
          </Box>
          <Button
            type="submit"
            sx={{
              width: "fit-content",
              height: "43px",
              textTransform: "initial",
              color: "#fff",
              fontWeight: "500",
              fontSize: "17px",
              bgcolor: "#066aab",
              transition: "all 0.3s ease",
              padding: "0 20px",
              "&:hover": {
                bgcolor: "#06558a",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default Form;

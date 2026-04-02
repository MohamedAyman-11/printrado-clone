import { useForm, type SubmitHandler } from "react-hook-form";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import type z from "zod";
import { registerSchema } from "../../utils/ZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterForm = () => {
  type TRegister = z.infer<typeof registerSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegister>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<TRegister> = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      <Box
        px={"20px"}
        flex={1}
        sx={{
          width: "100%",
          px: {
            xs: "20px",
            lg: "40px",
          },
        }}
      >
        <Typography
          variant="h2"
          component={"h2"}
          color="#242424"
          fontSize={"24px"}
          fontWeight={700}
          mb={"20px"}
        >
          Register
        </Typography>
        <Box
          component={"form"}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack direction={"column"} gap={"5px"} mb={"20px"}>
            <Typography
              component={"label"}
              htmlFor="email"
              fontSize={"15px"}
              color="#242424"
            >
              Email address{" "}
              <Typography
                component={"span"}
                color="error.light"
                fontSize={"20px"}
                fontWeight={500}
              >
                *
              </Typography>
            </Typography>
            <TextField
              autoComplete="off"
              id="email"
              type="email"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              {...register("email")}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#0000001a",
                  borderWidth: "1px !important",
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#0000001a",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#0000001a",
                  },

                "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "error.main",
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
                    color: "#777",
                    fontSize: "15px",
                    borderRadius: "35px",
                    height: "42px",
                    padding: "0 5px",
                    bgcolor: "#fff",
                    border: "1px solid #0000001a",
                  },
                },
              }}
            />
          </Stack>
          <Typography
            variant="body1"
            color="#777"
            fontSize={"15px"}
            mb={"20px"}
          >
            A link to set a new password will be sent to your email address.
          </Typography>
          <Typography
            variant="body1"
            color="#777"
            fontSize={"15px"}
            mb={"20px"}
          >
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our
            <Typography
              component={Link}
              to={"/"}
              fontWeight={500}
              sx={{
                textDecoration: "none",
                color: "#333",
              }}
            >
              {" "}
              privacy policy
            </Typography>
            .
          </Typography>
          <Button
            type="submit"
            sx={{
              width: "100%",
              height: "42px",
              color: "#fff",
              bgcolor: "primary.main",
              borderRadius: "35px",
              fontWeight: "600",
              textTransform: "initial",
              transition: "all 0.3s ease",
              ":hover": {
                bgcolor: "primary.light",
              },
            }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default RegisterForm;

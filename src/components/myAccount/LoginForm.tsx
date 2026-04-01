import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type z from "zod";
import { loginSchema } from "../../utils/ZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import RememberMe from "./RememberMe";
import Separator from "./Separator";
import OAuth from "./OAuth";

const LoginForm = () => {
  type TLogin = z.infer<typeof loginSchema>;
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const onSubmit: SubmitHandler<TLogin> = (data: TLogin) => {
    console.log(data);
  };
  return (
    <>
      <Box
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
          Login
        </Typography>
        <Box
          component={"form"}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack direction={"column"} gap={"5px"} mb={"20px"}>
            <Typography
              component={"label"}
              htmlFor="user_identifier"
              fontSize={"15px"}
              color="#242424"
            >
              Username or email address{" "}
              <Typography
                component={"span"}
                color="error.light"
                fontSize={"18px"}
                fontWeight={500}
              >
                *
              </Typography>
            </Typography>
            <TextField
              autoComplete="off"
              id="user_identifier"
              type="text"
              error={Boolean(errors.user_identifier)}
              helperText={errors.user_identifier?.message}
              {...register("user_identifier")}
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
          <Stack direction={"column"} gap={"5px"} mb={"20px"}>
            <Typography
              component={"label"}
              htmlFor="user_password"
              fontSize={"15px"}
              color="#242424"
            >
              Password{" "}
              <Typography
                component={"span"}
                color="error.light"
                fontSize={"18px"}
                fontWeight={500}
              >
                *
              </Typography>
            </Typography>
            <TextField
              autoComplete="off"
              id="user_password"
              type={showPassword ? "text" : "password"}
              error={Boolean(errors.user_password)}
              helperText={errors.user_password?.message}
              {...register("user_password")}
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
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        disableRipple
                        sx={{
                          padding: 0,
                          mx: "auto",
                          color: "#666",
                          width: "42px",
                          height: "42px",
                          ":hover": {
                            bgcolor: "transparent",
                            color: "#999",
                          },
                        }}
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff
                            fontSize="small"
                            sx={{
                              transition: "all 0.3s ease",
                            }}
                          />
                        ) : (
                          <Visibility
                            fontSize="small"
                            sx={{
                              transition: "all 0.3s ease",
                            }}
                          />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Stack>
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
              mb: "20px",
              transition: "all 0.3s ease",
              ":hover": {
                bgcolor: "primary.light",
              },
            }}
          >
            Login
          </Button>
          <RememberMe />
          <Separator text="Or login with" />
          <OAuth />
        </Box>
      </Box>
    </>
  );
};
export default LoginForm;

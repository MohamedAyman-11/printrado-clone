import z from "zod"

export const registerSchema = z.object({
 email: z.email({ error: "Please provide a valid email address." })
})
export const loginSchema = z.object({
 user_identifier: z.string().min(1, "Email address or Username is Required").refine(value => {
  const isEmail = z.email().safeParse(value).success;
  const isUsername = /^[a-zA-Z0-9_]+$/.test(value);
  return isEmail || isUsername;
 }, { error: "Enter a valid email or username" }),
 user_password: z.string().min(6, "Password must be 6 characters at least")
})
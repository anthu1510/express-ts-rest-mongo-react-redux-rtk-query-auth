import { z } from "zod";
import { extendZod } from "@zodyac/zod-mongoose";

extendZod(z);

export const userSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().min(1).max(510),
  password: z.string().min(1).max(1024),
  status: z.enum(["active", "inactive"]).default("active"),
  createdAt: z.date(),
  updatedAt: z.date(),
});
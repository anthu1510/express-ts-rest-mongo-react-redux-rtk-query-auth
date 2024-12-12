import { z } from "zod";
import { userSchema } from "../schemas/users.schema";


export type TUser = z.infer<typeof userSchema>;
export type TUsers = TUser[];
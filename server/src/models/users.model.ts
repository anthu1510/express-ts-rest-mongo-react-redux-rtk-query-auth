import { zodSchema } from "@zodyac/zod-mongoose";
import { model } from "mongoose";
import { userSchema } from "../schemas/users.schema";

const schema = zodSchema(userSchema);
const userModel = model("Users", schema);

export default userModel;
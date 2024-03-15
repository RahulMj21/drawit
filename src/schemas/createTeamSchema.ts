import { z } from "zod";

export const CreateTeamSchema = z.object({
  name: z
    .string()
    .min(1, "This is a required field.")
    .min(3, "Name must contain atleast 3 characters")
    .max(30, "Name must contain less than 30 characters."),
});

export type TCreateTeamInput = z.infer<typeof CreateTeamSchema>;

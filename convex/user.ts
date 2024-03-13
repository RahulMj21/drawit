import { v } from "convex/values";
import { mutation, query } from "@/convex/_generated/server";

export const getUser = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db
      .query("user")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    if (result && result.length > 0) {
      return result[0];
    }

    return null;
  },
});

export const createUser = mutation({
  args: {
    email: v.string(),
    name: v.string(),
    image: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.insert("user", args);

    return result;
  },
});

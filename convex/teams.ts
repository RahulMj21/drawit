import { v } from "convex/values";
import { mutation, query } from "@/convex/_generated/server";

export const getTeam = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db
      .query("team")
      .filter((q) => q.eq(q.field("createdBy"), args.email))
      .collect();

    if (result && result?.length > 0) return result;
    return null;
  },
});

export const createTeam = mutation({
  args: {
    name: v.string(),
    createdBy: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.insert("team", args);
    return result;
  },
});

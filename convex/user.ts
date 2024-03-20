import { v } from "convex/values";
import { mutation, query } from "@/convex/_generated/server";
import { IUser } from "@/types";

export const getUser = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const result: IUser = await ctx.db
      .query("user")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();

    return result;
  },
});

export const createUser = mutation({
  args: {
    email: v.string(),
    name: v.string(),
    image: v.string(),
    activeTeam: v.union(v.string(), v.null()),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.insert("user", args);
    if (result) {
      const newUser: IUser = await ctx.db.get(result);
      return newUser;
    }
    return null;
  },
});

export const updateUser = mutation({
  args: {
    _id: v.id("user"),
    activeTeam: v.union(v.string(), v.null()),
  },
  handler: async (ctx, { _id, activeTeam }) => {
    const result = await ctx.db.patch(_id, { activeTeam });
    const newUser: IUser = await await ctx.db.get(_id);

    return newUser;
  },
});

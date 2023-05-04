import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const listingRouter = createTRPCRouter({
  sendMessage: protectedProcedure
    .input(z.object({ message: z.string(), listingId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const fromUser = await clerkClient.users.getUser(ctx.auth.userId);
      const message = await ctx.prisma.message.create({
        data: {
          fromUser: ctx.auth.userId,
          fromUserName: fromUser.username ?? "unknown",
          listingId: input.listingId,
          message: input.message,
        },
      });
      return message;
    }),
  fetchListing: publicProcedure
    .input(z.object({ listingId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.listing.findUnique({
        where: {
          id: input.listingId,
        },
      });
    }),
  getListings: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.listing.findMany();
  }),
  get: publicProcedure
    .input(z.object({ listingId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.listing.findUnique({
        where: {
          id: input.listingId,
        },
      });
    }),
  create: protectedProcedure
    .input(
      z.object({ name: z.string(), description: z.string(), price: z.number() })
    )
    .mutation(async ({ input, ctx }) => {
      // TODO: save to database
      const listing = await ctx.prisma.listing.create({
        data: { ...input, userId: ctx.auth.userId },
      });
      return listing;
    }),
});

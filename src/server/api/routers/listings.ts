import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const listingRouter = createTRPCRouter({
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
import { getAuthSession } from "@/lib/nextauth";
import { TRPCError, initTRPC } from "@trpc/server";

// tRPCの初期化
const t = initTRPC.create()

// middlewareでログインユーザーの取得
export const authMiddleware = t.middleware(async ({ next }) => {
  const user = await getAuthSession()

  if (!user) {
    throw new TRPCError({ code: "UNAUTHORIZED" })
  }

  return next({
    ctx: {
      user,
    },
  })

})

export const router = t.router
// 認証していなくてもコールできる
export const publicProcedure = t.procedure
// 認証していないとコールできない
export const privateProcedure = t.procedure.use(authMiddleware)

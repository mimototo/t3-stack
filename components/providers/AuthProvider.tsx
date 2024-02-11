"use client"

import type React from "react"
import { SessionProvider } from "next-auth/react"

interface AuthProviderProps {
  children: React.ReactNode
}

// 認証プロバイダー
const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default AuthProvider

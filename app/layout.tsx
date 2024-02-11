import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { getAuthSession } from "@/lib/nextauth"
import AuthProvider from "@/components/providers/AuthProvider"
import TrpcProvider from "@/components/providers/TrpcProvider"
import ToastProvider from "@/components/providers/ToastProvider"
import Navigation from "@/components/auth/Navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "T3Stack",
  description: "learn T3Stack",
}

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  // 認証情報取得
  const user = await getAuthSession()

  return (
    <html lang="ja">
      <body className={inter.className}>
        <AuthProvider>
          <TrpcProvider>
            <Navigation user={user} />
            <ToastProvider />

            <main className="container mx-auto max-w-screen-md flex-1 px1">{children}</main>

            {/* フッター */}
            <footer className="py-5">
              <div className="text-center text-sm">
                Copyright © All rights reserved |{" "}
                <a
                  href="https://www.github.com/mimototo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  mimototo
                </a>
              </div>
            </footer>
          </TrpcProvider>
        </AuthProvider>

      </body>
    </html>
  )
}

export default RootLayout

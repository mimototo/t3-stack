import { getSubscription } from "@/actions/subscription";
import Navigation from "@/components/auth/Navigation";
import AuthProvider from "@/components/providers/AuthProvider";
import ToastProvider from "@/components/providers/ToastProvider";
import TrpcProvider from "@/components/providers/TrpcProvider";
import { getAuthSession } from "@/lib/nextauth";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "T3Stack",
  description: "T3Stack",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  // 認証情報取得
  const user = await getAuthSession();

  // サブスクリプション有効チェック
  const { isSubscribed } = await getSubscription({ userId: user?.id });

  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <AuthProvider>
            <TrpcProvider>
              <Navigation user={user} isSubscribed={isSubscribed} />
              <ToastProvider />

              <main className="container mx-auto max-w-screen-md flex-1 px-2">
                {children}
              </main>

              {/* フッター */}
              <footer className="py-5">
                <div className="text-center text-sm">
                  Copyright © All rights reserved |{" "}
                  <a
                    href="https://twitter.com/mimototo"
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
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

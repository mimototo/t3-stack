import { redirect } from "next/navigation"
import { getAuthSession } from "@/lib/nextauth"
import Signin from "@/components/auth/Signin"

// ログインページ
const SigninPage = async () => {
  // 認証情報取得
  const user = await getAuthSession()

  if (user) {
    redirect("/")
  }

  return <Signin />
}

export default SigninPage

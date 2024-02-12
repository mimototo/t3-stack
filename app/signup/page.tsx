import Signup from "@/components/auth/Signup"
import { getAuthSession } from "@/lib/nextauth"
import { redirect } from "next/navigation"

// サインアップページ
const SignupPage = async () => {
  // 認証情報取得
  const user = await getAuthSession()

  if (user) {
    redirect("/")
  }

  return <Signup />
}

export default SignupPage

import Password from "@/components/settings/Password";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

// パスワード変更ページ
const PasswordPage = async () => {
  // 認証情報取得
  const user = await getAuthSession();

  if (!user) {
    redirect("/login");
  }

  return <Password />;
};

export default PasswordPage;

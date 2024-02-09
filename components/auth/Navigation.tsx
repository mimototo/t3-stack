"use client"

import Link from "next/link"

// ナビゲーション
const Navigation = () => {
  return (
    <header className="shadow-lg shadow-gray-100 mb-10">
      <div className="container mx-auto flex max-w-screen-md items-center justify-between px-2 py-3">
        <Link href="/" className="cursor-pointer text-xl font-bold">
          T3Stack
        </Link>

        {/* {user ? ( */}
        {/*   <div className="flex items-center justify-center space-x-3"> */}
        {/*     {!isSubscribed && ( */}
        {/*       <Button asChild variant="premium"> */}
        {/*         <Link href="/payment">有料会員</Link> */}
        {/*       </Button> */}
        {/*     )} */}
        {/**/}
        {/*     <UserNavigation user={user} /> */}
        {/*   </div> */}
        {/* ) : ( */}
        {/*   <div className="flex items-center space-x-1"> */}
        {/*     <Button asChild variant="ghost" className="font-bold"> */}
        {/*       <Link href="/login">ログイン</Link> */}
        {/*     </Button> */}
        {/*     <Button asChild variant="default" className="font-bold"> */}
        {/*       <Link href="/signup">新規登録</Link> */}
        {/*     </Button> */}
        {/*   </div> */}
        {/* )} */}
      </div>
    </header>
  )
}

export default Navigation

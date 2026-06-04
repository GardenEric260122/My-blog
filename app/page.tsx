import Image from "next/image";

export default function Home() { 
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center">

      {/* 内容区 */}
      <div className="flex flex-col items-center justify-center flex-1">

        {/* 图片 */}
        <div className="mb-6">
          <Image
            src="/images/ccsl.jpg"
            alt="avatar"
            width={160}
            height={160}
            className="rounded-full object-cover shadow-lg"
          />
        </div>

        {/* 标题 */}
        <h1 className="text-5xl font-bold">逸風Ventus</h1>

        {/* 副标题 */}
        <p className="mt-4 text-gray-500">
          Welcome to my blog!
        </p>
      </div>
      

      {/* Footer（加在这里） */}
      <footer className="pb-6 text-sm text-gray-400">
        © {new Date().getFullYear()} 逸風Ventus. All rights reserved.
      </footer>

    </main>
  );
}
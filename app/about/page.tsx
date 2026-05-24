export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      {/* 页面标题 */}
      <h1 className="text-4xl font-bold mb-8">关于我</h1>

      {/* 个人介绍部分 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">你好😊</h2>
        <p className="text-lg text-gray-700 mb-4">
          欢迎来到我的个人博客！我是一名业余的计算机爱好者。
        </p>
        <p className="text-lg text-gray-700">
          我在这里会分享一些有意思的事情，请各位同仁多多指教！
        </p>
      </section>

      {/* 技能部分 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">正在学习</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium mb-3">计算机</h3>
            <ul className="text-gray-700 space-y-2">
              <li> Web程序设计</li>
              <li> MySQL数据库程序设计</li>
              <li> Linux系统运维</li>
              <li> 网络工程 </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">语言类</h3>
            <ul className="text-gray-700 space-y-2">
              <li> 汉语</li>
              <li> 英语</li>
              <li> 日语</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 工作经历 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">荣誉与证书</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-medium">全国计算机等级考试</h3>
            <p className="text-gray-600"></p>
            <p className="text-gray-700 mt-2">
            一级网络安全素质教育 | 优秀 | 2026年3月
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-medium">全国计算机等级考试</h3>
            <p className="text-gray-600"></p>
            <p className="text-gray-700 mt-2">
              一级人工智能与大模型基础 | 合格 | 2026年3月
            </p>
          </div>
        </div>
      </section>


      {/* 兴趣与爱好 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">兴趣与爱好</h2>
        <ul className="text-lg text-gray-700 space-y-2">
          <li>🎮 玩游戏</li>
          <li>🍅 追番、看漫画</li>
          <li>🤓学习一些有意思的技术</li>
        </ul>
      </section>

      {/* 联系方式 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">联系我</h2>
        <p className="text-gray-700 mb-4">
          欢迎通过以下方式与我取得联系：
        </p>
        <div className="space-y-2">
          <p>📫 Email: <a href="mailto:jmxw0814@gmail.com" className="text-blue-600 hover:underline">jmxw0814@gmail.com</a>、
           <a href="mailto:zjm220628@qq.com" className="text-blue-600 hover:underline">zjm220628@qq.com</a></p>
          <p>🐙 GitHub: <a href="https://github.com/GardenEric260122" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GardenEric260122</a></p>
         <p>🐧 QQ：<a href="tencent://message/?uin=1718535409" className="text-blue-600 hover:underline">1718535409</a></p>
        </div>
      </section>
    </main>
  );
}

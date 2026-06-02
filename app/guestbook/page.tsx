import Waline from "@/components/Waline";

export default function GuestbookPage() {
  return (
    <main className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">
        留言板
      </h1>

      <p className="mb-8">
        这是一个简单的留言板，使用 Waline 评论系统实现。<br/>  
        欢迎提出网站的改进意见。👋<br/>
        比如操作逻辑，界面设计，功能需求等等。<br/>
        需要注意的是，留言板仅供交流使用，请勿发布任何违法违规内容。<br/>
        本人对留言内容具有完全的管理权限，任何不当言论将被删除。<br/>
        感谢大家的理解和支持！🙏
      </p>

      <Waline path="/guestbook" />
    </main>
  );
}
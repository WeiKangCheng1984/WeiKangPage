import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-32 text-center">
      <h1 className="text-6xl font-bold mb-4 text-text-accent">404</h1>
      <p className="text-xl text-text-secondary mb-8">找不到這個頁面</p>
      <Link
        href="/"
        className="px-6 py-3 bg-accent-blue-DEFAULT hover:bg-accent-blue-light text-white rounded-lg transition-colors inline-block"
      >
        返回首頁
      </Link>
    </div>
  );
}


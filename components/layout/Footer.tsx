export default function Footer() {
  return (
    <footer className="border-t border-border bg-card-DEFAULT">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} 個人網站. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* 社交連結 - 請自行修改 */}
            <a
              href="#"
              className="text-text-secondary hover:text-text-accent transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-text-secondary hover:text-text-accent transition-colors text-sm"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-text-secondary hover:text-text-accent transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


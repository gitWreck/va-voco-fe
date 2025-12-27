import "./globals.css";

export const metadata = {
  title: "N-VA",
  description:
    "Affordable virtual assistant services to help scale your business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-300">
        {/* Header */}
        <header className="bg-[var(--card-bg)] border-b border-gray-200 shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
            <h1 className="font-bold text-xl text-[var(--primary)]">N-VA</h1>
            <nav className="space-x-6">
              <a
                href="#home"
                className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <footer className="bg-[var(--card-bg)] border-t border-gray-200 text-center py-6 mt-10">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} <span className="text-[var(--primary)] font-semibold">N-VA</span>. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}

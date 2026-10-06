import "./globals.css";

export const metadata = {
  title: "Yukta Naik | Portfolio",
  description: "Portfolio of Yukta Naik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <h2>Yukta Naik</h2>

          <div>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
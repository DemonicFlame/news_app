import "./globals.css";
import Header from "./header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}

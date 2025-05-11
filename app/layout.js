export const metadata = {
  title: "Maroof Abdul Aziz | AI Engineer",
  description: "Portfolio of Maroof Abdul Aziz - AI, LLMs, Computer Vision",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">{children}</body>
    </html>
  );
}

export const metadata = {
    title: "Maroof Abdul Aziz",
    description: "AI Portfolio | LLMs, Vision, MLOps",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="bg-white text-gray-800 font-sans">{children}</body>
      </html>
    );
  }
  
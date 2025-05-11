import '../styles/globals.css'

export const metadata = {
  title: 'Maroof Abdul Aziz | Portfolio',
  description: 'AI/LLM Engineer portfolio and project showcase',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-black">{children}</body>
    </html>
  )
}

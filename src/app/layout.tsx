import './globals.css'

export const metadata = {
  title: 'invitera',
  description: 'Dynamic invitation website with some extra DX',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


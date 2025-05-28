import '@/shared/styles'
import Header from '@widgets/Header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

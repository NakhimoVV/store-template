import 'shared/styles'
import '@/shared/config/icons'
import Header from '@widgets/Header'
import Footer from '@widgets/Footer'

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
        <Footer />
      </body>
    </html>
  )
}

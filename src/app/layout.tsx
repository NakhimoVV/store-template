import 'shared/styles'
import '@/shared/config/icons'
import Footer from '@widgets/Footer'
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

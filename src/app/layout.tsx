import 'shared/styles'
import '@/shared/config/icons'
import { fetchCategoriesSSR } from '@shared/api/fetchCategoriesSSR'
import Footer from '@widgets/Footer'
import Header from '@widgets/Header'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const categories = await fetchCategoriesSSR()

  return (
    <html lang="ru">
      <body>
        <Header categories={categories} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

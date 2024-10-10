import { montrealBook } from '@/font'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`antialiased scroll-smooth ${montrealBook.className}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

import './globals.css'
import { Gabarito } from 'next/font/google'
import Navbar from './components/utilities'
import Footer from './components/Footer'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'DXL | Film',
  description: 'Website List Film Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gabarito.className}>
      <Navbar />
        {children}
        <Footer /></body>
    </html>
  )
}

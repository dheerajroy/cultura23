import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'

const inter = Inter({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })

export const metadata = {
  title: 'Cultura 2023',
  description: '"CMRIT Cultura 2023"',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <SideBar />
        {children}
      </body>
    </html>
  )
}

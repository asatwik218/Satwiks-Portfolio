import Nav from '@/components/Nav';
import './globals.css'
import { Inter } from 'next/font/google'
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Satwik Agarwal',
  description: `Satwik Agarwal's portfolio website`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0 box-border w-screen text-white  h-screen">
        <Nav/>
      {children}
      </body>
    </html>
  )
}

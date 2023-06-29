import Nav from '@/components/Nav';
import './globals.css'
import {Poppins, Inter} from 'next/font/google'
import { Toaster } from '@/components/ui/toaster';

const poppins = Poppins({subsets:['latin'],weight:['100','400','700']})
const inter = Inter({subsets:['latin'], variable:'--font-inter'})


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
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className={`m-0 p-0 box-border w-screen text-white `}>
        <Nav/>
      {children}
      <Toaster/>
      </body>
    </html>
  )
}

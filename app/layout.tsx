import Nav from '@/components/Nav';
import './globals.css'
import {Poppins, Inter, Roboto_Mono, Dawning_of_a_New_Day} from 'next/font/google'
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/Footer';

const poppins = Poppins({subsets:['latin'],weight:['100','400','700'],variable:'--font-poppins'})
const inter = Inter({subsets:['latin'], variable:'--font-inter'})
const roboto_mono = Roboto_Mono({subsets:['latin'], variable:'--font-roboto-mono'})
const dawningOfNewDay = Dawning_of_a_New_Day({subsets:['latin'], weight:'400',variable:'--font-dawning'})


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
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${roboto_mono.variable} ${dawningOfNewDay.variable} font-sans`}>
      <body className={`m-0 p-0 box-border w-screen bg-primaryLight text-textLight`}>
        <Nav/>
      {children}
      <Toaster/>
      </body>
    </html>
  )
}

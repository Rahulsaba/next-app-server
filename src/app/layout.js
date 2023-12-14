
import { Metadata } from 'next';
import Head from "next/head";
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/nav'


const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      
      <body className={ inter.className}>
        <Nav />
        {/* flex items-center justify-center */}
        <div className=' p-24'>
          {children}
        </div>
      </body>
    </html>
  )
}

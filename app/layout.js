import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Inter, VT323, Electrolize, Share_Tech_Mono } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'

// Google Fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const vt323 = VT323({ subsets: ['latin'], variable: '--font-vt323', display: 'swap', weight: '400' })
const electrolize = Electrolize({ subsets: ['latin'], variable: '--font-electrolize', display: 'swap', weight: '400' })
const share_tech_mono = Share_Tech_Mono({ subsets: ['latin'], variable: '--font-share-tech-mono', display: 'swap', weight: '400' })

export const metadata = {
  title: 'João Mororó - Full Stack Developer',
  description: 'Meu portfólio pessoal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${vt323.variable} ${electrolize.variable} ${share_tech_mono.variable}`}>
        <Header />
        {children}
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </body>
    </html>
  )
}

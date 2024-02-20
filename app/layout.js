import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LocalFont from 'next/font/local'
import SoundsProvider from '@/components/ArwesComponents/SoundsProvider'
import MobileMenu from '@/components/MobileMenu'
import ScrollToTop from '@/components/ScrollToTop'
import { VT323, Electrolize, Share_Tech_Mono } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'

// Fonts
const vt323 = VT323({ subsets: ['latin'], variable: '--font-vt323', display: 'swap', weight: '400' })
const electrolize = Electrolize({ subsets: ['latin'], variable: '--font-electrolize', display: 'swap', weight: '400' })
const share_tech_mono = Share_Tech_Mono({ subsets: ['latin'], variable: '--font-share-tech-mono', display: 'swap', weight: '400' })
const cyberpunk = LocalFont({ src: '../fonts/Cyberpunk-Regular.ttf', variable: '--font-cyberpunk', display: 'swap' })

export const metadata = {
  title: 'João Mororó - FullStack Developer',
  description: 'Meu portfólio pessoal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className={`${vt323.variable} ${electrolize.className} ${share_tech_mono.variable} ${cyberpunk.variable} text-text_color bg-background`}>
        <SoundsProvider />
        <ScrollToTop />
        <MobileMenu />
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

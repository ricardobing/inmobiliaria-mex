import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Bosques de Cholul - El Nuevo Lujo Residencial',
  description: 'Complejo residencial desarrollado por GRUPO PROVI. El privilegio de vivir en el mejor entorno.',
  keywords: 'residencial, casas, venta, Cholul, Mérida, Yucatán, lujo, privadas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

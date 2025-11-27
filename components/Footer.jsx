import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-dark to-primary py-12 lg:py-16 border-t-2 border-primary-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4L8 12L20 20L32 12L20 4Z" fill="white" fillOpacity="0.9"/>
                <path d="M8 20L20 28L32 20L20 12L8 20Z" fill="white" fillOpacity="0.7"/>
                <path d="M20 28L8 36V20L20 28Z" fill="white" fillOpacity="0.5"/>
                <path d="M32 20V36L20 28L32 20Z" fill="white" fillOpacity="0.5"/>
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-xl tracking-wide">BOSQUES</span>
              <span className="text-white text-xs tracking-[0.2em]">DE CHOLUL</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-8">
            <Link href="#inicio" className="text-white hover:text-white/70 transition-colors font-medium">
              Inicio
            </Link>
            <Link href="#nosotros" className="text-white hover:text-white/70 transition-colors font-medium">
              Nosotros
            </Link>
            <Link href="#modelos" className="text-white hover:text-white/70 transition-colors font-medium">
              Modelos
            </Link>
            <Link href="#galeria" className="text-white hover:text-white/70 transition-colors font-medium">
              Galería
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 mb-8">
            <a 
              href="mailto:contacto@bosquesdecholul.com" 
              className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com/bosquesdecholul" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
                <circle cx="18" cy="6" r="1" fill="white"/>
              </svg>
            </a>
            <a 
              href="https://wa.me/529999999999" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="WhatsApp"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 13.69 2.47 15.27 3.29 16.62L2 22L7.55 20.74C8.85 21.5 10.38 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 10.5C9 12 10 13.5 12 15C13.5 13.5 15 12.5 16 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a 
              href="https://maps.google.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Ubicación"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="white" strokeWidth="2"/>
                <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-white/20 pt-6 w-full">
            <p className="text-white/80 text-sm mb-2">
              Copyright © 2024 Bosques De Cholul
            </p>
            <p className="text-white/60 text-xs">
              Todos los derechos reservados, desarrollado por <span className="font-semibold text-white/80">3ROOMS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

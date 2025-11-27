'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-4 py-4 lg:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4L8 12L20 20L32 12L20 4Z" fill="white" fillOpacity="0.9"/>
                <path d="M8 20L20 28L32 20L20 12L8 20Z" fill="white" fillOpacity="0.7"/>
                <path d="M20 28L8 36V20L20 28Z" fill="white" fillOpacity="0.5"/>
                <path d="M32 20V36L20 28L32 20Z" fill="white" fillOpacity="0.5"/>
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-lg lg:text-xl tracking-wide">BOSQUES</span>
              <span className="text-white text-[10px] lg:text-xs tracking-[0.2em]">DE CHOLUL</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="#inicio" className="text-white hover:text-primary transition-colors font-medium">
              Inicio
            </Link>
            <Link href="#nosotros" className="text-white hover:text-primary transition-colors font-medium">
              Nosotros
            </Link>
            <Link href="#modelos" className="text-white hover:text-primary transition-colors font-medium">
              Modelos
            </Link>
            <Link href="#galeria" className="text-white hover:text-primary transition-colors font-medium">
              Galería
            </Link>
            <Link 
              href="#contacto" 
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 flex flex-col gap-4 border-t border-white/10 pt-6">
            <Link 
              href="#inicio" 
              className="text-white hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              href="#nosotros" 
              className="text-white hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link 
              href="#modelos" 
              className="text-white hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Modelos
            </Link>
            <Link 
              href="#galeria" 
              className="text-white hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Galería
            </Link>
            <Link 
              href="#contacto" 
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-semibold text-center transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

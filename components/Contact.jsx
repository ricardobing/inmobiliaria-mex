'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    motivo: '',
    modelo: '',
    presupuesto: '',
    tiempoCompra: '',
    tipoCredito: '',
    estado: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Aquí se implementaría el envío real del formulario
    alert('¡Gracias por tu interés! Te contactaremos pronto.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contacto" className="bg-dark py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-white text-center mb-4">
          Contacto
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-16 rounded-full" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left - Map & Brochure */}
          <div className="bg-gradient-to-br from-primary-dark to-primary p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Conoce nuestras oficinas
            </h3>
            
            {/* Map Placeholder */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl h-64 mb-8 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8936847494576!2d-89.62472!3d21.02389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAxJzI2LjAiTiA4OcKwMzcnMjkuMCJX!5e0!3m2!1ses!2smx!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-4">
                Descarga nuestro brochure
              </h4>
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                Descargar
              </button>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-gradient-to-br from-primary-dark to-primary p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                required
              />
              
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                required
              />
              
              <input
                type="email"
                name="correo"
                placeholder="Correo"
                value={formData.correo}
                onChange={handleChange}
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="motivo"
                  placeholder="Motivo"
                  value={formData.motivo}
                  onChange={handleChange}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                
                <input
                  type="text"
                  name="modelo"
                  placeholder="Modelo"
                  value={formData.modelo}
                  onChange={handleChange}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="presupuesto"
                  placeholder="Presupuesto"
                  value={formData.presupuesto}
                  onChange={handleChange}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                
                <input
                  type="text"
                  name="tiempoCompra"
                  placeholder="Tiempo de compra"
                  value={formData.tiempoCompra}
                  onChange={handleChange}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="tipoCredito"
                  placeholder="Tipo de crédito"
                  value={formData.tipoCredito}
                  onChange={handleChange}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                
                <input
                  type="text"
                  name="estado"
                  placeholder="Estado"
                  value={formData.estado}
                  onChange={handleChange}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white hover:bg-white/90 text-primary px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl mt-6"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

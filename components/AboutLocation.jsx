export default function AboutLocation() {
  return (
    <section id="nosotros" className="bg-dark py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              <span className="green-underline">Exclusividad y</span><br />
              Ubicación Privilegiada
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Bosques de Cholul es un complejo residencial desarrollado por GRUPO PROVI lleno de vida al natural y en comunidad.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Ubicado en Cholul, dentro de uno de los mejores corredores de privadas residenciales del norte de Mérida.
            </p>
            <a 
              href="#contacto"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Agendar
            </a>
          </div>

          {/* Right Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div 
                className="h-64 bg-cover bg-center rounded-2xl shadow-xl"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80')"
                }}
              />
              <div 
                className="h-48 bg-cover bg-center rounded-2xl shadow-xl"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80')"
                }}
              />
            </div>
            <div className="space-y-4 pt-8">
              <div 
                className="h-48 bg-cover bg-center rounded-2xl shadow-xl"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80')"
                }}
              />
              <div 
                className="h-64 bg-cover bg-center rounded-2xl shadow-xl border-4 border-primary"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80')"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

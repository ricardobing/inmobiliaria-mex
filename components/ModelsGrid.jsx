const models = [
  {
    name: "Amelia plus",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    description: "El modelo Amelia cuenta con 2 amplias recámaras con baño propio. La principal cuenta con closet vestidor, área de lavado, sala, comedor, cocina amplia y estacionamiento para 2 autos."
  },
  {
    name: "Bianca plus",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    description: "El modelo Amelia cuenta con 2 amplias recámaras con baño propio. La principal cuenta con closet vestidor, área de lavado, sala, comedor, cocina amplia y estacionamiento para 2 autos."
  },
  {
    name: "Davalia plus",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    description: "Ofrece comodidad y funcionalidad con 3 recámaras (una en la planta baja). 3.5 baños, terraza techada, área de lavado techada y estacionamiento. Diseñado con un estilo moderno perfecta para quienes buscan amplios superiores."
  }
]

export default function ModelsGrid() {
  return (
    <section id="modelos" className="bg-dark-900 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-white text-center mb-4">
          Modelos disponibles
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-16 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {models.map((model, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-primary-dark to-primary rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <div 
                  className="h-56 bg-cover bg-center rounded-2xl mb-6 shadow-lg"
                  style={{ backgroundImage: `url('${model.image}')` }}
                />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {model.name}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  {model.description}
                </p>
                <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-between group-hover:bg-white group-hover:text-primary">
                  <span>Más información</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.2"/>
                    <path d="M10 8L14 12L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

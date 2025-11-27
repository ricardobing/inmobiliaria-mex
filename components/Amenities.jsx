const amenities = [
  {
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 14V42M14 28H42M20 20L36 36M36 20L20 36" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Gimnasio al aire libre",
    description: "Espacios pensados para el ejercicio de toda la familia"
  },
  {
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="20" r="8" stroke="white" strokeWidth="2.5"/>
        <path d="M14 42C14 34 20 28 28 28C36 28 42 34 42 42" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 48L24 36L28 48L32 36L36 48" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Parque central",
    description: "Un espacio pensado para la tranquilidad y comodidad de toda la familia"
  },
  {
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 42L20 28L28 38L36 28L44 42" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="18" r="4" fill="white"/>
        <circle cx="36" cy="18" r="4" fill="white"/>
      </svg>
    ),
    title: "Áreas verdes",
    description: "Lo más importante es vivir en un lugar lleno de tranquilidad y paz."
  },
  {
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 28L22 18L30 26L38 18L46 28" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 38L22 28L30 36L38 28L46 38" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Áreas verdes",
    description: "Ubicada en una de las mejores zonas para vivir, con plusvalía creciente día a día."
  }
]

export default function Amenities() {
  return (
    <section className="bg-dark py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-white text-center mb-4">
          Elegancia y Funcionalidad
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-16 rounded-full" />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Amenities */}
          <div className="lg:col-span-3 space-y-6">
            {amenities.slice(0, 2).map((amenity, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-primary-dark to-primary p-6 rounded-2xl border-2 border-primary/30 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">
                  {amenity.title}
                </h3>
                <p className="text-white/90 text-sm text-center leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Video/Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div 
                className="h-96 lg:h-[500px] bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80')"
                }}
              />
              <div className="absolute inset-0 bg-dark/40 flex items-center justify-center">
                <button className="w-20 h-20 bg-primary hover:bg-primary-dark rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl group-hover:w-24 group-hover:h-24">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M10 8L24 16L10 24V8Z" fill="white"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Amenities */}
          <div className="lg:col-span-3 space-y-6">
            {amenities.slice(2, 4).map((amenity, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-primary-dark to-primary p-6 rounded-2xl border-2 border-primary/30 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">
                  {amenity.title}
                </h3>
                <p className="text-white/90 text-sm text-center leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

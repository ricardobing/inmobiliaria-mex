const features = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L6 14V34L24 44L42 34V14L24 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="6" stroke="white" strokeWidth="2"/>
      </svg>
    ),
    title: "Exclusivo y Seguro",
    description: "Vigilancia 24/7 en un complejo privado y cerrado. Disfrute de la tranquilidad y seguridad que solo una comunidad exclusiva puede ofrecer."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="12" width="36" height="28" rx="2" stroke="white" strokeWidth="2"/>
        <path d="M6 20H42" stroke="white" strokeWidth="2"/>
        <path d="M16 28H32M16 32H28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Diseño y Personalidad",
    description: "Casas diseñadas con un concepto moderno y acabados de lujo. Cada residencia es una pieza única con estilo y vida superior."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" stroke="white" strokeWidth="2"/>
        <circle cx="24" cy="24" r="3" fill="white"/>
        <path d="M24 6V18M24 30V42M6 24H18M30 24H42" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Conexión Estratégica",
    description: "Vive en el punto más deseado del Norte de Mérida. Acceso rápido a las mejores plazas, hospitales y universidades. Sin sacrificar la calma."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 24L20 16L28 24L36 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 32L20 24L28 32L36 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36 12V38" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Alta Plusvalía",
    description: "Adquiere una propiedad en una zona de constante crecimiento. Asegura un patrimonio de alto valor en el sector residencial de lujo."
  }
]

export default function FeaturesCards() {
  return (
    <section className="bg-dark-900 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-3xl hover:scale-105 transition-transform duration-300 shadow-2xl"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-white/90 text-sm lg:text-base leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

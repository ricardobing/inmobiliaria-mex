const galleryImages = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
]

export default function Gallery() {
  return (
    <section id="galeria" className="bg-dark-900 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-white text-center mb-4">
          Galería
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-16 rounded-full" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="aspect-square bg-cover bg-center rounded-xl hover:scale-105 transition-transform duration-300 shadow-xl cursor-pointer overflow-hidden group"
              style={{ backgroundImage: `url('${image}')` }}
            >
              <div className="w-full h-full bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

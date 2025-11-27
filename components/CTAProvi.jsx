export default function CTAProvi() {
  return (
    <section className="bg-dark-900 py-16 lg:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
          Más de 4100 familias ya<br />
          eligieron Grupo provi
        </h2>
        
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-4">
            {/* PROVI Logo */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 10H30V30H10V10Z" stroke="white" strokeWidth="2"/>
                  <path d="M15 20L20 15L25 20L20 25L15 20Z" fill="white"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-white tracking-wider">PROVI</div>
                <div className="text-sm text-white/80">construye tu hogar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

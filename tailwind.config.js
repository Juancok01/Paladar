// tailwind.config.js
module.exports = {
  // CONFIGURACIÓN DE CONTENIDO: LE DICE A TAILWIND DÓNDE BUSCAR TUS CLASES
  content: [
    './index.html', // Lee las clases de tu archivo principal
    // Si tienes otros archivos HTML, debes añadirlos aquí también.
  ],
  
  // CONFIGURACIÓN DE TEMA: Aquí puedes añadir colores, fuentes, etc.
  theme: {
    extend: {
      // Puedes poner aquí los colores hexadecimales de tu marca (ej. Paladar)
      colors: {
        'paladar-yellow': '#f9ce10',
        'paladar-red': '#dc2626',
      },
      // Y aquí las fuentes personalizadas que quieras usar
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
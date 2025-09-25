// lib/room-data.ts
export const roomDetailsData = [
  {
    slug: "habitacion-individual",
    type: "Habitación Individual",
    category: "habitaciones",
    description:
      "Una habitación acogedora y funcional, perfecta para viajeros solitarios que buscan comodidad y tranquilidad. Equipada con todo lo necesario para una estancia placentera.",
    details: {
      capacity: "1-2 personas",
      beds: "1 o 2 camas individuales ",
      amenities: [
        "Baño privado ",
        "Ducha agua caliente",
        "Aire acondicionado",
        "TV de pantalla plana",
        "Wi-Fi gratuito de alta velocidad",
        "Escritorio",
        "Armario",
        "Artículos de aseo gratuitos",
      ],
      view: "Vista a la ciudad",
      price: "$15/noche",
    },
    images: 
    [
      "/matrimonial_1.jpg", 
      "/simple1.jpg", 
      "/simple2.jpg",
      "/simple3.jpg", 
      "/simple4.jpg", 
      "/baño1.jpg"
    ],
    
  },
  {
    slug: "habitacion-doble",
    type: "Habitación Doble",
    category: "habitaciones",
    description:
      "Espaciosa y confortable, ideal para amigos o colegas. Dispone de dos camas individuales y un ambiente relajante para descansar después de un día de exploración.",
    details: {
      capacity: "2-4 personas",
      beds: "2 o 3 camas individuales",
      amenities: [
        "Baño privado",
        "Aire acondicionado",
        "TV",
        "Wi-Fi gratuito",
        "Zona de descanso",
        "Minibar",
        "Artículos de aseo gratuitos",
      ],
      view: "Vista a la ciudad",
      price: "$15/noche",
    },
    images: 
    [
      "/doble1.jpg", 
      "/doble2.jpg",
      "/doble3.jpg",
      "/doble4.jpg", 
      "/doble5.jpg",
      "/doble6.jpg"
      ],
   
  },
  {
    slug: "habitacion-matrimonial",
    type: "Habitación Matrimonial",
    category: "habitaciones",
    description:
      "Diseñada para parejas, con una cómoda cama king-size y un ambiente romántico. Disfruta de la privacidad y el confort en este espacio íntimo.",
    details: {
      capacity: "2 personas",
      beds: "1 cama king-size",
      amenities: [
        "Baño privado con bañera",
        "Aire acondicionado",
        "TV inteligente",
        "Wi-Fi gratuito",
        "Balcón privado",
        "Cafetera/Tetera",
        "Artículos de aseo gratuitos",
      ],
      view: "Vista a la ciudad",
      price: "$15/noche",
    },
    images: 
    [
      "/matrimonial_3.jpg",
      "/matrimonial_1.jpg", 
      "/matrimonial_2.jpg",
      "/depa3.jpg",
      "/cafetera2.jpg", 
      "/private-bathroom.png"
    ],
    
  },
  {
    slug: "departamento-1",
    type: "Departamento 1",
    category: "departamentos",
    description:
      "Un espacio moderno y funcional, perfecto para estancias prolongadas. Cuenta con cocina equipada, sala de estar y todas las comodidades de un hogar.",
    details: {
      capacity: "Hasta 2 personas",
      beds: "1 cama doble ",
      amenities: [
        "Cocina completa (nevera, microondas, estufa)",
        "Sala de estar con sofá",
        "Baño privado",
        "Aire acondicionado",
        "Wi-Fi gratuito",
        "Comedor",
        "Utensilios de cocina",
        "Artículos de aseo gratuitos",
      ],
     
      view: "Esta en la Ciudad ",
      price: "$40/noche",
    },
    images:
    [
      "/cocina.jpg",
      "/dep2.jpg", 
      "/piscina.jpg",
      "/sala2.jpg",
      "/cocina5.jpg", 
      "/comedor.jpg", 
      
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=example",
  },
  {
    slug: "departamento-2",
    type: "Departamento 2",
    category: "departamentos",
    description:
      "Amplio y luminoso, ideal para familias pequeñas. Disfruta de todas las comodidades de un hogar con un balcón privado y vistas espectaculares.",
    details: {
      capacity: "Hasta 2-4 personas",
      beds: "2 camas dobles , 1 sofá cama ",
      amenities: [
        "Cocina equipada",
        "Sala de estar amplia",
        "Balcón privado",
        "Baño privado",
        "Wi-Fi gratuito",
        "Lavadora",
        "TV de pantalla plana",
        "Jacuzzi",
        "Zona de comedor",
      ],
      
      view: "Ciudad",
      price: "$70/noche",
    },
    images: 
    [
      "/depa3.jpg", 
      "/descanso1.jpg",
      "/depa2.jpg",
      "/jacuzzi.jpg", 
      "/cocina6.jpg", 
      "/sala5.jpg"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=example",
  },
  {
    slug: "casa-de-renta",
    type: "Casa de Renta",
    category: "departamentos",
    description:
      "Una casa completa para tu privacidad, ideal para grupos grandes o familias. Dispone de múltiples habitaciones, áreas comunes y un hermoso jardín privado.",
    details: {
      capacity: "Hasta 8 personas",
      beds: "2 camas dobles , 3 camas individuales ",
      amenities: [
        "Cocina completa y amplia",
        "Múltiples baños",
        "Jardín privado",
        "Parrilla",
        "Wi-Fi gratuito",
        "Lavadora y secadora",
        "TV por cable",
        "Sala de juegos",
        "Estacionamiento privado",
        "Servicio de limpieza diario",
      ],
      
      view: "Vista a la Naturaleza",
      price: "$220/noche",
    },
    images: [
      "/casa_5.jpg",
      "/casa1.jpg",
      "/casa_4.jpg",
      "/casa_3.jpg",
      "/cocina_Casa.jpg",
      "/casa_cama.jpg",
      "/casa_7.jpg",
      "/casa9.jpg",
      "/baño4.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=example",
  },
]

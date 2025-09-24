export type Property = {
  id: string
  slug: string
  title: string
  city: string
  neighborhood: string
  address: string
  bedrooms: number
  bathrooms: number
  parking: number
  areaMin: number
  areaMax: number
  priceFrom: number
  soldPercent: number
  featured?: boolean
  images: string[]
  plans: { label: string, image: string, pdf?: string }[]
  amenities: string[]
  updatedAt: string // ISO
}

export const PROPERTIES: Property[] = [{
  id: "vlg-201",
  slug: "vivence-lagoa-2q",
  title: "Vivence Lagoa – 2 quartos",
  city: "Belo Horizonte",
  neighborhood: "Pampulha",
  address: "Rua Guapiara, 123 – Pampulha, BH",
  bedrooms: 2,
  bathrooms: 2,
  parking: 1,
  areaMin: 62,
  areaMax: 78,
  priceFrom: 499900,
  soldPercent: 72,
  featured: true,
  images: ["/images/sample1.jpg","/images/sample2.jpg","/images/sample3.jpg"],
  plans: [{ label: "Planta 2Q", image: "/images/plan1.jpg", pdf: "#" }],
  amenities: ["Piscina", "Coworking", "Pet place", "Playground"],
  updatedAt: "2025-09-01"
},{
  id: "vlg-302",
  slug: "vivence-lagoa-3q",
  title: "Vivence Lagoa – 3 quartos (suíte)",
  city: "Belo Horizonte",
  neighborhood: "Pampulha",
  address: "Rua Guapiara, 123 – Pampulha, BH",
  bedrooms: 3,
  bathrooms: 2,
  parking: 2,
  areaMin: 78,
  areaMax: 95,
  priceFrom: 749900,
  soldPercent: 83,
  images: ["/images/sample4.jpg","/images/sample2.jpg"],
  plans: [{ label: "Planta 3Q", image: "/images/plan2.jpg" }],
  amenities: ["Piscina aquecida", "Salão de festas", "Brinquedoteca"],
  updatedAt: "2025-09-10"
},{
  id: "ctr-104",
  slug: "centro-studio",
  title: "Centro – Studio inteligente",
  city: "Belo Horizonte",
  neighborhood: "Centro",
  address: "Av. Amazonas, 100 – Centro, BH",
  bedrooms: 1,
  bathrooms: 1,
  parking: 0,
  areaMin: 28,
  areaMax: 32,
  priceFrom: 349900,
  soldPercent: 55,
  images: ["/images/sample2.jpg"],
  plans: [{ label: "Planta Studio", image: "/images/plan3.jpg" }],
  amenities: ["Lavanderia compartilhada", "Bicicletário"],
  updatedAt: "2025-08-20"
},{
  id: "mtr-208",
  slug: "metropolitana-2q",
  title: "Metropolitana – 2 quartos",
  city: "Contagem",
  neighborhood: "Centro",
  address: "Rua das Palmeiras, 50 – Contagem, MG",
  bedrooms: 2,
  bathrooms: 2,
  parking: 1,
  areaMin: 60,
  areaMax: 70,
  priceFrom: 429900,
  soldPercent: 68,
  images: ["/images/sample3.jpg"],
  plans: [{ label: "Planta 2Q", image: "/images/plan1.jpg" }],
  amenities: ["Playground", "Bicicletário", "Espaço gourmet"],
  updatedAt: "2025-09-12"
}]

export function citiesFromData() {
  return Array.from(new Set(PROPERTIES.map(p => p.city)))
}

// ============================================
// KARYA TANI — Product Data
// ============================================

export const CATEGORIES = [
  { id: 'all', label: 'Semua', emoji: '🌿', color: '#4f7f5c' },
  { id: 'singkong', label: 'Singkong', emoji: '🌾', color: '#8B6914' },
  { id: 'pangsit', label: 'Pangsit', emoji: '🥟', color: '#C44B2B' },
  { id: 'sistik', label: 'Sistik', emoji: '🥢', color: '#6B3F8C' },
  { id: 'pisang', label: 'Pisang', emoji: '🍌', color: '#C78D00' },
  { id: 'talas', label: 'Talas', emoji: '🟣', color: '#7B4EA0' },
  { id: 'ubi', label: 'Ubi', emoji: '🟠', color: '#C45C1A' },
];

// Utility to generate gradient placeholder colors per category
const gradientMap = {
  singkong: ['#F5E6C8', '#D4A853'],
  pangsit: ['#FFE0D9', '#E8654A'],
  sistik: ['#EDD9FF', '#9B59B6'],
  pisang: ['#FFF3C4', '#F0C020'],
  talas: ['#E8D5FF', '#8B5CF6'],
  ubi: ['#FFE0C4', '#E0783C'],
};

const categoryLabel = {
  singkong: 'Singkong',
  pangsit: 'Pangsit',
  sistik: 'Sistik',
  pisang: 'Pisang',
  talas: 'Talas',
  ubi: 'Ubi',
};

function makeProduct(
  id,
  category,
  name,
  description,
  price,
  weight,
  image,
  featured = false
) {
  return {
    id,
    category,
    categoryLabel: categoryLabel[category],
    name,
    description,
    price,
    weight,
    image,
    featured,
    gradient: gradientMap[category],
    emoji: CATEGORIES.find(c => c.id === category)?.emoji || '🌿',
  };
}

export const PRODUCTS = [
  // Singkong
  makeProduct(
  'sg1',
  'singkong',
  'Singkong Original',
  'Singkong renyah dengan rasa gurih alami, cocok untuk semua kalangan.',
  15000,
  '335 gram',
  'singkong-original.webp',
  true
),

makeProduct(
  'sg2',
  'singkong',
  'Singkong Balado',
  'Rasa balado pedas manis yang jadi favorit pelanggan.',
  15000,
  '335 gram',
  'singkong-balado.webp'
),

makeProduct(
  'sg3',
  'singkong',
  'Singkong Jagung Manis',
  'Perpaduan gurih singkong dan manis jagung yang unik.',
  15000,
  '335 gram',
  'singkong-jagung-manis.webp'
),

makeProduct(
  'sg5',
  'singkong',
  'Singkong Ekstra Pedas',
  'Level pedas maksimal untuk pecinta pedas sejati.',
  15000,
  '335 gram',
  'singkong-ekstra-pedas.webp'
),

makeProduct(
  'sg6',
  'singkong',
  'Singkong Misda (Pre-Order)',
  'Rasa khusus, wajib konsultasi dulu sebelum order.',
  15000,
  '335 gram',
  'singkong-misda.webp'
),

// Pangsit
// Pangsit
makeProduct(
  'pg1',
  'pangsit',
  'Pangsit Bawang',
  'Renyah dengan aroma bawang yang kuat dan gurih.',
  15000,
  '335 gram',
  'pangsit-bawang.webp',
  true
),

makeProduct(
  'pg2',
  'pangsit',
  'Pangsit Ubi Ungu',
  'Warna cantik dan rasa unik dari ubi ungu alami.',
  15000,
  '335 gram',
  'pangsit-ubiungu.webp'
),

makeProduct(
  'pg3',
  'pangsit',
  'Pangsit Bayam',
  'Renyah sehat dengan campuran bayam.',
  15000,
  '335 gram',
  'pangsit-bayam.webp'
),

makeProduct(
  'pg4',
  'pangsit',
  'Pangsit Wortel',
  'Rasa gurih dengan sentuhan wortel alami.',
  15000,
  '335 gram',
  'pangsit-wortel.webp'
),

makeProduct(
  'pg5',
  'pangsit',
  'Pangsit Labu',
  'Perpaduan labu yang lembut dan gurih.',
  15000,
  '335 gram',
  'pangsit-labu.webp'
),

makeProduct(
  'pg6',
  'pangsit',
  'Pangsit Buah Naga',
  'Warna cantik dan rasa unik dari buah naga alami.',
  15000,
  '335 gram',
  'pangsit-buahnaga.webp'
),

// Sistik
// Sistik
makeProduct(
  'st1',
  'sistik',
  'Sistik Bawang',
  'Sistik renyah dengan rasa bawang favorit.',
  15000,
  '335 gram',
  'sistik-bawang.webp',
  true
),

makeProduct(
  'st2',
  'sistik',
  'Sistik Ubi Ungu',
  'Cemilan unik dengan warna dan rasa khas.',
  15000,
  '335 gram',
  'sistik-ubiungu.webp'
),

makeProduct(
  'st3',
  'sistik',
  'Sistik Bayam',
  'Renyah sehat dengan campuran bayam.',
  15000,
  '335 gram',
  'sistik-bayam.webp'
),

makeProduct(
  'st4',
  'sistik',
  'Sistik Wortel',
  'Rasa gurih dengan sentuhan wortel alami.',
  15000,
  '335 gram',
  'sistik-wortel.webp'
),

makeProduct(
  'st5',
  'sistik',
  'Sistik Labu',
  'Perpaduan labu yang lembut dan gurih.',
  15000,
  '335 gram',
  'sistik-labu.webp'
),

makeProduct(
  'st6',
  'sistik',
  'Sistik Buah Naga',
  'Warna cantik dan rasa unik dari buah naga alami.',
  15000,
  '335 gram',
  'sistik-buahnaga.webp'
),

// Pisang
// Pisang
makeProduct(
  'ps1',
  'pisang',
  'Pisang Original Panjang',
  'Pisang renyah potongan panjang, favorit pelanggan.',
  25000,
  '455 gram',
  'pisang-panjang.webp',
  true
),

makeProduct(
  'ps2',
  'pisang',
  'Pisang Original Pendek',
  'Potongan pendek lebih praktis dan tetap renyah.',
  25000,
  '455 gram',
  'pisang-pendek.webp'
),

makeProduct(
  'ps3',
  'pisang',
  'Pisang Manis',
  'Manis dengan tekstur renyah.',
  25000,
  '455 gram',
  'pisang-manis.webp'
),

makeProduct(
  'ps4',
  'pisang',
  'Pisang Manis Gula Merah',
  'Manis dengan tekstur renyah.',
  25000,
  '455 gram',
  'pisang-manisgulamerah.webp'
),

makeProduct(
  'ps5',
  'pisang',
  'Pisang Matang',
  'Keripik Pisang Matang rasa asam manis.',
  25000,
  '455 gram',
  'pisang-matang.webp'
),

makeProduct(
  'ps6',
  'pisang',
  'Pisang Sale',
  'Keripik Pisang Sale rasa asam manis.',
  25000,
  '455 gram',
  'pisang-sale.webp'
),
// Talas
// Talas
makeProduct(
  'tl1',
  'talas',
  'Talas Original (Kemasan Besar)',
  'Talas gurih 465 gram cocok untuk keluarga.',
  25000,
  '420 gram',
  'talas-besar.webp'
),

makeProduct(
  'tl2',
  'talas',
  'Talas Original (Kemasan Kecil)',
  'Ukuran 265 gram, best seller dan praktis.',
  15000,
  '250 gram',
  'talas-kecil.webp',
  true
),

makeProduct(
  'tl3',
  'talas',
  'Talas Balado',
  'Rasa balado pedas manis yang jadi favorit.',
  25000,
  '420 gram',
  'talas-balado.webp'
),

// Ubi
makeProduct(
  'ub1',
  'ubi',
  'Ubi Original',
  'Ubi renyah dengan rasa gurih.',
  15000,
  '300 gram',
  'ubi-original.webp',
  true
),

makeProduct(
  'ub2',
  'ubi',
  'Ubi Ungu',
  'Ubi renyah dengan rasa gurih.',
  15000,
  '300 gram',
  'ubi-ungu.webp',
  true
),

];

export const FEATURED_PRODUCTS = PRODUCTS.filter(p => p.featured);

export const formatPrice = (price) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);

export const WHATSAPP_NUMBER = '6285294964110';
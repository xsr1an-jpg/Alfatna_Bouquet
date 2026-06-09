import { WHATSAPP_NUMBER, formatPrice } from '../data/products';

export function buildWhatsAppMessage({ name, phone, address, items, totalPrice }) {
  const lines = [
    '🌿 *PESANAN KARYA TANI*',
    '━━━━━━━━━━━━━━━━━━━━',
    '',
    '👤 *Data Pemesan*',
    `Nama     : ${name}`,
    `No. HP   : ${phone}`,
    `Alamat   : ${address}`,
    '',
    '🛒 *Daftar Pesanan*',
    '━━━━━━━━━━━━━━━━━━━━',
  ];

  items.forEach((item, i) => {
    lines.push(`${i + 1}. ${item.name}`);
    lines.push(`   ${item.qty} × ${formatPrice(item.price)} = ${formatPrice(item.price * item.qty)}`);
  });

  lines.push('━━━━━━━━━━━━━━━━━━━━');
  lines.push(`💰 *Total : ${formatPrice(totalPrice)}*`);
  lines.push('');
  lines.push('_Terima kasih telah memesan di Karya Tani!_ 🙏');

  const message = lines.join('\n');
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${6285294964110}?text=${encoded}`;
}

export function openWhatsApp() {
  const url = `https://wa.me/${6285294964110}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

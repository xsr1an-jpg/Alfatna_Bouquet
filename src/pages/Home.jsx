import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import { BOUQUETS } from "../data/bouquets";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const WA_NUMBER = "6282216137505"; // Ganti nomor kakak

  const handleWhatsApp = (produk) => {
    const pesan = `🌷 *Halo Alfatna Bouquet, saya tertarik dengan bouquet berikut:*

*Nama*
${produk.nama}

*Deskripsi*
${produk.deskripsi}

*Estimasi Harga*
${produk.harga}

*Foto Produk*
${window.location.origin}${produk.gambar}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Saya tertarik dengan desain bouquet ini dan ingin melakukan konsultasi mengenai detail pemesanan serta kemungkinan penyesuaian desain.`;

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
        pesan
      )}`,
      "_blank"
    );
  };

  const banners = [
    { image: "/promo1.webp" },
  ];

  return (
    <>
      <Navbar />

      <main className="page-wrapper">
        <div className="container">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            loop
            onSlideChange={(swiper) =>
              setActiveSlide(swiper.realIndex)
            }
            className="hero-slider"
          >
            {banners.map((banner, index) => (
              <SwiperSlide key={index}>
                <div className="hero-slide">
                  <img
                    src={banner.image}
                    alt={`Banner ${index + 1}`}
                    className="hero-slide__image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>


          <div className="product-grid">
            {BOUQUETS.map((produk) => (
              <div
                className="product-card"
                key={produk.id}
              >
                <img
                  src={produk.gambar}
                  alt={produk.nama}
                  className="product-image"
                />

                <h3>{produk.nama}</h3>

                <p>{produk.deskripsi}</p>

                <h4>{produk.harga}</h4>

                <button
                  className="btn btn-primary"
                  onClick={() =>
                    handleWhatsApp(produk)
                  }
                >
                  Tanya Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
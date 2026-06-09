import { Link } from 'react-router-dom';
import { openWhatsApp } from '../../utils/whatsapp';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="kontak" className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
               <img
    src="/favicon.svg"
    alt="Karya Tani"
    className="navbar__logo-img"
  />

  <span className="footer__logo-text">
    Karya Tani <strong>Store</strong>
  </span>
  </div>
            <p className="footer__tagline">
             Aneka makanan ringan dari bahan alami pilihan, dibuat dengan cinta untuk keluarga Indonesia.
            </p>
            <div className="footer__socials">
  <button
    className="footer__social footer__social--wa"
    onClick={openWhatsApp}
  >
    {<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/> </svg>}

  </button>

  <a
    href="https://instagram.com/karyatani.official"
    target="_blank"
    rel="noopener noreferrer"
    className="footer__social footer__social--ig"
  >
    {<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" > <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm9.5 1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/> </svg>}

  </a>

  <button
    className="footer__social footer__social--web"
    onClick={() =>
      alert("Website profil Karya Tani sedang dalam pengembangan 🚀")
    }
  >
    {<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" > <circle cx="12" cy="12" r="10" /> <line x1="2" y1="12" x2="22" y2="12" /> <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /> </svg>}

  </button>
  <a
  href="https://maps.app.goo.gl/91Ng6WZRvAz9t39W6"
  target="_blank"
  rel="noopener noreferrer"
  className="footer__social footer__social--map"
>
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>

</a>
</div>
          </div>

        </div>

        <div className="footer__bottom">
          <p>&copy; {year} Karya Tani. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}

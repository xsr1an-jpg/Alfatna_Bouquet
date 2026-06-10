import "./Footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="kontak" className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img
                src="/favicon.svg"
                alt="Alfatna Bouquet"
                className="navbar__logo-img"
              />

              <span className="footer__logo-text">
                Alfatna <strong>Bouquet</strong>
              </span>
            </div>

            <p className="footer__tagline">
              Bouquet handmade untuk wisuda, ulang tahun,
              anniversary, dan berbagai momen spesial.
            </p>

            <div className="footer__socials">
  {/* WhatsApp */}
  <button
    className="footer__social footer__social--wa"
    onClick={() =>
      window.open(
        "https://wa.me/6282216137505",
        "_blank"
      )
    }
  >
    <i className="bi bi-whatsapp"></i>
  </button>

  {/* TikTok */}
  <a
    href="https://www.tiktok.com/@al_fatna517"
    target="_blank"
    rel="noopener noreferrer"
    className="footer__social footer__social--tiktok"
  >
    <i className="bi bi-tiktok"></i>
  </a>

  {/* Google Maps */}
  <a
    href="https://maps.app.goo.gl/RcFtVkaZcJ8kBQ8d8"
    target="_blank"
    rel="noopener noreferrer"
    className="footer__social footer__social--map"
  >
    <i className="bi bi-geo-alt-fill"></i>
  </a>
</div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {year} Alfatna Bouquet.
          </p>
        </div>
      </div>
    </footer>
  );
}
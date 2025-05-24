import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-2">
            Burada.com
            </h3>
            <p className="text-gray-400">
              Müşteri memnuniyeti odaklı alışveriş deneyimi
            </p>
          </div>

          {/* Linkler */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/hakkimizda"
                  className="text-gray-300 hover:text-orange-400 transition"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a
                  href="/iletisim"
                  className="text-gray-300 hover:text-orange-400 transition"
                >
                  İletişim
                </a>
              </li>
              <li>
                <a
                  href="/gizlilik"
                  className="text-gray-300 hover:text-orange-400 transition"
                >
                  Gizlilik Politikası
                </a>
              </li>
            </ul>
          </div>

          {/* Yardım */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Yardım</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/sss"
                  className="text-gray-300 hover:text-orange-400 transition"
                >
                  SSS
                </a>
              </li>
              <li>
                <a
                  href="/iade"
                  className="text-gray-300 hover:text-orange-400 transition"
                >
                  İade Politikası
                </a>
              </li>
              <li>
                <a
                  href="/kargotakip"
                  className="text-gray-300 hover:text-orange-400 transition"
                >
                  Kargo Takip
                </a>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Bizi Takip Edin</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 transition-colors"
              >
                <Twitter className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <LinkedIn className="text-2xl" />
              </a>
              <a
                href="https://github.com/muhammedmanduz/Nextjs-fullstack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <GitHub className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Muhammed Manduz. Tüm hakları saklıdır.
          </p>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm">
              Kullanım Şartları
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">
              Çerez Politikası
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
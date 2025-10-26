import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3 cursor-pointer">
            Kavva
          </h2>
          <p className="text-sm">
            Temukan produk terbaik dengan harga terjangkau hanya di Kavva Store.
            Belanja aman, cepat, dan terpercaya!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Sitemap</h3>
          <ul className="space-y-1.5 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">Aksesoris</a>
            </li>
            <li>
              <a href="/shop" className="hover:text-grey transition">Shop</a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigasi</h3>
          <ul className="space-y-1.5 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">Home</a>
            </li>
            <li>
              <a href="/shop" className="hover:text-white transition">Shop</a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Bantuan</h3>
          <ul className="space-y-1.5 text-sm">
            <li>
              <a href="/faq" className="hover:text-white transition">FAQ</a>
            </li>
            <li>
              <a href="/returns" className="hover:text-white transition">Pengembalian</a>
            </li>
            <li>
              <a href="/shipping" className="hover:text-white transition">Pengiriman</a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white transition">Kebijakan Privasi</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Ikuti Kami</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" className="hover:text-white">
              <Facebook />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-white">
              <Instagram />
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-white">
            <Twitter />            
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Kavva. All right reserved
      </div>
    </footer>
  );
};

export default Footer;

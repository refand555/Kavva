import { Heart, ShoppingCart, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-black px-6 py-3 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div
        className="font-bold text-xl cursor-pointer hover:opacity-80 transition"
        onClick={() => navigate("/")}
      >
        Kavva
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-6 max-w-lg">
        <input
          type="text"
          placeholder="Cari produk..."
          className="w-full px-4 py-2 rounded-lg text-black outline-none"
        />
      </div>

      {/* Icon Section */}
      <div className="flex items-center gap-6">
        <button className="hover:text-gray-300 transition bg-transparent border-none outline-none p-0
          " aria-label="Wishlist">
          <Heart />
        </button>
        <button className="hover:text-gray-300 transition bg-transparent border-none outline-none p-0
          " aria-label="Cart">
          <ShoppingCart />
        </button>
        <button className="hover:text-gray-300 transition bg-transparent border-none outline-none p-0
          " aria-label="Account">
          <User />
        </button>
      </div>
    </header>
  );
}

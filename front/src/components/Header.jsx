import { Heart, ShoppingCart, User, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import
export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-[#FAF7F0] flex items-center justify-between px-8 py-4">
      {/* Logo */}
      <div
        className="font-bold text-xl cursor-pointer hover:opacity-80 transition"
        onClick={() => navigate("/")}
      >
        Kavva
      </div>
      {/* Icon */}
      <div className="flex items-center gap-4">
        <button className="bg-transparent border-none outline-none p-0" aria-label="Search">
          <Search strokeWidth={1.5} size={24} className="text-black hover:#B0AAA0 transition"  />
        </button>
        <button className="bg-transparent border-none outline-none p-0" aria-label="Cart">
          <ShoppingCart strokeWidth={1.5} size={24} className="text-black hover:#B0AAA0 transition" />
        </button>
        <button className="bg-transparent border-none outline-none p-0" aria-label="Wishlist">
          <Heart strokeWidth={1.5} size={24} className="text-black hover:#B0AAA0 transition"  />
        </button>
        <button className="bg-transparent border-none outline-none p-0" aria-label="Account">
          <User strokeWidth={1.5} size={24} className="text-black "  />
        </button>
      </div>

    </header>
  );
}

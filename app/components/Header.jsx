import React from 'react';
import Link from 'next/link';
import { Search, ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className="px-10 py-6 flex justify-between items-center bg-[--brand-bg] text-white">
      {/* Logo and Navigation */}
      <ul className="flex items-center gap-8">
        <li>
          <Link href="/">
            <h1 className="text-2xl font-bold transform transition-transform duration-300 hover:scale-110">
              Perf
            </h1>
          </Link>
        </li>

        {[
          { name: 'Home', path: '/' },
          { name: 'Shop', path: '/shop' },
          { name: 'About Us', path: '/about' },
          { name: 'Contact Us', path: '/contact' },
        ].map((item) => (
          <li key={item.name}>
            <Link
              href={item.path}
              className="text-md transform transition-transform duration-300 hover:scale-110"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Search & Cart Buttons */}
      <div className="flex gap-4">
        <button className="flex items-center gap-2 px-4 py-1 border border-gray-400 rounded-lg transition-transform duration-300 hover:scale-110 active:scale-105">
          <Search size={18} />
          <span className="text-sm text-gray-300">Search...</span>
        </button>
     
          <button className="flex items-center gap-2 px-4 py-1 border border-gray-400 rounded-lg transition-transform duration-300 hover:scale-110 active:scale-105">
            <ShoppingCart size={18} />
            <span className="text-sm text-gray-300">Cart</span>
          </button>

      </div>
    </header>
  );
};

export default Header;

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      {/* DARK TOP BAR (Desktop) */}
      <div className="hidden w-full bg-[#252B42] text-white lg:flex">
        <div className="mx-auto flex w-full max-w-[1050px] items-center justify-between px-6 py-3">
          <div className="flex items-center gap-6">
            <a
              href="tel:+905555555555"
              className="flex items-center gap-2 text-xs font-bold tracking-[0.2px] text-white/90 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              <span>(+90) 555 555 55 55</span>
            </a>

            <a
              href="mailto:bandage@example.com"
              className="flex items-center gap-2 text-xs font-bold tracking-[0.2px] text-white/90 hover:text-white"
            >
              <Mail className="h-4 w-4" />
              <span>bandage@example.com</span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-xs font-bold tracking-[0.2px] text-white/90">
              Follow Us and get a chance to win 80% off
            </span>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-white/90 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="text-white/90 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="text-white/90 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN BAR */}
      <div className="w-full border-b border-[#E6E6E6]">
        <div className="mx-auto flex w-full max-w-[1050px] items-center justify-between px-6 py-6">
          {/* BRAND */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-[0.1px] text-[#252B42]"
          >
            Bandage
          </Link>

          {/* NAV (Desktop) */}
          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Primary"
          >
            <NavLink
              exact
              to="/"
              className="text-sm font-bold tracking-[0.2px] text-[#737373] hover:text-[#252B42]"
              activeClassName="text-[#252B42]"
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className="text-sm font-bold tracking-[0.2px] text-[#737373] hover:text-[#252B42]"
              activeClassName="text-[#252B42]"
            >
              Shop
            </NavLink>
            <NavLink
              to="/contact"
              className="text-sm font-bold tracking-[0.2px] text-[#737373] hover:text-[#252B42]"
              activeClassName="text-[#252B42]"
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              className="text-sm font-bold tracking-[0.2px] text-[#737373] hover:text-[#252B42]"
              activeClassName="text-[#252B42]"
            >
              About
            </NavLink>
            <NavLink
              to="/blog"
              className="text-sm font-bold tracking-[0.2px] text-[#737373] hover:text-[#252B42]"
              activeClassName="text-[#252B42]"
            >
              Blog
            </NavLink>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Desktop Auth */}
            <Link
              to="/login"
              className="hidden items-center gap-2 text-sm font-bold tracking-[0.2px] text-[#23A6F0] hover:opacity-90 lg:flex"
            >
              <User className="h-4 w-4" />
              <span>Login / Register</span>
            </Link>

            {/* Icons */}
            <button
              type="button"
              className="hidden text-[#23A6F0] hover:opacity-90 lg:inline-flex"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            <Link
              to="/cart"
              className="relative text-[#23A6F0] hover:opacity-90"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#23A6F0] px-1 text-[10px] font-bold leading-none text-white">
                1
              </span>
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              className="inline-flex text-[#252B42] hover:opacity-90 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU (Single Menu) */}
        {open && (
          <nav className="flex flex-col items-center gap-[30px] px-6 py-10 text-[30px] leading-[45px] tracking-[0.2px] text-[#737373] lg:hidden">
            <NavLink
              exact
              to="/"
              onClick={() => setOpen(false)}
              className="hover:text-[#252B42]"
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              onClick={() => setOpen(false)}
              className="hover:text-[#252B42]"
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className="hover:text-[#252B42]"
            >
              About
            </NavLink>
            <NavLink
              to="/blog"
              onClick={() => setOpen(false)}
              className="hover:text-[#252B42]"
            >
              Blog
            </NavLink>

            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center gap-2 text-base font-bold text-[#23A6F0]"
            >
              <User className="h-4 w-4" />
              <span>Login / Register</span>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

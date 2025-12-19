import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "../ui/Button";
import logo from "../../images/logo/logo.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 border-b-2 border-nature-green-200 bg-white/95 backdrop-blur-md shadow-sm">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group">
          {/* Brand Logo */}
          <div className="brand-mark group-hover:scale-105 transition-transform duration-300">
            <img
              src={logo}
              alt="HoAREC&N Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="brand-text">
            <span className="brand-title group-hover:text-nature-green-700 transition-colors">HoAREC&N</span>
            <span className="brand-subtitle">Horn of Africa Environment Center</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-stone-700 md:flex">
          <Link to="/" className="nav-link hover:text-nature-green-600">
            Home
          </Link>
          <a href="/#services" className="nav-link hover:text-nature-green-600">
            Our Programs
          </a>
          <Link to="/news" className="nav-link hover:text-nature-green-600">
            News
          </Link>
          <a href="/#about" className="nav-link hover:text-nature-green-600">
            About Us
          </a>
          <a href="/#contact" className="nav-link hover:text-nature-green-600">
            Get Involved
          </a>
        </nav>

        <div className="hidden md:block">
          <Button>Donate Now</Button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;



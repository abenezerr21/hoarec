import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 border-b-2 border-nature-green-200 bg-white/95 backdrop-blur-md shadow-sm">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group">
          {/* Environmental Logo - Overlapping circles representing nature */}
          <div className="brand-mark group-hover:scale-110 transition-transform duration-300">
            <div className="brand-mark-circle brand-mark-circle--blue"></div>
            <div className="brand-mark-circle brand-mark-circle--green"></div>
            <div className="brand-mark-circle brand-mark-circle--yellow"></div>
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



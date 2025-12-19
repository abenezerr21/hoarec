import Container from "./Container";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-emerald-50 via-yellow-50 to-emerald-100 text-slate-800 pt-20 pb-10 overflow-hidden border-t border-emerald-100">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-yellow-400 to-blue-500"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none"></div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & About */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-900/10">
                H
              </div>
              <span className="text-2xl font-bold text-emerald-900 tracking-tight">HOAREC</span>
            </div>
            <p className="text-slate-600 leading-relaxed max-w-sm">
              Dedicated to environmental conservation and sustainable development in the Horn of Africa using science and partnership.
            </p>
            <div className="flex gap-4 pt-4">
              {[
                { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
                { icon: Twitter, href: "#", color: "hover:bg-sky-500" },
                { icon: Instagram, href: "#", color: "hover:bg-pink-600" },
                { icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`w-10 h-10 rounded-full bg-white border border-emerald-100 shadow-sm flex items-center justify-center transition-all duration-300 ${social.color} text-slate-500 hover:text-white hover:-translate-y-1 hover:shadow-lg`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-emerald-900 font-semibold text-lg">About Us</h4>
            <ul className="space-y-4">
              {['Mission & Vision', 'Our Team', 'Careers', 'Partners', 'Annual Reports'].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-2 text-slate-600 hover:text-emerald-700 transition-colors group">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-500 transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-emerald-900 font-semibold text-lg">Contact Info</h4>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                <span className="text-sm">Gulele Botanic Garden,<br />Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm">+251 11 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm">info@hoarec.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-emerald-900 font-semibold text-lg">Stay Updated</h4>
            <p className="text-xs text-slate-600">Subscribe to our newsletter for the latest updates and environmental news.</p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white border border-emerald-200 rounded-lg py-3 px-4 text-sm text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-sm"
                />
              </div>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-green-500 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-emerald-900/20 active:scale-95 transition-all duration-300">
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} HOAREC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-700 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-emerald-700 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;



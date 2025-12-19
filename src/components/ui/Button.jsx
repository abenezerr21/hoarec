const base =
  "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nature-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const variants = {
  primary: "bg-gradient-to-r from-nature-green-500 to-nature-blue-500 text-white hover:shadow-lg hover:-translate-y-0.5 px-6 py-2.5 shadow-md",
  secondary:
    "bg-white text-nature-green-600 hover:bg-green-50 px-6 py-2.5 border-2 border-nature-green-500 shadow-sm",
  ghost:
    "bg-transparent text-stone-700 hover:bg-white hover:border-stone-300 px-5 py-2 border-2 border-transparent",
};

const Button = ({ variant = "primary", className = "", ...props }) => (
  <button className={`${base} ${variants[variant]} ${className}`} {...props} />
);

export default Button;




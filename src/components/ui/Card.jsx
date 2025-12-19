const Card = ({ icon, title, description }) => (
  <div className="program-card flex flex-col gap-3 rounded-xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 hover:border-nature-green-400">
    {icon && (
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-nature-green-100 to-nature-blue-100 text-nature-green-600">
        {icon}
      </div>
    )}
    <div className="space-y-2">
      <h3 className="text-base font-bold text-stone-900">{title}</h3>
      <p className="text-sm text-stone-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default Card;




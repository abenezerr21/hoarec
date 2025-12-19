const SectionHeader = ({ eyebrow, title, description, align = "left" }) => {
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <p className="section-eyebrow text-xs font-bold uppercase tracking-[0.2em] text-nature-green-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-stone-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;




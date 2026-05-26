export default function DropdownField({
  label,
  icon: Icon,
  value,
  onValueChange,
  options,
  placeholder,
}) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 font-rajdhani text-sm tracking-wider uppercase text-muted-foreground">
        {Icon && <Icon className="w-4 h-4 text-primary" />}
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className="w-full h-11 rounded-md border border-border/50 bg-muted/50 px-3 font-rajdhani text-sm text-foreground hover:border-primary/40 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2300e5ff' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 12px center",
          paddingRight: "36px",
        }}
      >
        <option value="" disabled style={{ background: "hsl(240 12% 6%)" }}>
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            key={option}
            value={option}
            style={{ background: "hsl(240 12% 6%)" }}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

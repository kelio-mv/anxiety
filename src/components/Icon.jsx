function Icon({ name, small, onClick }) {
  return (
    <span
      className={
        "material-symbols-rounded align-middle" +
        (small ? " text-xl/5" : "") +
        (onClick ? " cursor-pointer" : "")
      }
      onClick={onClick}
    >
      {name}
    </span>
  );
}

export default Icon;

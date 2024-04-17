function Icon({ name, onClick }) {
  return (
    <span
      className={`material-symbols-rounded align-middle ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      {name}
    </span>
  );
}

export default Icon;

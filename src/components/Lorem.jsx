function Lorem() {
  const sizes = ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl"];

  return sizes.map((size) =>
    Array(3)
      .fill(size)
      .map((size, i) => (
        <p className={`text-${size}`} key={i}>
          Lorem ipsum dolor sit amet.
        </p>
      ))
  );
}

export default Lorem;

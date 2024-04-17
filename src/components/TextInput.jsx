function TextInput({ className, ...props }) {
  return (
    <input
      type="text"
      className={"px-[7px] py-1 bg-gray-800 border border-gray-700 rounded " + (className || "")}
      {...props}
    />
  );
}

export default TextInput;

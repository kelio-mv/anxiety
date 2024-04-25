function TextInput({ className, ...props }) {
  return (
    <input
      type="text"
      className={"px-2 py-1.5 bg-gray-800 border border-gray-700 rounded " + (className || "")}
      {...props}
    />
  );
}

export default TextInput;

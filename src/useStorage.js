import { useState } from "react";

function useStorage(key, initialValue) {
  const [value, setValue] = useState(
    localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialValue
  );
  return [
    value,
    (value) => {
      localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    },
  ];
}

export default useStorage;

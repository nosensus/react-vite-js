// all hooks call   use*

import { useState } from "react";

// we can use hook inside hook
export default function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    value,
    onChange: (event) => setValue(event.target.value),
  };
}

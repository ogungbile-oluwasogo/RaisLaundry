import { useState } from "react";

const useInput = (validateInput) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validateInput(value);
  const hasError = !inputIsValid && isTouched;

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    value,
    inputIsValid,
    hasError,
    inputHandler,
    inputBlurHandler,
  };
};

export default useInput;

import React from "react";

export const useInput = (initialState: any, validations: [object]) => {
  const [value, setValue] = React.useState(initialState);
  const [isDirty, setDirty] = React.useState(false);
  const valid = useValidation(value, validations);

  const handleValue = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleBlur = (e: React.FormEvent<HTMLInputElement>) => {
    setDirty(true);
  };

  return {
    handleValue,
    handleBlur,
    value,
    valid,
  };
};

export const useValidation = (value: any, validations: [object]) => {
  const [isEmpty, setEmpty] = React.useState(true);
  const [minLength, setMinLength] = React.useState(false);
  const [maxLength, setMaxLength] = React.useState(false);
  React.useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength": {
          value.length < validations[validation]
            ? setMinLength(true)
            : setMinLength(false);
          break;
        }
        case "maxLength": {
          value.length > validations[validation]
            ? setMaxLength(true)
            : setMaxLength(false);
          break;
        }
        case "isEmpty": {
          value ? setEmpty(false) : setEmpty(true);
          break;
        }
      }
    }
  }, [value]);
  return {
    isEmpty,
    minLength,
  };
};

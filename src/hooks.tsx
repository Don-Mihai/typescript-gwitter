import React from "react";

interface validations {
  [key: string]: any;
}

interface stateValidation {
  value: boolean;
  textError: string;
}

export const useValidation = (value: any, validations: validations) => {
  const [isEmpty, setEmpty] = React.useState<stateValidation>({
    value: true,
    textError: "Заполните пустое поле",
  });
  const [minLength, setMinLength] = React.useState<stateValidation>({
    value: false,
    textError: "Минимальная длина: 3",
  });
  const [maxLength, setMaxLength] = React.useState<stateValidation>({
    value: false,
    textError: "Максимальная длина: 25",
  });

  React.useEffect(() => {
    for (let validation in validations) {
      switch (validation) {
        case "minLength": {
          value.length < validations[validation]
            ? setMinLength({ ...minLength, value: true })
            : setMinLength({ ...minLength, value: false });
          break;
        }
        case "maxLength": {
          value.length > validations[validation]
            ? setMaxLength({ ...maxLength, value: true })
            : setMaxLength({ ...minLength, value: false });
          break;
        }
        case "isEmpty": {
          value
            ? setEmpty({ ...isEmpty, value: false })
            : setEmpty({ ...isEmpty, value: true });
          break;
        }
      }
    }
  }, [value]);
  return {
    isEmpty,
    minLength,
    maxLength,
  };
};

export const useInput = (initialState: any, validations: validations) => {
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
    isDirty,
    ...valid,
  };
};

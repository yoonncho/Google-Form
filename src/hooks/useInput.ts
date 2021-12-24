import React, { useState } from 'react';

type InputType = {
  value: string;
  onChange: ({ target }: { target: HTMLInputElement | HTMLTextAreaElement }) => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const useInput = (defaultValue: string): InputType => {
  const [value, setValue] = useState(defaultValue);
  const onChange = ({ target }: { target: HTMLInputElement | HTMLTextAreaElement }) => {
    const { value } = target;
    setValue(value);
  };
  return { value, onChange, setValue };
};

export default useInput;

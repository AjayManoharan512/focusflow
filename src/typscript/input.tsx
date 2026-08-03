import React, { type FC, type ChangeEvent } from 'react'

type InputProps = {
    type: string;
    placeholder: string;
    inptval: string;
    setinptval: (value: string) => void;
}

function Input({ type, placeholder, inptval, setinptval }: InputProps): React.ReactNode {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setinptval(e.target.value);
  };

  return (
    <>
      <input 
        type={type} 
        placeholder={placeholder} 
        value={inptval} 
        onChange={handleChange} 
      />
    </>
  )
}

export default Input

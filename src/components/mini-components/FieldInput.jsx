import React from "react";

function FieldInput({ type, inputDisplay, width, handleChange, value, place }) {
  return (
    <div className="text-white text-[18px] w-full">
      <h1>{inputDisplay}</h1>
      <input
        placeholder={place}
        type={type}
        className={`px-[5px] text-black h-[28px] bg-white rounded-[8px] w-[100%] ${width}`}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}

export default FieldInput;

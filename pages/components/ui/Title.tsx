import React from "react";
export default function Title({ name, number }: any) {
  return (
    <div className="flex items-center gap-3 mt-2.5 mb-10">
      <span className="text-lg font-medium">{number}.</span>
      <h3 className="text-3xl mt-1 font-semibold text-secondary">{name}</h3>
    </div>
  );
}

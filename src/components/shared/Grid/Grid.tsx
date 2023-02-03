import React from "react";

type GridProps = {
  children: React.ReactNode[];
};

const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div
      role="grid"
      className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4"
    >
      {children}
    </div>
  );
};

export default Grid;

import React, { ReactNode } from 'react';

const TheHeading: React.FC<{ children: ReactNode }> = (props) => {
  return (
    <h2 className="font-special text-blue-800 text-center text-[2rem]">
      {props.children}
    </h2>
  );
};

export default TheHeading;

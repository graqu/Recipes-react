import { ReactNode } from 'react';

const BaseCard: React.FunctionComponent<{ children: ReactNode }> = (props) => {
  return (
    <div className="mx-auto my-[20px] rounded-[16px] max-w-[750px] bg-white p-[16px] shadow-md">
      {props.children}
    </div>
  );
};

export default BaseCard;

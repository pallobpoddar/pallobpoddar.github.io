import React from "react";

type Props = {
  serial: string;
  text: string;
};

const H3 = (props: Props) => {
  return (
    <div className="flex items-baseline mb-8 whitespace-nowrap">
      <div className="font-mono text-aquamarine text-base mr-2.5">
        {props.serial}
      </div>
      <div className="flex w-full">
        <h3 className="font-sans font-semibold text-hawkes-blue text-xl md:text-[32px]">
          {props.text}
        </h3>
        <div className="ml-2.5 w-full inline-block bg-[#303c55] h-px relative top-3.5 md:top-4 md:w-40 lg:w-60" />
      </div>
    </div>
  );
};

export default H3;

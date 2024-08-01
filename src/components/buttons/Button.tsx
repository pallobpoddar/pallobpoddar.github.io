import React from "react";

type Props = {
  text: string;
};

const Button = (props: Props) => {
  return (
    <button className="border border-solid border-aquamarine rounded py-4 px-6 text-aquamarine text-[14px] font-mono leading-none hover:bg-dark-mint-green">
      {props.text}
    </button>
  );
};

export default Button;

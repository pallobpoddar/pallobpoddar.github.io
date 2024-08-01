import React from "react";
import Button from "../buttons/Button";

const Intro = () => {
  return (
    <section className="pt-32 pb-20 mx-auto flex flex-col justify-center max-w-screen-lg min-h-screen md:pt-0 md:pb-0">
      <p className="font-mono text-aquamarine text-2xs mb-4 ml-1 lg:text-xs">
        Hello, this is
      </p>
      <h1 className="font-sans font-semibold text-hawkes-blue text-2xl leading-none sm:text-[60px] lg:text-[80px]">
        Pallob Poddar.
      </h1>
      <h2 className="font-sans font-semibold text-manatee text-2xl leading-none sm:text-[60px] lg:text-[80px]">
        I create my own destiny!
      </h2>
      <div className="mt-6 mb-14 max-w-md font-sans text-manatee text-base">
        <p className="mb-3">
          I&apos;m a full-stack web developer, proficient in MERN stack. My
          current interest lies in Next.js and Tailwind CSS. I&apos;m learning
          Japanese at present.
        </p>
        <p>
          I find immense joy by solving complex problems. Sky is the limit for
          me.
        </p>
      </div>
      <a href="mailto:pallobpoddar@gmail.com" target="_blank">
        <Button text="Get In Touch" />
      </a>
    </section>
  );
};

export default Intro;

import Image from "next/image";
import H3 from "../typographies/H3";

const About = () => {
  return (
    <section id="about" className="py-20 mx-auto max-w-screen-lg md:py-32">
      <H3 serial="01." text="About Me" />
      <div className="md:flex md:items-start md:justify-between">
        <div className="font-sans text-manatee text-base md:w-3/5 md:max-w-screen-sm">
          <p className="mb-3">
            Hello! I&apos;m Pallob Poddar from Dhaka, Bangladesh. I completed my
            graduation from{" "}
            <a
              href="https://northsouth.edu/"
              target="_blank"
              className="text-aquamarine"
            >
              North South University
            </a>{" "}
            in 2023. My major was Computer Science & Engineering. After that, I
            was a trainee at{" "}
            <a
              href="https://bjitacademy.com/"
              target="_blank"
              className="text-aquamarine"
            >
              BJIT Academy
            </a>{" "}
            for 4 months. There, I learned full stack web development in MERN
            stack. After that, I was an intern at{" "}
            <a
              href="https://www.hubxpert.com/"
              target="_blank"
              className="text-aquamarine"
            >
              Hubxpert
            </a>{" "}
            for 4 months. There, I contributed in a MERN stack project and some
            HubSpot CMS projects. Currently, I&apos;m learning Japanese at{" "}
            <span className="text-aquamarine">B-JET</span>.
          </p>
          <p className="mb-3">
            Here are a few of the other activities that I love to do!
          </p>
          <ul className="font-mono text-[13px] text-aquamarine grid grid-cols-2">
            {[
              "Coding",
              "Travelling",
              "Problem Solving",
              "Playing Sports",
              "Watching Movies",
              "Listening to Music",
            ].map((activity, index) => (
              <li
                key={index}
                className="relative pl-5 mb-2 before:content-['▹'] before:text-sm before:absolute before:left-0 before:leading-4"
              >
                {activity}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="https://pallob-portfolio.s3.ap-south-1.amazonaws.com/portfolio-profile-picture.webp"
          alt="Picture of Pallob Poddar"
          width={189}
          height={212}
          sizes="(max-width: 480px) 100vw, (max-width: 767px) 75vw, (max-width: 1024px) 50vw, 25vw"
          className="mt-14 mx-auto max-w-60 rounded w-2/3 sm:w-1/2 md:mt-0 md:mx-0 md:w-1/3"
        />
      </div>
    </section>
  );
};

export default About;

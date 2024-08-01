import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="hidden md:block">
      <div className="fixed bottom-0 left-8 text-aquamarine flex flex-col items-center gap-6">
        <ul className="flex flex-col align-middle gap-4">
          {[
            "https://github.com/pallobpoddar",
            "https://www.linkedin.com/in/pallobpoddar/",
            "https://www.facebook.com/pallob.poddar",
            "https://www.instagram.com/pallobpoddar",
          ].map((link, index) => (
            <li
              key={index}
              className="transition ease-in-out duration-200 hover:-translate-y-1"
            >
              <a href={link} target="_blank">
                {index == 0 ? (
                  <FaGithub size="1.25em" />
                ) : index == 1 ? (
                  <FaLinkedinIn size="1.25em" />
                ) : index == 2 ? (
                  <FaFacebook size="1.25em" />
                ) : (
                  <FaInstagram size="1.25em" />
                )}
              </a>
            </li>
          ))}
        </ul>
        <div className="w-px h-20 bg-[#a8b2d1]" />
      </div>
    </div>
  );
};

export default SocialLinks;

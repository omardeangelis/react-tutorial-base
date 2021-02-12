import React from "react";
import { FaTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa";

const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "chi siamo",
  },
  {
    id: 3,
    url: "/progetti",
    text: "progetti",
  },
  {
    id: 4,
    url: "/contatti",
    text: "contattaci",
  },
];

const socialLinks = [
  {
    id: 1,
    url: "https://twitter.com",
    icon: <FaTwitter className="icon" />,
  },
  {
    id: 2,
    url: "https://facebook.com",
    icon: <FaFacebook className="icon" />,
  },
  {
    id: 3,
    url: "https://linkedin.com",
    icon: <FaLinkedinIn className="icon" />,
  },
];

const SocialBar = () => {
  return (
    <ul className="social">
      {socialLinks.map((el) => {
        const { id, url, icon } = el;
        return (
          <li key={id}>
            <a href={url} alt="social">
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export { links, SocialBar };

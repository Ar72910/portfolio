import React from "react";

import my from "../assets/my.jpeg"
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={my}
          alt="Founder"
        />

        <h2>Ayush Raj</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://auth.geeksforgeeks.org/user/avraj/practice" target={"blank"}>
            <AiFillGoogleCircle />
          </a>
          <a href="https://www.instagram.com/?next=%2F" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Ar72910" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
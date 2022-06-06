import React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="container d-flex flex-wrap justify-content-center py-3 border-top mt-5 bg-light">
      <div className="row">
        <a href="/" className="text-muted text-decoration-none lh-1"></a>
        <p className="text-muted text-center">Created with ❤️ by Amber Sweep</p>
      </div>

      <ul className="col-md-4 justify-content-center list-unstyled d-flex">
        <li class="ms-3 ml-2">
          <a href="https://github.com/ambersweep" className="text-primary text-decoration-none" target="_blank">
            <FaGithub /> Github
          </a>
        </li>
        <li className="ms-3 ml-2">
          <a href="https://www.linkedin.com/in/amber-sweep" className="text-primary text-decoration-none" target="_blank">
            <FaLinkedin /> LinkedIn
          </a>
        </li>
        <li className="ms-3 ml-2">
          <a href="https://acsweep.dev/" className="text-primary text-decoration-none" target="_blank">
            <FaGlobe /> Portfolio
          </a>
        </li>
      </ul>
    </footer>
  );
}

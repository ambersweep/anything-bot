import React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer class="container d-flex flex-wrap justify-content-center py-3 border-top mt-5 bg-light">
      <div class="row">
        <a href="/" class=" text-muted text-decoration-none lh-1"></a>
        <p class="text-muted text-center">Created by Amber Sweep</p>
      </div>

      <ul class="col-md-4 justify-content-center list-unstyled d-flex">
        <li class="ms-3 ml-2">
          <a href="https://github.com/ambersweep" target="_blank">
            <FaGithub /> Github
          </a>
        </li>
        <li class="ms-3 ml-2">
          <a href="https://www.linkedin.com/in/amber-sweep" target="_blank">
            <FaLinkedin /> LinkedIn
          </a>
        </li>
        <li class="ms-3 ml-2">
          <a href="https://acsweep.dev/" target="_blank">
            <FaGlobe /> Portfolio
          </a>
        </li>
      </ul>
    </footer>
  );
}

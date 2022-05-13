import React from "react";
import { FaRobot, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Footer(){
    return(
        <footer class="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top fixed-bottom">
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          ></a>
          <span class="text-muted">Created by Amber Sweep</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
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
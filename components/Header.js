import React from "react";
import { FaRobot } from "react-icons/fa";
import { Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavLink, NavItem } from "reactstrap";

export default function Header(){
    return(
        <Navbar expand fixed="">
        <FaRobot size="2em" className="mr-2" />
        <NavbarBrand href="/"> OpenAI Engine Tester</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink
                href="https://beta.openai.com/overview"
                target="_blank"
              >
                Made With OpenAi
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
}
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItem";
import Button from "../button/Button";
import Dropdown from "./Dropdown";
import Parallax from "../pages/ParallaxImage";

function Navbar() {
const [dropdown, setDropdown] = useState(false);

return (
    <>
    <nav className="navbar">
        <Link to="/" className="navbar-logo">
        HEALTH 
        <Icons.FaMedkit/>
        </Link>
        <ul className="nav-items">
        {navItems.map((item) => {
            if (item.title === "Services") {
            return (
                <li
                key={item.id}
                className={item.cName}
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
                >
                <Link to={item.path}>{item.title}</Link>
                {dropdown && <Dropdown />}
                </li>
            );
            }
            return (
            <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
            </li>
            );
        })}
        </ul>
        <Button variant="outlined">Outlined</Button>
    </nav>
    <Parallax/>
    </>
);
}

export default Navbar;
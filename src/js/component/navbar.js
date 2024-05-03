import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark">
			<Link className="link-no-underline" to={"/"}><span className="navbar-brand ms-2 text-warning">Star Wars</span></Link>
		</nav>
	);
};

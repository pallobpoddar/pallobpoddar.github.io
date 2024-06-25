import React from "react";

const Header = () => {
	return (
		<header>
			<nav className="flex">
				<ul className="flex gap-2">
					<li>
						<span className="text-aquamarine">01.&nbsp;</span>About
					</li>
					<li>
						<span className="text-aquamarine">02.&nbsp;</span>
						Experience
					</li>
					<li>
						<span className="text-aquamarine">03.&nbsp;</span>
						Projects
					</li>
					<li>
						<span className="text-aquamarine">04.&nbsp;</span>
						Contact
					</li>
				</ul>
				<button>Resume</button>
			</nav>
		</header>
	);
};

export default Header;

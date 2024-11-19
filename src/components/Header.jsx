import { Link } from "react-router-dom";

function Header() {
	return (
		<nav className="blue darken-4">
			<div className="nav-wrapper">
				<Link to="/" className="brand-logo">
					React Food SPA
				</Link>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<a
							className="grey-text"
							href="*"
							target="_blank"
							rel="noreferrer"
						>
							Repo
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export { Header };

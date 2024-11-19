function Footer() {
	return (
		<footer className="page-footer blue">
			<div className="footer-copyright">
				<div className="container">
					© 2019-{new Date().getFullYear()} Copyright Text
					<a
						className="grey-text text-lighten-4 right"
						href="*"
						target="_blank"
						rel="noreferrer"
					>
						Repo
					</a>
				</div>
			</div>
		</footer>
	);
}

export { Footer };

const Footer = () => {
	return (
		<footer className="w-full p-5 bg-primary text-back2 mt-10 " dir="rtl">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
				<div className="text-center md:text-right">
					<h2 className="text-2xl font-bold"> Arta Export Company </h2>
					<p className="mt-2">Provider of quality products worldwide</p>
				</div>
				<div className="flex flex-col gap-5 mt-5 md:flex-row ">
					<div>
						<h3 className="bg-back2 text-primary w-fit">contact us</h3>
						<p>Phone: +98-09120216884</p>
						<p> Email: info@exportcompany.com</p>
						<p>Address: Sanat Street, Tehran, Iran</p>
					</div>
					<div>
						<h3 className="bg-back2 text-primary w-fit">Quick links</h3>
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="#about">about us</a>
							</li>
							<li>
								<a href="#services">Services</a>
							</li>
							<li>
								<a href="#contact">contact us</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="bg-back2 text-primary w-fit">follow us</h3>
						<ul>
							<li>
								<a href="https://www.facebook.com">Facebook</a>
							</li>
							<li>
								<a href="https://www.twitter.com">Twitter</a>
							</li>
							<li>
								<a href="https://www.linkedin.com">LinkedIn</a>
							</li>
							<li>
								<a href="https://www.instagram.com">Instagram</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="text-center mt-5">
				<p>&copy; 2024 export company. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;

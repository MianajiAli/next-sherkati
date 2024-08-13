const Footer = () => {
	return (
		<footer className="w-full p-5 bg-primary text-back2 mt-10 " dir="rtl">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
				<div className="text-center md:text-right">
					<h2 className="text-2xl font-bold">شرکت صادراتی </h2>
					<p className="mt-2">ارائه‌دهنده محصولات با کیفیت به سراسر جهان</p>
				</div>
				<div className="flex flex-col gap-5 mt-5 md:flex-row ">
					<div>
						<h3 className="bg-back2 text-primary w-fit">تماس با ما</h3>
						<p>تلفن: 123-456-7890</p>
						<p>ایمیل: info@exportcompany.com</p>
						<p>آدرس: خیابان صنعت، تهران، ایران</p>
					</div>
					<div>
						<h3 className="bg-back2 text-primary w-fit">لینک‌های سریع</h3>
						<ul>
							<li>
								<a href="#home">خانه</a>
							</li>
							<li>
								<a href="#about">درباره ما</a>
							</li>
							<li>
								<a href="#services">خدمات</a>
							</li>
							<li>
								<a href="#contact">تماس با ما</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="bg-back2 text-primary w-fit">ما را دنبال کنید</h3>
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
				<p>&copy; 2024 شرکت صادراتی . کلیه حقوق محفوظ است.</p>
			</div>
		</footer>
	);
};

export default Footer;

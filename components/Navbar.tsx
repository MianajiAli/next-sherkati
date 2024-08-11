import Link from "next/link";

const Navbar = () => {
	return (
		<nav
			dir="rtl"
			className="w-full h-20 bg-back2 text-secondary flex flex-row justify-between items-center px-5 md:px-[5%] lg:px-[12%]"
		>
			<div className="flex flex-row justify-center items-center gap-7">

				<ul className="md:flex gap-5 hidden">
					<li>
						<Link href="/">
							<span className="bg-primary text-back2 px-3 py-2 rounded cursor-pointer">صفحه اصلی</span>
						</Link>
					</li>
					<li>
						<Link href="/">
							<span className="px-3 py-2 rounded cursor-pointer">مقالات</span>
						</Link>
					</li>
					<li>
						<Link href="/">
							<span className="px-3 py-2 rounded cursor-pointer">درباره ما</span>
						</Link>
					</li>
					<li>
						<Link href="/">
							<span className="px-3 py-2 rounded cursor-pointer">تماس با ما</span>
						</Link>
					</li>
				</ul>
			</div>
			<Link href="tel:+9809120216884">
				<button className="py-2 px-6 rounded-md bg-success1 text-success2">
					خرید محصول
				</button>
			</Link>
			<div className="relative flex flex-row justify-center items-center gap-1 h-18">
				<img src="/images/logo.png" className="w-36" alt="" />
			</div>
		</nav>
	);
};

export default Navbar;

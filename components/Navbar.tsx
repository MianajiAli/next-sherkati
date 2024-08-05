import Link from "next/link";

const Navbar = () => {
	return (
		<nav
			dir="rtl"
			className="w-full h-20 bg-back2 text-secondary flex flex-row justify-between items-center px-5 md:px-[5%] lg:px-[12%]"
		>
			<div className="flex flex-row justify-center items-center gap-7">
				<div className=" flex flex-row justify-center items-center gap-1">
					<span className="w-10 h-10 rounded-full flex justify-center items-center text-3xl bg-primary text-back2">
						A
					</span>
					<span className="text-2xl font-bold">آرتا اکسپورت</span>
				</div>
				<ul className="md:flex gap-5 hidden ">
					<li>
						<Link className="bg-primary text-back2" href="/">
							صفحه اصلی
						</Link>
					</li>
					<li>
						<Link href="/">مقالات</Link>
					</li>
					<li>
						<Link href="/">درباره ما</Link>
					</li>
					<li>
						<Link href="/">تماس با ما</Link>
					</li>
				</ul>
			</div>
			<button className="py-2 px-6 rounded-md bg-success1 text-success2">
				خرید محصول
			</button>
		</nav>
	);
};

export default Navbar;

const Navbar = () => {
	return (
		<nav
			dir="rtl"
			className="w-full h-20 bg-back2 text-secondary flex flex-row justify-between items-center px-5 md:px-[20%]"
		>
			<div className="flex flex-row justify-center items-center gap-7">
				<div className=" flex flex-row justify-center items-center gap-1">
					<span className="w-10 h-10 rounded-full flex justify-center items-center text-3xl bg-primary text-back2">
						A
					</span>
					<span className="text-2xl font-bold">آرتا اکسپورت</span>
				</div>
				<ul className="flex gap-5">
					<li>صفحه اصلی</li>
					<li>مقالات</li>
					<li>درباره ما</li>
					<li>تماس با ما</li>
				</ul>
			</div>
			<button className="py-2 px-6 rounded-md bg-success1 text-success2">
				خرید محصول
			</button>
		</nav>
	);
};

export default Navbar;

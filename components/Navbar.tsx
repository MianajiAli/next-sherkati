import Link from "next/link";
import PopOverNavbar from "./PopOverNavbar";

const Navbar = () => {
	return (
		<nav
			className="w-full h-20 bg-back2 text-secondary flex flex-row justify-between items-center px-5 md:px-[3%] lg:px-[8%]"
		>
			<div className="relative flex flex-row justify-center items-center gap-1 h-18">
				<img src="/images/logo.png" className="w-36" alt="" />
			</div>

			<div className="flex flex-row justify-center items-center gap-7">
				<ul className="lg:flex gap-5 xl:gap-10 hidden">
					<li>
						<Link href="/">
							<span className="bg-primary text-back2 px-3 py-2 rounded cursor-pointer">Home</span>
						</Link>
					</li>
					<li>
						<Link href="/">
							<span className="px-3 py-2 rounded cursor-pointer">Articles</span>
						</Link>
					</li>
					<li>
						<PopOverNavbar></PopOverNavbar>
					</li>
					<li>
						<Link href="/">
							<span className="px-3 py-2 rounded cursor-pointer">About Us</span>
						</Link>
					</li>
					<li>
						<Link href="/">
							<span className="px-3 py-2 rounded cursor-pointer">Contact Us</span>
						</Link>
					</li>
				</ul>
			</div>

			<button className="py-2 px-6 rounded-md bg-success1 text-success2">
				tel: +98 012 345
			</button>
		</nav>
	);
};

export default Navbar;

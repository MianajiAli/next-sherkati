import Image from "next/image";

const Hero1 = () => {
	return (
		<div className="w-full min-h-52 h-[30vh] relative">
			<div className=" z-1 absolute bg-black w-full h-full"></div>
			<img className="w-full h-full object-cover opacity-30  z-2 absolute" src="/images/herobg.jpg" alt="Hero Background" />
			<div className="z-3 absolute w-full h-full flex flex-col justify-center items-center">
				<span className="text-4xl text-back1 font-bold mb-6 text-center">
					Transforming Global Trade with Artisanal Excellence
				</span>
				<div className="flex space-x-4 opacity-90">
					<button className="bg-primary text-back1 py-2 px-4 rounded-lg hover:bg-primary-dark transition">
						Discover Our Products
					</button>
					<button className="bg-secondary text-back1 py-2 px-4 rounded-lg hover:bg-secondary-dark transition">
						Request a Quote
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero1;

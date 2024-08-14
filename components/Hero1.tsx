import Image from "next/image";

const Hero1 = () => {
	return (
		<div className="w-full min-h-56 rounded-3xl p-5 bg-back2 flex flex-col md:flex-row-reverse md:justify-between gap-5">
			<div className="bg-secondary rounded-xl text-back2 md:h-[14rem] aspect-video relative"
			
			>
				<Image
					src="/images/cargo.webp"
					fill
					alt="Cargo Image"
					priority
					sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
					className="rounded-xl"
				/>
			</div>


			<div
				className="w-fit flex flex-col justify-center items-start pt-5 md:pt-0"
				dir="ltr"
			>
				<span className="text-3xl font-bold">Arta export </span>
				<p className=" text-md md:text-lg pt-2 ">
				Our export company is proud to offer high quality products to all over the world
					gives We deliver on our commitments to on-time delivery and excellent customer service
					We adhere to We aim to build long-term relationships with business partners around the world
					And we try to meet their needs with the best possible products and services
					fulfill With us, to global markets.
				</p>
			</div>
		</div>
	);
};

export default Hero1;

import Image from "next/image";

const Hero1 = () => {
	return (
		<div className="w-full min-h-56 rounded-3xl p-5 bg-back2 flex flex-col md:flex-row md:justify-between gap-5">
<div className="bg-secondary rounded-xl text-back2 md:h-[14rem] aspect-video relative">
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
				dir="rtl"
			>
				<span className="text-2xl"> عنوان</span>
				<p className=" text-md md:text-lg pt-2 ">
					شرکت صادراتی ما با افتخار محصولات با کیفیت بالا را به سراسر جهان ارائه
					می‌دهد. ما به تعهدات خود در زمینه تحویل به موقع و خدمات مشتری عالی
					پایبندیم. هدف ما ایجاد روابط بلندمدت با شرکای تجاری در سراسر جهان است
					و تلاش می‌کنیم تا نیازهای آن‌ها را با بهترین محصولات و خدمات ممکن
					برآورده کنیم. با ما، به بازارهای جهانی.
				</p>
			</div>
		</div>
	);
};

export default Hero1;

const AboutUs = () => {
	return (
		<div className="bg-white py-12">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-8">درباره ما</h2>
				<div className="flex flex-col lg:flex-row items-center">
					<div className="lg:w-1/2 mb-8 lg:mb-0">
						<img
							src="/images/company-overview.jpg"
							alt="نمای کلی شرکت"
							className="w-full h-auto rounded-lg shadow-md object-contain"
						/>
					</div>
					<div className="lg:w-1/2 lg:pl-12" dir="rtl">
						<p className="text-lg text-gray-700 mb-6">
							به آرتا اکسپورت خوش آمدید، یک رهبر جهانی در صادرات محصولات با کیفیت به بازارهای سراسر جهان. با دهه‌ها تجربه، ما متعهد به ارائه خدمات بی‌نظیر و تضمین موفقیت شرکا و مشتریان خود هستیم.
						</p>
						<p className="text-lg text-gray-700 mb-6">
							ماموریت ما پل زدن بین بازارها و اتصال فرهنگ‌ها از طریق ارائه محصولات برتر با قابلیت اطمینان و سرعت بی‌نظیر است. ما به صداقت، حرفه‌ای بودن، و تعهد به فراتر رفتن از انتظارات می‌بالیم.
						</p>
						<p className="text-lg text-gray-700">
							به ما بپیوندید در سفر رشد و موفقیت ما به عنوان ما همچنان به گسترش دامنه و تأثیر خود در سراسر جهان.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;

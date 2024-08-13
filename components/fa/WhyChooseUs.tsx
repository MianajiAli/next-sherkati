const WhyChooseUs = () => {
    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">چرا آرتا اکسپورت را انتخاب کنیم</h2>
                <p className="text-lg text-gray-700 text-center mb-12">
                    کشف کنید که چرا آرتا اکسپورت شریک انتخابی برای کسب‌وکارها در سراسر جهان است.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <img
                            src="/images/quality-icon.png"
                            alt="تضمین کیفیت"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">کیفیت بی‌نظیر</h3>
                        <p className="text-gray-600">
                            ما به بالاترین استانداردهای کنترل کیفیت پایبند هستیم و اطمینان می‌دهیم که هر محصول با استانداردهای بین‌المللی مطابقت دارد یا فراتر از آنهاست.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <img
                            src="/images/global-icon.png"
                            alt="شبکه جهانی"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">شبکه جهانی</h3>
                        <p className="text-gray-600">
                            با حضوری در بیش از ۵۰ کشور، ما تجربه و ارتباطات لازم برای تحویل محصولات شما به هر جایی که نیاز دارند را داریم.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <img
                            src="/images/support-icon.png"
                            alt="پشتیبانی مشتری"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">پشتیبانی بی‌نظیر</h3>
                        <p className="text-gray-600">
                            تیم متعهد ما به صورت ۲۴/۷ آماده کمک به نیازهای شما است و فرایند صادرات را به طور روان و قابل اعتماد انجام می‌دهد.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <img
                            src="/images/sustainability-icon.png"
                            alt="پایداری"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">پایداری</h3>
                        <p className="text-gray-600">
                            ما متعهد به روش‌های دوستدار محیط‌زیست هستیم و اطمینان می‌دهیم که عملیات ما برای نسل‌های آینده پایدار باشد.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <img
                            src="/images/value-icon.png"
                            alt="قیمت رقابتی"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">قیمت رقابتی</h3>
                        <p className="text-gray-600">
                            شبکه گسترده و عملیات کارآمد ما به ما اجازه می‌دهد که قیمت‌های رقابتی را بدون کاهش کیفیت ارائه دهیم.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <img
                            src="/images/experience-icon.png"
                            alt="تجربه"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">دهه‌ها تجربه</h3>
                        <p className="text-gray-600">
                            با سال‌ها تجربه در صنعت صادرات، ما دانش و مهارت‌های لازم برای پیمایش در بازارهای بین‌المللی پیچیده را داریم.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;

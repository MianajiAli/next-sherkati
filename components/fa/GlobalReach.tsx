const GlobalReach = () => {
    return (
        <div className="py-12">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">دسترسی جهانی ما</h2>
                <p className="text-lg text-gray-700 mb-6">
                    آرتا اکسپورت با افتخار به مشتریان در سراسر جهان خدمت می‌کند، بازارها و فرهنگ‌ها را با محصولات با کیفیت بالای خود متصل می‌کند.
                </p>
                <div className="relative h-96">
                    <img
                        src="/images/world-map.png"
                        alt="دسترسی جهانی"
                        className="w-full h-full object-contain opacity-70"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-text2">
                        <div className="mb-4">
                            <span className="text-2xl font-semibold">۵۰+</span>
                            <p className="text-base">کشورهای خدمت‌رسانی شده</p>
                        </div>
                        <div className="mb-4">
                            <span className="text-2xl font-semibold">۱۰۰+</span>
                            <p className="text-base">مشتریان در سراسر جهان</p>
                        </div>
                        <div>
                            <span className="text-2xl font-semibold">۲۰۰هزار+</span>
                            <p className="text-base">تن صادرات سالانه</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalReach;

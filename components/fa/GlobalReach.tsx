const GlobalReach = () => {
    return (
        <div className=" py-12">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Our Global Reach</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Arta Export proudly serves clients across the globe, connecting markets and cultures with our high-quality products.
                </p>
                <div className="relative h-96">
                    <img
                        src="/images/world-map.png"
                        alt="Global Reach"
                        className="w-full h-full object-contain opacity-70"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-text2">
                        <div className="mb-4">
                            <span className="text-2xl font-semibold">50+</span>
                            <p className="text-base">Countries Served</p>
                        </div>
                        <div className="mb-4">
                            <span className="text-2xl font-semibold">100+</span>
                            <p className="text-base">Clients Worldwide</p>
                        </div>
                        <div>
                            <span className="text-2xl font-semibold">200K+</span>
                            <p className="text-base">Tons Exported Annually</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalReach;

const Products = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">محصولات ما</h2>
                <p className="text-lg text-gray-700 text-center mb-12">
                    محصولات متنوع و با کیفیت بالای ما که با استانداردهای بین‌المللی همخوانی دارند را کشف کنید.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <img
                            src="/images/product1.jpg"
                            alt="محصول ۱"
                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">دسته‌بندی محصول ۱</h3>
                        <p className="text-gray-600">
                            توضیح کوتاهی از دسته‌بندی محصول ۱، شامل نکات برجسته و مزایای کلیدی.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <img
                            src="/images/product2.jpg"
                            alt="محصول ۲"
                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">دسته‌بندی محصول ۲</h3>
                        <p className="text-gray-600">
                            توضیح کوتاهی از دسته‌بندی محصول ۲، شامل نکات برجسته و مزایای کلیدی.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <img
                            src="/images/product3.jpg"
                            alt="محصول ۳"
                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">دسته‌بندی محصول ۳</h3>
                        <p className="text-gray-600">
                            توضیح کوتاهی از دسته‌بندی محصول ۳، شامل نکات برجسته و مزایای کلیدی.
                        </p>
                    </div>
                    {/* Add more product items as needed */}
                </div>
            </div>
        </div>
    );
};

export default Products;

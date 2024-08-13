const Products = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
                <p className="text-lg text-gray-700 text-center mb-12">
                    Explore our diverse range of high-quality products that meet international standards.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <img
                            src="/images/product1.jpg"
                            alt="Product 1"
                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Product Category 1</h3>
                        <p className="text-gray-600">
                            Brief description of Product Category 1, highlighting key features and benefits.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <img
                            src="/images/product2.jpg"
                            alt="Product 2"
                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Product Category 2</h3>
                        <p className="text-gray-600">
                            Brief description of Product Category 2, highlighting key features and benefits.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <img
                            src="/images/product3.jpg"
                            alt="Product 3"
                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Product Category 3</h3>
                        <p className="text-gray-600">
                            Brief description of Product Category 3, highlighting key features and benefits.
                        </p>
                    </div>
                    {/* Add more product items as needed */}
                </div>
            </div>
        </div>
    );
};

export default Products;

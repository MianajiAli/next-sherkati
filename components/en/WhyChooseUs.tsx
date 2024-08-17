const WhyChooseUs = () => {
    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Why Choose Arta Export</h2>
                <p className="text-lg text-gray-700 text-center mb-12">
                    Discover why Arta Export is the preferred partner for businesses around the world.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className=" p-6 rounded-lg shadow-md text-center">
                        <img
                            src="/images/quality-icon.png"
                            alt="Quality Assurance"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Unmatched Quality</h3>
                        <p className="text-gray-600">
                            We adhere to the highest standards of quality control, ensuring that every product meets or exceeds international benchmarks.
                        </p>
                    </div>
                    <div className=" p-6 rounded-lg shadow-md text-center">
                        <img
                            src="/images/global-icon.png"
                            alt="Global Network"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Global Network</h3>
                        <p className="text-gray-600">
                            With a presence in over 50 countries, we have the experience and connections to deliver your products wherever they need to go.
                        </p>
                    </div>
                    <div className=" p-6 rounded-lg shadow-md text-center">
                        <img
                            src="/images/support-icon.png"
                            alt="Customer Support"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Exceptional Support</h3>
                        <p className="text-gray-600">
                            Our dedicated team is available 24/7 to assist with your needs, ensuring a smooth and reliable export process.
                        </p>
                    </div>
                    <div className=" p-6 rounded-lg shadow-md text-center">
                        <img
                            src="/images/sustainability-icon.png"
                            alt="Sustainability"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                        <p className="text-gray-600">
                            We are committed to environmentally-friendly practices, ensuring our operations are sustainable for future generations.
                        </p>
                    </div>
                    <div className=" p-6 rounded-lg shadow-md text-center">
                        <img
                            src="/images/value-icon.png"
                            alt="Competitive Pricing"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
                        <p className="text-gray-600">
                            Our extensive network and efficient operations allow us to offer competitive pricing without compromising on quality.
                        </p>
                    </div>
                    <div className=" p-6 rounded-lg shadow-md text-center">
                        <img
                            src="/images/experience-icon.png"
                            alt="Experience"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Decades of Experience</h3>
                        <p className="text-gray-600">
                            With years of expertise in the export industry, we have the knowledge and skills to navigate complex international markets.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;

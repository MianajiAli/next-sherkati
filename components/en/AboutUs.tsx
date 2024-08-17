const AboutUs = () => {
	return (
		<div className=" py-12">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
				<div className="flex flex-col lg:flex-row items-center">
					<div className="lg:w-1/2 mb-8 lg:mb-0">
						<img
							src="/images/company-overview.jpg"
							alt="Company Overview"
							className="w-full h-auto rounded-lg shadow-md object-contain"
						/>
					</div>
					<div className="lg:w-1/2 lg:pl-12">
						<p className="text-lg text-gray-700 mb-6">
							Welcome to Arta Export, a global leader in exporting high-quality products to markets
							worldwide. With decades of experience, we are committed to providing exceptional services and
							ensuring the success of our partners and clients.
						</p>
						<p className="text-lg text-gray-700 mb-6">
							Our mission is to bridge markets and connect cultures by delivering premium products with
							unmatched reliability and speed. We pride ourselves on our integrity, professionalism, and
							dedication to exceeding expectations.
						</p>
						<p className="text-lg text-gray-700">
							Join us on our journey of growth and success as we continue to expand our reach and impact
							across the globe.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;

import AboutUs from "@components/fa/AboutUs";
import Contact from "@components/fa/Contact";
import GlobalReach from "@components/fa/GlobalReach";
import Hero from "@components/fa/Hero";
import Products from "@components/fa/Products";
import WhyChooseUs from "@components/fa/WhyChooseUs";
import ImageSlider from "@components/ImageSlider";



export default function Page() {
	return (
		<div>
			فارسی
			<Hero></Hero>
			<AboutUs></AboutUs>
			<Products></Products>
			<ImageSlider></ImageSlider>
			<GlobalReach></GlobalReach>
			<WhyChooseUs></WhyChooseUs>
			<Contact />
		</div>
	);
}

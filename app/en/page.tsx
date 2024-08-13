import AboutUs from "@components/en/AboutUs";
import Contact from "@components/en/Contact";
import GlobalReach from "@components/en/GlobalReach";
import Hero from "@components/en/Hero";
import Products from "@components/en/Products";
import WhyChooseUs from "@components/en/WhyChooseUs";



export default function Page() {
	return (
		<div>
			<Hero></Hero>
			<AboutUs></AboutUs>
			<Products></Products>
			<GlobalReach></GlobalReach>
			<WhyChooseUs></WhyChooseUs>
			<Contact />
		</div>
	);
}

import Aboutus from "@components/Aboutus";
import Contact from "@components/Contact";
import GlobalReach from "@components/GlobalReach";
import Hero1 from "@components/Hero1";
import Products from "@components/Products";
import WhyChooseUs from "@components/WhyChooseUs";



export default function Page() {
	return (
		<div>
			<Hero1></Hero1>
			<Aboutus></Aboutus>
			<Products></Products>
			<GlobalReach></GlobalReach>
			<WhyChooseUs></WhyChooseUs>
			<Contact />
		</div>
	);
}

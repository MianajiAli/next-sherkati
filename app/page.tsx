import Aboutus from "@components/Aboutus";
import Contact from "@components/Contact";
import Hero1 from "@components/Hero1";
import TestNavbar from "@components/TestNavbar";


export default function Page() {
	return (
		<div>
			<TestNavbar />
			<Hero1></Hero1>
			<Aboutus></Aboutus>
			<Contact />
		</div>
	);
}

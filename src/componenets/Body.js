import React from "react";
import Appointment from "./Appointment";
import ServiceDemo from "./ServiceDemo";
import Testimonials from "./Testimonials";
import Features from "./Features";
import About from "./About";
const Body = () => {
	return (
		<div className="px-5 md:px-20 text-[#152F2E]">
			<Appointment />
			<ServiceDemo />
			<Testimonials />
			<Features />
			<About />
		</div>
	);
};

export default Body;

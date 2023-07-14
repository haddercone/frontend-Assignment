import React from "react";
import Title from "./Title";
function Header() {
	return (
		<div className="min-h-screen bg-hero-section bg-no-repeat bg-cover p-2 text-[#152F2E]">
			<div className="md:py-10 md:px-20 md:w-2/3">
				<Title
					fill="#152F2E"
					height="25"
					width="25"
					color="text-[#152F2E]"
					margin="mb-11"
				/>
				<p className="font-bold lg:text-8xl text-4xl md:text-5xl mb-11 text-[#152F2E]">
					Describe the value of booking an appointment
				</p>
				<p className="text-2xl">
					No need to get clever. Tell people exactly what you're offering, then
					use this space to communicate your key value proposition
				</p>
			</div>
		</div>
	);
}

export default Header;

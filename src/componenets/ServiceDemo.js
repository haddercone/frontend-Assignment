import React from "react";
import ServiceVideo from "../assets/service-demo.mp4";
const ServiceDemo = () => {
	return (
		<div className="">
			<div className=" bg-[#E8FBFB] flex flex-col gap-5 items-center justify-evenly">
				<div className="lg:translate-y-1/3 lg:w-1/2 lg:m-auto text-center p-10">
					<p className="font-bold md:text-5xl mb-5">
						Show visitors what they're signing up for
					</p>
					<p>
						Include a video or photo from one of your sessions to help people
						understand your service (or just to hype ‘em up).
					</p>
				</div>
				<div className="m-auto md:w-2/3 md:translate-y-1/3">
					<video controls src={ServiceVideo} />
				</div>
			</div>
		</div>
	);
};

export default ServiceDemo;

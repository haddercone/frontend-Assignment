import React from "react";

const About = () => {
	return (
		<div className="flex m-auto w-2/3 gap-10 my-10 flex-wrap">
			<img
				className="min-w-96"
				src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/df213ca0-multor-about_10cs0b400000000000001o.jpg"
				alt=""
			/>
			<div className="flex-1">
				<p className="text-[#00c2c5] font-bold my-3">ABOUT</p>
				<p className="text-3xl font-bold my-3">
					Some more information about your business
				</p>
				<p className="font-light my-3">
					Share a little about yourself as a business owner, or maybe describe
					what makes your service unique. Give visitors one more reason to care
					about your offer and want to work with you.
				</p>
			</div>
		</div>
	);
};

export default About;

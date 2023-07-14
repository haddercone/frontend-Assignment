import React from "react";
import getRatingsFromNumber from "../utils/getRatingsFromNumber";
import { testimonials } from "../utils/constants";
const Testimonials = () => {
	return (
		<div className="md:mt-60 mt-5 sm:mt-56 md:m-auto md:w-2/3">
			<p className="text-center font-bold text-[#00C2C5] md:my-10">
				DON'T JUST TAKE OUR WORD FOR IT
			</p>
			<div className="flex flex-wrap gap-3 md:my-10">
				{testimonials &&
					testimonials.map((testimonial) => {
						const starRatings = getRatingsFromNumber(testimonial.rating);
						return (
							<div className="lg:flex-1 p-5" key={testimonial.id}>
								<div className="flex py-2">
									{starRatings &&
										starRatings.map((star, i) => <span key={i}>{star}</span>)}
								</div>
								<p className="text-2xl italic">{testimonial.testimonial}</p>
								<div className="flex gap-5 mt-5">
									<div className="py-2">
										<img
											className="w-10 h-10"
											src={testimonial.avatar}
											alt=""
										/>
									</div>
									<div>
										<p className="font-bold">{testimonial.name}</p>
										<p className="text-sm">{testimonial.location}</p>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Testimonials;

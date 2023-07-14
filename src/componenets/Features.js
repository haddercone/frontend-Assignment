import { features } from "../utils/constants";

const Features = () => {
	return (
		<div className="md:py-10  m-auto lg:w-2/3  flex flex-wrap gap-10 justify-center">
			{features.map((feature) => {
				return (
					<div key={feature.id} className="lg:flex-1 w-80">
						<img src={feature.imageURL} alt="" />
						<p className="font-bold text-2xl py-2">{feature.featureName}</p>
						<p>{feature.description}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Features;

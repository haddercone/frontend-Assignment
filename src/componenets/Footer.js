import Title from "./Title";

const Footer = () => {
	return (
		<div className="bg-[#152F2E] py-5  flex md:justify-evenly md:gap-10 gap-5 items-end flex-wrap p-2">
			<div className="">
				<Title
					fill="white"
					height="25"
					width="25"
					color="text-white"
					margin="0"
				/>
			</div>
			<p className="text-white ">
				{" "}
				© 2020 Insert Name Here. All rights reserved
			</p>
		</div>
	);
};

export default Footer;

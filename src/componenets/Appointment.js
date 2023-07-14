import React from "react";
import { SlScreenDesktop, SlHeart, SlBadge } from "react-icons/sl";
import { benefits } from "../utils/constants";
import FormSubmitResponse from "./FormSubmitResponse";
import { useState } from "react";
import Form from "./Form";

const Appointment = () => {
	const [userDetails, setUserDetails] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		type: "",
	});
	const [showResponse, setshowResponse] = useState(false);

	const handleChange = (e) => {
		setUserDetails({
			...userDetails,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setshowResponse(true);
		e.target.reset();
		setUserDetails({
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			type: "",
		});
	};

	return (
		<>
			{showResponse ? (
				<div
					onClick={() => setshowResponse(!showResponse)}
					className="z-10 fixed left-0 right-0 bottom-0  w-full h-full  bg-[#666263b1]"
				>
					<FormSubmitResponse
						showResponse={showResponse}
						setshowResponse={setshowResponse}
					/>
				</div>
			) : null}
			<div className="flex md:flex-row flex-col-reverse md:gap-20 justify-between items-center md:m-auto lg:w-2/3 ">
				<div className="flex-1">
					{benefits.map((benefit) => {
						return (
							<div className="flex gap-5 my-10" key={benefit.id}>
								<div className="text-5xl font-thin text-[#49D3D6]">
									{benefit.id === 1 ? (
										<SlScreenDesktop />
									) : benefit.id === 2 ? (
										<SlHeart />
									) : (
										<SlBadge />
									)}
								</div>
								<div>
									<p className="text-xl font-bold">{benefit.name}</p>
									<p>{benefit.description}</p>
								</div>
							</div>
						);
					})}
				</div>
				<div className="flex-1">
					<div className="md:m-auto text-center bg-[#152F2E] text-white p-10 translate-y-[-5%]">
						<div>
							<p className="text-3xl font-bold my-3">
								Schedule an <br /> Appointment
							</p>
							<p className="my-3">
								Here, let visitors know what will happen when they complete your
								form.
							</p>
						</div>
						<Form handleSubmit={handleSubmit} handleChange={handleChange} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Appointment;

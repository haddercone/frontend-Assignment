import React from "react";
import { RxCross1 } from "react-icons/rx";
const FormSubmitResponse = ({ showResponse, setshowResponse }) => {
	return (
		<div className=" flex h-full justify-center items-center text-center ">
			<div className="relative text-white bg-[#152F2E] p-2 md:p-3 md:w-1/4 h-40 border-t-4 border-[#00C2C5] flex flex-col gap-5 justify-center items-center">
				<p className="font-bold text-2xl">Thank You!</p>
				<p>
					We'll reach out to confirm your <br /> appointment shortly.
				</p>
				<button
					onClick={() => setshowResponse(!showResponse)}
					className="bg-black p-2 rounded-3xl border-2 border-white absolute top-[-1rem] right-[-1rem]"
				>
					<RxCross1 />
				</button>
			</div>
		</div>
	);
};

export default FormSubmitResponse;

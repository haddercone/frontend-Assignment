const Form = ({ handleChange, handleSubmit }) => {
	return (
		<form className="text-black" onSubmit={handleSubmit}>
			<input
				type="text"
				name="firstName"
				className="my-2 outline-none w-full px-3 py-3 rounded-md"
				required
				placeholder="First Name*"
				onChange={handleChange}
			/>
			<input
				type="text"
				name="lastName"
				className="my-3 outline-none w-full px-3 py-3 rounded-md"
				required
				placeholder="Last Name*"
				onChange={handleChange}
			/>
			<input
				type="email"
				name="email"
				className="my-3 outline-none w-full px-3 py-3 rounded-md"
				required
				placeholder="Email*"
				onChange={handleChange}
			/>
			<input
				name="phone"
				type="text"
				className="my-3 outline-none w-full px-3 py-3 rounded-md"
				required
				placeholder="Phone Number*"
				onChange={handleChange}
			/>
			<select
				className="my-3 w-full outline-none p-3"
				name="type"
				onChange={handleChange}
			>
				<option value="">Type of Appointment</option>
				<option value="Type 1">Type 1</option>
				<option value="Type 2">Type 2</option>
				<option value="Type 3">Type 3</option>
			</select>
			<button className="w-full p-3 text-white font-bold rounded-md my-3 bg-[#00C2C5]">
				SCHEDULE NOW
			</button>
		</form>
	);
};

export default Form;

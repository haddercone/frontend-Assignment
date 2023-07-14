import React from "react";

const Title = ({ fill, width, height, color, margin }) => {
	return (
		<div className={`flex flex-wrap ${margin} ${color}`}>
			<span className="text-3xl">MULT</span>
			<span className="mt-2">
				<svg
					width={width}
					height={height}
					viewBox="0 0 58 58"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M6.3068 51.5616C16.2652 61.52 34.4687 59.4622 46.9654 46.9654C59.4622 34.4687 61.52 16.2652 51.5616 6.3068C41.6033 -3.65158 23.3998 -1.59378 10.903 10.903C-1.59379 23.3998 -3.65157 41.6033 6.3068 51.5616ZM9.34364 48.6237C16.0086 55.2887 28.1901 53.9134 36.5517 45.5517C44.9134 37.1901 46.2887 25.0086 39.6237 18.3436C32.9587 11.6786 20.7772 13.054 12.4156 21.4156C4.054 29.7772 2.67863 41.9587 9.34364 48.6237Z"
						fill={fill}
					/>
				</svg>
			</span>
			<span className="text-3xl">R</span>
		</div>
	);
};

export default Title;

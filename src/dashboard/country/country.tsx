import React, { useState } from "react";
import { Loc } from "../../services/schema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronDown,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import countries from "./contries";
import { isLoadingAtom } from "../../atom/atom";
import { useAtomValue } from "jotai";
import AnimatePulse from "../components/animatepulse";

interface CountryProps {
	location: Loc | undefined;
	handleFetch: (p: string) => void;
}

const Country: React.FC<CountryProps> = ({
	location,
	handleFetch,
}: CountryProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("Philippines");

	const isLoading = useAtomValue(isLoadingAtom);

	const handleOptionSelect = (option: string) => {
		setSelectedOption(option);
		setIsOpen(false);
		console.log(option);
		handleFetch(option);
	};

	return (
		<div className="w-max h-full text-right flex flex-col justify-between">
			<div className="relative inline-block text-left">
				<div className="justify-between">
					<button
						type="button"
						className="text-7xl inline-flex w-full items-center justify-between gap-x-1.5 rounded-md  px-3 py-2 font-semibold shadow-sm  hover:bg-opacity-10 hover:bg-black"
						id="menu-button"
						aria-expanded="true"
						aria-haspopup="true"
						onClick={() => setIsOpen(!isOpen)}
					>
						{selectedOption}
						<FontAwesomeIcon
							icon={isOpen ? faChevronRight : faChevronDown}
							className="text-lg ml-10"
						/>
					</button>
					{!isLoading ? (
						<p className="border-l-8 bg-opacity-10 bg-black w-full rounded-r-xl text-2xl mt-2 pl-3 letter-spacing">
							{location?.region}
						</p>
					) : (
						<AnimatePulse />
					)}

					{isOpen && (
						<div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg max-h-60 overflow-y-scroll ring-1 ring-black ring-opacity-5">
							<div
								className="py-1"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="menu-button"
							>
								{countries.map((country, index) => (
									<option
										onClick={() => handleOptionSelect(country)}
										key={index}
										value={country}
										className="p-2 rounded-lg mx-7 mt-5 cursor-pointer hover:bg-blue-600"
									>
										{country}
									</option>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
			<div>
				Powered by{" "}
				<a
					className="bg-blue-600 py-2 px-5 rounded-lg"
					href="https://www.weatherapi.com/"
					title="Free Weather API"
				>
					WeatherAPI.com
				</a>
			</div>
		</div>
	);
};

export default Country;

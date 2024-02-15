import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBolt,
	faCloud,
	faCloudRain,
	faSnowflake,
	faSun,
} from "@fortawesome/free-solid-svg-icons";
import { isLoadingAtom } from "../../atom/atom";
import { useAtomValue } from "jotai";
import AnimatePulse from "../components/animatepulse";

interface DisplayProps {
	weather: string | undefined;
	display: string | undefined;
}

const Display: React.FC<DisplayProps> = ({
	weather,
	display,
}: DisplayProps) => {

	const isLoading = useAtomValue(isLoadingAtom);

	const getWeatherIcon = (weather: string | undefined) => {
		if (weather?.toLowerCase().includes("cloud")) {
			return faCloud;
		}

		if (weather?.toLowerCase().includes("sun")) {
			return faSun;
		}

		if (weather?.toLowerCase().includes("rain")) {
			return faCloudRain;
		}

		if (weather?.toLowerCase().includes("snow")) {
			return faSnowflake;
		}

		if (weather?.toLowerCase().includes("storm")) {
			return faBolt;
		}

		// Default icon if no match found
		return faCloud;
	};

	const getWeatherBackground = (weather: string | undefined) => {
		if (weather?.toLowerCase().includes("cloud")) {
			return ["bg-gray-400", "bg-gray-200", "bg-gray-700"];
		}

		if (weather?.toLowerCase().includes("sun")) {
			return ["bg-yellow-400", "bg-yellow-200", "bg-yellow-700"];
		}

		if (weather?.toLowerCase().includes("rain")) {
			return ["bg-blue-400", "bg-blue-200", "bg-blue-700"];
		}

		if (weather?.toLowerCase().includes("snow")) {
			return ["bg-white", "bg-gray-200", "bg-gray-700"];
		}

		if (weather?.toLowerCase().includes("storm")) {
			return ["bg-indigo-400", "bg-indigo-200", "bg-indigo-700"];
		}

		// Default colors if no match found
		return ["bg-gray-400", "bg-gray-200", "bg-gray-700"];
	};

	return (
		<div className="w-full h-full place-items-center flex place-content-center">
			<div className="relative h-full w-1/2">
				<div
					className={`bg-slate-300 absolute -left-14 top-28 w-96 h-96 filter blur-2xl rounded-full mix-blend-overlay`}
				></div>
				<div
					className={`${
						getWeatherBackground(weather)[0]
					} absolute right-0 bottom-0 w-96 h-96 filter blur-2xl  rounded-full mix-blend-overlay`}
				></div>
				<div
					className={`${
						getWeatherBackground(weather)[2]
					} absolute left-0 top-1/4 w-[500px] h-[500px] filter blur-2xl rounded-full mix-blend-overlay`}
				></div>
			</div>
			<div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
				<div className="max-w-lg p-10 rounded-3xl shadow-2xl ">
					<FontAwesomeIcon
						icon={getWeatherIcon(weather)}
						className="text-[200px] text-white"
					/>
					<div className="py-5 px-20">
						<p className="letter-spacing mb-3">Weather: </p>
						{!isLoading ? (<h1 className="text-3xl capitalize  text-white">{weather}</h1>) : (<AnimatePulse/>)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Display;

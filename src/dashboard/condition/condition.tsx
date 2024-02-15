import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { Current, Loc } from "../../services/schema";
import AnimatePulse from "../components/animatepulse";
import { useAtomValue } from "jotai";
import { isLoadingAtom } from "../../atom/atom";

interface ConditionProps {
	location: Loc | undefined;
	current: Current | undefined;
}

const Conditon: React.FC<ConditionProps> = ({
	current,
}: ConditionProps) => {

	const isLoading = useAtomValue(isLoadingAtom);

	return (
		<div className="w-max h-full text-left flex flex-col justify-end min-w-[500px]">
			<div className="text-2xl rounded-r-xl mb-52 border-l-8 p-10 letter-spacing bg-opacity-10 bg-black">
				Feels like:
				{!isLoading ? (<h2 className="text-7xl">{current?.feelslike_c} °C </h2> ) : (<AnimatePulse/>)}
			</div>

			<div>
				<div className="text-xl letter-spacing">
					<div className="flex align-middle items-center">
						<p>Wind: </p>
						<span>
							<FontAwesomeIcon
								icon={faWind}
								className="text-[30px] bg-blue-600 p-5 rounded-lg"
							/>
						</span>
					</div>
					{!isLoading ? (<h2 className="text-7xl">{current?.wind_kph}° {current?.wind_dir}</h2>) : (<AnimatePulse/>)}
				</div>
			</div>
		</div>
	);
};

export default Conditon;

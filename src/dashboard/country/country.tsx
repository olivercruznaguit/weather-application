import React from "react";
import { Loc } from "../../services/schema";


interface CountryProps {
	location: Loc | undefined;
}

const Country: React.FC<CountryProps> = ({ location }: CountryProps) => {
	return (
        <div className="w-max h-full text-right flex flex-col justify-between">
            <div>
				<h1 className="text-7xl">{location?.country}</h1>
				<p className="w-1/2 text-2xl mt-2 letter-spacing">{location?.region}</p>
			</div>
			<div>
			Powered by <a className="bg-blue-600 py-2 px-5 rounded-lg" href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
			</div>
		</div>
    )
};

export default Country;

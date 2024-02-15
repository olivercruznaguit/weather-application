import React, { useEffect } from "react";

import { useMutation } from "react-query";
import { wait } from "@testing-library/user-event/dist/utils";
import { AxiosError } from "axios";
import Conditon from "./condition/condition";
import Country from "./country/country";
import Display from "./display/display";
import { WeatherData } from "../services/schema";
import { fetchWeatherDataRequest } from "../services/main";

function Dashboard() {
	const {
		isLoading,
		mutate: fetchWeatherData,
		data,
	} = useMutation<WeatherData, AxiosError, any>({
		mutationFn: async (data) =>
			wait(1000).then(() => fetchWeatherDataRequest(data)),
		onSuccess: (data) => {
			console.log("data: ", data);
		},
		onError: (e) => {
			console.log("Error: ", e);
		},
	});

	useEffect(() => {
		fetchWeatherData("Philippines");
	}, []);

	return (
		<div className="h-screen p-[100px] flex-row flex justify-between items-center gap-1">
			<Conditon location={data?.location} current={data?.current}/>
			<Display weather={data?.current?.condition.text} display={data?.current?.condition.icon}/>
            <Country location={data?.location}/>
		</div>
	);
}

export default Dashboard;

import { useState } from "react";

export const useTemperatura = () => {
    const [temperature, setTemperature] = useState(20);

    const increaseTemperature = () => {
        setTemperature(temperature + 1);
    };

    const decreaseTemperature = () => {
        setTemperature(temperature - 1);
    };

    const getTemperatureColor = () => {
        if (temperature < 15) {
            return 'blue';
        } else if (temperature >= 15 && temperature <= 25) {
            return 'green';
        } else {
            return 'red';
        }
    };

    return {
        temperature,
        increaseTemperature,
        decreaseTemperature,
        getTemperatureColor
    };
};


import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch("https://api.exchangerate.host/latest?base=PLN&symbols=EUR,USD,GBP,CHF");

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { rate, date } = await response.json();

                setRatesData({
                    state: "success",
                    rate,
                    date,
                });

            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};
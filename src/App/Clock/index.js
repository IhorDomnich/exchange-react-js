import React, { useState, useEffect } from "react";
import "./style.css";

const fotmatDate = (date) =>  date.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long"
});

export const Clock = () => {
    const [date, satDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div className="clock">
            Date:
            {" "}
            {fotmatDate(date)}
        </div>
    )
};
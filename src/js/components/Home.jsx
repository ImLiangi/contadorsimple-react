import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter";

const Home = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => {
                if ((prev + 1) % 60 === 0) {
                    alert(`¡Han pasado ${(prev + 1) / 60} minuto(s)!`);
                }
                return prev + 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center mt-5">
            <SecondsCounter seconds={seconds} />
        </div>
    );
};

export default Home;
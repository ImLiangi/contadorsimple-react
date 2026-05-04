import React from "react";
import SecondsCounter from "./SecondsCounter";

let seconds = 0;

const Home = () => {
    return (
        <div className="text-center mt-5">
            <SecondsCounter seconds={seconds} />
        </div>
    );
};

const root = document.getElementById("root");
import ReactDOM from "react-dom/client";
const rootInstance = ReactDOM.createRoot(root);

setInterval(() => {
    seconds++;
    if (seconds % 60 === 0) {
        alert(`¡Han pasado ${seconds / 60} minuto(s)!`);
    }
    rootInstance.render(
        <React.StrictMode>
            <Home />
        </React.StrictMode>
    );
}, 1000);

export default Home;
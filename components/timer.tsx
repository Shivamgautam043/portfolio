"use client";
import { useState } from "react";
import {
    getIndianHour,
    getIndianMinutes,
} from "../utilites/utilitiesFunctions";

export function Timer() {
    const [time, setTime] = useState(new Date());
    const hourFirst = getIndianHour().toString().slice(0, 1);
    const hourSecond = getIndianHour().toString().slice(1, 2);

    const minuteFirst = getIndianMinutes().toString().slice(0, 1);
    const minuteSecond = getIndianMinutes().toString().slice(1, 2);
    const timer = Date.now();

    return (
        <div className="relative bg-gray-900 h-[50vh] w-full">
            <div className="absolute top-[50%] w-full grid translate-y-[-28px] grid-flow-col gap-6 place-content-center place-items-start ">
                <div
                    className={`bg-gray-700 rounded-md transition-all duration-500 ${
                        hourFirst === "0"
                            ? ""
                            : hourFirst === "1"
                            ? "translate-y-[-33%]"
                            : "translate-y-[-66%]"
                    }`}
                >
                    <div className="grid grid-cols-1">
                        <div className="p-4">0</div>
                        <div className="p-4">1</div>
                        <div className="p-4">2</div>
                    </div>
                </div>

                <div
                    className={` bg-gray-700 rounded-md transition-all duration-500`}
                >
                    <div className="grid grid-cols-1">
                        <div className="p-4">0</div>
                        <div className="p-4">1</div>
                        <div className="p-4">2</div>
                        <div className="p-4">3</div>
                        <div className="p-4">4</div>
                        <div className="p-4">5</div>
                        <div className="p-4">6</div>
                        <div className="p-4">7</div>
                        <div className="p-4">8</div>
                        <div className="p-4">9</div>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="absolute h-10 z-20 border border-white w-full top-[50%] translate-y-[-50%]"></div>
        </div>
    );
}

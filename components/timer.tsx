"use client";
import { useEffect, useState } from "react";
import {
    getIndianHour,
    getIndianMinutes,
    getIndianSeconds,
} from "../utilites/utilitiesFunctions";

export function Timer() {
    const [time, setTime] = useState({
        hourFirst: "0",
        hourSecond: "0",
        minuteFirst: "0",
        minuteSecond: "0",
        secondsFirst: "0",
        secondsSecond: "0",
    });

    useEffect(() => {
        const updateTime = () => {
            const hour = getIndianHour();
            const minute = getIndianMinutes();
            const second = getIndianSeconds();

            setTime({
                hourFirst: hour.slice(0, 1),
                hourSecond: hour.slice(1, 2),
                minuteFirst: minute.slice(0, 1),
                minuteSecond: minute.slice(1, 2),
                secondsFirst: second.slice(0, 1),
                secondsSecond: second.slice(1, 2),
            });
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    const translateValue = (totalNumbers: number, currentNumber: number) => {
        return `translateY(-${((currentNumber / totalNumbers) * 100).toFixed(
            2
        )}%)`;
    };

    return (
        <div className="relative h-[50vh] w-full overflow-hidden">
            <div className="absolute top-[50%] w-full grid translate-y-[-28px] grid-flow-col gap-6 place-content-center place-items-start ">
                <div
                    className={`bg-gray-100 dark:bg-gray-700 rounded-md transition-all duration-500`}
                    style={{
                        transform: translateValue(3, parseInt(time.hourFirst)),
                    }}
                >
                    <div className="grid grid-cols-1">
                        <div className="p-4">0</div>
                        <div className="p-4">1</div>
                        <div className="p-4">2</div>
                    </div>
                </div>
                <div
                    className={` bg-gray-100 dark:bg-gray-700 rounded-md transition-all duration-500`}
                    style={{
                        transform: translateValue(
                            10,
                            parseInt(time.hourSecond)
                        ),
                    }}
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
                <div
                    className={` bg-gray-100 dark:bg-gray-700 rounded-md transition-all duration-500`}
                    style={{
                        transform: translateValue(
                            6,
                            parseInt(time.minuteFirst)
                        ),
                    }}
                >
                    <div className="grid grid-cols-1">
                        <div className="p-4">0</div>
                        <div className="p-4">1</div>
                        <div className="p-4">2</div>
                        <div className="p-4">3</div>
                        <div className="p-4">4</div>
                        <div className="p-4">5</div>
                    </div>
                </div>
                <div
                    className={` bg-gray-100 dark:bg-gray-700 rounded-md transition-all duration-500`}
                    style={{
                        transform: translateValue(
                            10,
                            parseInt(time.minuteSecond)
                        ),
                    }}
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
                <div
                    className={` bg-gray-100 dark:bg-gray-700 rounded-md transition-all duration-500`}
                    style={{
                        transform: translateValue(
                            6,
                            parseInt(time.secondsFirst)
                        ),
                    }}
                >
                    <div className="grid grid-cols-1">
                        <div className="p-4">0</div>
                        <div className="p-4">1</div>
                        <div className="p-4">2</div>
                        <div className="p-4">3</div>
                        <div className="p-4">4</div>
                        <div className="p-4">5</div>
                    </div>
                </div>
                <div
                    className={`relative bg-gray-100 dark:bg-gray-700 rounded-md transition-all duration-500`}
                    style={{
                        transform: translateValue(
                            10,
                            parseInt(time.secondsSecond)
                        ),
                    }}
                >
                    {" "}
                    <div className="grid grid-cols-1">
                        {[...Array(10)].map((item, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-500 p-4 `}
                            >
                                {index}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute top-[50%] w-full grid translate-y-[-28px] grid-flow-col gap-6 place-content-center place-items-center ">
                {[...Array(6)].map((item, index) => (
                    <div
                        key={index}
                        className={`bg-[rgba(0,0,0,0.05)] dark:bg-[rgba(237,233,233,0.27)] z-30 rounded-full transition-all duration-500 scale-125 aspect-square !w-[42px] !h-[42px] mt-2`}
                    >
                        <div className="grid grid-cols-1 ">
                            <div className="p-4">
                                <div className="invisible">9</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="absolute h-10 z-20 border border-white w-full top-[50%] translate-y-[-50%]"></div> */}
        </div>
    );
}

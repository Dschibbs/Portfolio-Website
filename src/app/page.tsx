'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 1,
    seconds: 0,
    milliseconds: 0,
  });

  useEffect(() => {
    const myInterval = setInterval(() => {
      const { milliseconds, seconds, minutes, hours, days } = time;

      if (milliseconds === 0) {
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              if (days === 0) {
                clearInterval(myInterval);
              } else {
                setTime({
                  days: days - 1,
                  hours: 23,
                  minutes: 59,
                  seconds: 59,
                  milliseconds: 99,
                });
              }
            } else {
              setTime({
                days: 0,
                hours: hours - 1,
                minutes: 59,
                seconds: 59,
                milliseconds: 99,
              });
            }
          } else {
            setTime({
              days: 0,
              hours: 0,
              minutes: minutes - 1,
              seconds: 59,
              milliseconds: 99,
            });
          }
        } else {
          setTime({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: seconds - 1,
            milliseconds: 99,
          });
        }
      } else {
        setTime((prevTime) => ({
          ...prevTime,
          milliseconds: milliseconds - 1,
        }));
      }
    }, 10);

    return () => clearInterval(myInterval);
  }, [time]);
  const { days, hours, minutes, seconds, milliseconds } = time;
  return (
    <main className="flex min-h-screen min-w-screen w-screen h-screen bg-[#1C1C1C] flex-col items-center justify-between p-24">

      <div className="absolute top-1/2 -translate-x-1/2  -translate-y-1/2 left-1/2 flex place-items-center flex-col">
        <Image
          src="/max-logo.png"
          alt="Next.js Logo"
          width={1128}
          height={550}
          priority
        />
        <div className="flex flex-col items-center justify-center mt-10 text-white">
          {days === 0 && hours === 0 && minutes === 0 && seconds === 0 && milliseconds === 0 ? (
              <Image
                src="/image.png"
                alt="Next.js Logo"
                width={200}
                height={200}
                priority
              />
          ) : (
            <div className="flex space-x-4">
              {/* <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg">
                <h1 className="text-5xl font-bold">{days}</h1>
                <p className="text-lg">Days</p>
              </div>
              <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg">
                <h1 className="text-5xl font-bold">{hours}</h1>
                <p className="text-lg">Hours</p>
              </div> */}
              <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg">
                <h1 className="text-5xl font-bold">{minutes}</h1>
                <p className="text-lg">Minutes</p>
              </div>
              <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg">
                <h1 className="text-5xl font-bold">{seconds}</h1>
                <p className="text-lg">Seconds</p>
              </div>
              <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg">
                <h1 className="text-5xl font-bold">{milliseconds}</h1>
                <p className="text-lg">Milliseconds</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

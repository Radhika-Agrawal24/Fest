import { useEffect, useState } from "react";

function Countdown() {
  const eventDate = new Date("April 8, 2026 10:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(eventDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(eventDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="flex justify-center gap-6 mt-6 text-white text-xl font-bold">
      <div>{days}d</div>
      <div>{hours}h</div>
      <div>{minutes}m</div>
      <div>{seconds}s</div>
    </div>
  );
}

export default Countdown;
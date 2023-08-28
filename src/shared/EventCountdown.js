import { useState, useEffect } from "react";

const EventCountdown = ({ targetDate }) => {
  // expects a string of the form '2023-12-25'
  const [remainingDays, setRemainingDays] = useState(0);

  useEffect(() => {
    // Calculate the remaining days between current date and target date
    const currentDate = new Date();
    const eventDate = new Date(targetDate);
    const timeDifference = eventDate - currentDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    setRemainingDays(daysDifference);
  }, [targetDate]);

  return remainingDays;
};

export default EventCountdown;

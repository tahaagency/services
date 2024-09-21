import { useState, useEffect } from "react";

const useDate = () => {
    const [currentDate, setCurrentDate] = useState({
        time: '',
        date: '',
        wish: ''
    });

    useEffect(() => {
        const local = 'en';
        const today = new Date();

        const day = today.toLocaleDateString(local, {weekday: 'long' });
        const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(local, { month: 'long' })}\n\n`;
        const time = today.toLocaleTimeString(local, {
            hour: 'numeric',
            hour12: true,
            minute: 'numeric'
        });

        setCurrentDate((prevState) => ({
            ...prevState,
            date,
            time,
        }));

        const updateWish = () => {
            const hour = new Date().getHours();
            const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}`;

            setCurrentDate((prevState) => ({
                ...prevState,
                wish
            }));
        };

        updateWish();
        const intervalId = setInterval(updateWish, 3600000);

        return () => clearInterval(intervalId);
    }, []);

    return currentDate;
};

export default useDate;
import { useEffect, useState } from "react";

const getStarCount = (width, height) =>
    Math.floor((width * height) / 10000);

const createStars = (numberOfStars) =>
    Array.from({ length: numberOfStars }, (_, id) => ({
        id,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
    }));

export const StarBackground = () => {
    const [stars, setStars] = useState(() =>
        createStars(getStarCount(window.innerWidth, window.innerHeight))
    );

    useEffect(() => {
        let resizeTimeout;

        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const nextCount = getStarCount(
                    window.innerWidth,
                    window.innerHeight
                );

                setStars((currentStars) =>
                    currentStars.length === nextCount
                        ? currentStars
                        : createStars(nextCount)
                );
            }, 150);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            clearTimeout(resizeTimeout);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
};
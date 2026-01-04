import React, { useState, useEffect } from 'react';

export const LoadingScreen = ({ onLoadingComplete, duration = 2000 }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const startTime = Date.now();

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / duration) * 100, 100);

            setProgress(newProgress);

            if (newProgress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    if (onLoadingComplete) onLoadingComplete();
                }, 300);
            }
        }, 60); // mengatur smooth fps

        return () => clearInterval(interval);
    }, [duration, onLoadingComplete]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-background z-50 transition-opacity duration-300">
            <div className="w-full max-w-md px-8">
                <div className="text-center mb-8">
                    <h1
                        className="text-4xl md:text-5xl font-bold mb-2 text-foreground"
                        style={{
                            animation: 'fadeIn 0.6s ease-in-out'
                        }}
                    >
                        <span className="text-foreground">Rifqi</span>{' '}
                        <span className="text-blue-500">Adrianto</span>
                    </h1>
                    <p
                        className="text-sm text-muted-foreground"
                        style={{
                            animation: 'fadeIn 0.8s ease-in-out'
                        }}
                    >
                        Full-Stack Web Developer
                    </p>
                </div>

                {/* Loading Bar Container */}
                <div className="relative">
                    <div className="w-full h-1.5 rounded-full overflow-hidden bg-secondary/30">
                        <div
                            className="h-full bg-linear-to-r from-blue-500 via-blue-400 to-blue-500 rounded-full transition-all duration-75 ease-linear relative"
                            style={{
                                width: `${progress}%`,
                            }}
                        >
                            {/* Shimmer effect */}
                            <div
                                className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-30"
                                style={{
                                    animation: 'shimmer 1.5s infinite',
                                }}
                            />
                        </div>
                    </div>

                    {/* Progress percentage */}
                    <div className="flex justify-between items-center mt-3">
                        <span className="text-xs text-muted-foreground">
                            Loading...
                        </span>
                        <span className="text-xs font-semibold text-blue-500">
                            {Math.round(progress)}%
                        </span>
                    </div>
                </div>

                {/* Dots animation */}
                <div className="flex justify-center gap-2 mt-6">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="w-2 h-2 rounded-full bg-blue-500"
                            style={{
                                animation: `bounce 1.4s infinite ease-in-out`,
                                animationDelay: `${i * 0.16}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
        </div>
    );
};
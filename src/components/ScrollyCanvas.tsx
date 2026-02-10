"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loadedCount, setLoadedCount] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        const imgs: HTMLImageElement[] = [];

        for (let i = 0; i <= 89; i++) {
            const img = new Image();
            img.src = `/sequence/${i.toString().padStart(3, "0")}.webp`;
            img.onload = () => {
                setLoadedCount((prev: number) => prev + 1);
            };
            imgs.push(img);
        }
        setImages(imgs);
    }, []);

    const renderFrame = useCallback((progress: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Determine frame based on scroll progress
        const totalFrames = 89;
        const frameIndex = Math.min(
            totalFrames,
            Math.max(0, Math.floor(progress * totalFrames))
        );

        const img = images[frameIndex];

        if (!img || !img.complete) return;

        // Handle high-DPI displays
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.scale(dpr, dpr);

        // Explicitly set style width/height to match window
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        // Object-fit: cover logic
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawWidth = window.innerWidth;
            drawHeight = window.innerWidth / imgRatio;
            offsetX = 0;
            offsetY = (window.innerHeight - drawHeight) / 2;
        } else {
            drawWidth = window.innerHeight * imgRatio;
            drawHeight = window.innerHeight;
            offsetX = (window.innerWidth - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }, [images]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        renderFrame(latest);
    });

    useEffect(() => {
        const handleResize = () => renderFrame(scrollYProgress.get());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [renderFrame, scrollYProgress]);

    // Initial render when images constitute a valid state
    useEffect(() => {
        if (loadedCount > 0) {
            renderFrame(scrollYProgress.get());
        }
    }, [loadedCount, renderFrame, scrollYProgress]);

    const isLoading = loadedCount < 90;

    return (
        <>
            {/* Loading Overlay - sits on top but container is always rendered */}
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-[#121212] z-50 text-white font-mono">
                    <div className="text-center">
                        <div className="mb-4 text-2xl">Loading Experience...</div>
                        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-white transition-all duration-200 ease-out"
                                style={{ width: `${(loadedCount / 90) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Container is ALWAYS rendered so the ref is always hydrated */}
            <div ref={containerRef} className="h-[500vh] relative bg-[#121212]">
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    <canvas
                        ref={canvasRef}
                        className="block w-full h-full"
                    />
                </div>
            </div>
        </>
    );
}

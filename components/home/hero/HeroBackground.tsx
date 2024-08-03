import { useEffect, useRef } from 'react';

export default function HeroBackground({ containerRef }: {
    containerRef: React.RefObject<HTMLDivElement>;
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mousePosRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const handleResize = () => {
            if (!containerRef.current) return;

            canvas.width = containerRef.current.clientWidth;
            canvas.height = containerRef.current.clientHeight;
            drawGrid();
        };

        const handleMouseMove = (event: MouseEvent) => {
            if (!containerRef.current) return;

            const rect = canvas.getBoundingClientRect();
            mousePosRef.current = {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top,
            };
            drawGrid();
        };

        const drawGrid = () => {
            if (!canvas) return;
            const width = canvas.width;
            const height = canvas.height;
            const gap = 54.8; // distance between plus signs
            const plusSize = 10; // size of each plus sign

            // Clear the canvas
            ctx.clearRect(0, 0, width, height);

            // Set plus sign color
            ctx.strokeStyle = '#D9D9D950';

            // Function to draw a plus sign
            const drawPlus = (x: number, y: number, size: number, angle: number) => {
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(angle);
                ctx.beginPath();
                ctx.moveTo(-size, 0);
                ctx.lineTo(size, 0);
                ctx.moveTo(0, -size);
                ctx.lineTo(0, size);
                ctx.stroke();
                ctx.restore();
            };

            // Draw the grid of plus signs
            for (let x = gap / 2; x < width; x += gap) {
                for (let y = gap / 2; y < height; y += gap) {
                    const dx = mousePosRef.current.x - x;
                    const dy = mousePosRef.current.y - y;
                    const angle = Math.atan2(dy, dx);
                    drawPlus(x, y, plusSize, angle);
                }
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [containerRef]);
  
    return (
        <canvas className="absolute top-0 left-0" ref={canvasRef} />
    );
}
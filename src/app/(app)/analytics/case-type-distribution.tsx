"use client";

import { useEffect, useRef } from "react";

export function CaseTypeDistribution() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const ctx = canvasRef.current?.getContext("2d");
		if (!ctx) return;

		// Mock data
		const data = {
			labels: [
				"Criminal",
				"Civil",
				"Family",
				"Corporate",
				"Property",
				"Tax",
				"Other",
			],
			datasets: [
				{
					data: [18, 22, 12, 15, 10, 8, 5],
					backgroundColor: [
						"rgba(37, 99, 235, 0.7)",
						"rgba(16, 185, 129, 0.7)",
						"rgba(245, 158, 11, 0.7)",
						"rgba(139, 92, 246, 0.7)",
						"rgba(239, 68, 68, 0.7)",
						"rgba(14, 165, 233, 0.7)",
						"rgba(168, 162, 158, 0.7)",
					],
				},
			],
		};

		// Simple horizontal bar chart rendering
		const barHeight = 25;
		const barSpacing = 10;
		const maxValue = Math.max(...data.datasets[0].data);
		const chartWidth = ctx.canvas.width - 150;

		data.labels.forEach((label, index) => {
			const value = data.datasets[0].data[index];
			const barWidth = (value / maxValue) * chartWidth;
			const y = index * (barHeight + barSpacing) + 20;

			// Draw bar
			ctx.fillStyle = data.datasets[0].backgroundColor[index];
			ctx.fillRect(100, y, barWidth, barHeight);

			// Draw label
			ctx.fillStyle = "#000";
			ctx.font = "12px Arial";
			ctx.textAlign = "right";
			ctx.textBaseline = "middle";
			ctx.fillText(label, 90, y + barHeight / 2);

			// Draw value
			ctx.fillStyle = "#000";
			ctx.font = "12px Arial";
			ctx.textAlign = "left";
			ctx.textBaseline = "middle";
			ctx.fillText(value.toString(), barWidth + 110, y + barHeight / 2);
		});
	}, []);

	return (
		<div className="w-full h-[300px] flex items-center justify-center">
			<canvas ref={canvasRef} width={400} height={300} />
		</div>
	);
}
